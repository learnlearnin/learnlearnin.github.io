/**
 * JavaScript for Learn Learnin'
 */

const Pjax = require('./pjax.min.js')
const topbar = require('./topbar.min.js')

function permalinks(){
	var headings=document.querySelectorAll("h2,h3,h4,h5,h6");
	for (var i=0; i<headings.length; i++){
		var linchor=document.createElement("a");
		linchor.setAttribute("href","#"+headings[i].id);
		linchor.innerHTML=headings[i].innerHTML;
		headings[i].replaceChild(linchor,headings[i].firstChild);
	}
}

function sharebuttons(){
	if (!( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )) {
		var elements = document.getElementsByClassName('mobileshare');
	    for (var i = 0; i < elements.length; i++){
	        elements[i].style.display = "none";
	    }

	}
}

function scrollToHash(){
  if(location.hash){
   var idToGo=location.hash.substr(1);
   document.getElementById(idToGo).scrollIntoView();
  }
  return;
}

function topbarInit(){
  document.addEventListener('pjax:send', topbar.show);
  document.addEventListener('pjax:complete', topbar.hide);
}

function whenDOMReady(){
  scrollToHash();
  permalinks();
  sharebuttons();
  document.ducksearch.q.value="";
  document.getElementById("ducksearch").addEventListener('submit', function(){
    if (document.ducksearch.q.value){
	  document.ducksearch.q.value += ' site:learnlearn.in';
	}
	else {
	  document.ducksearch.q.value = 'about site:learnlearn.in';
	}
	return true;
  });
  topbarInit();
}

function pjax(){
  var pjax = new Pjax({
    cacheBust: false,
    selectors: [
      "title",
      "meta",
      "body"
    ]
  });
  document.addEventListener('pjax:success', whenDOMReady)
}

window.onload = function (){
  pjax();
  whenDOMReady();
};

// Service Worker from https://github.com/chriscoyier/Simple-Offline-Site/blob/master/js/global.js
// ServiceWorker is a progressive technology. Ignore unsupported browsers
if ('serviceWorker' in navigator) {
  console.log('CLIENT: service worker registration in progress.');
  navigator.serviceWorker.register('/service-worker.js').then(function() {
    console.log('CLIENT: service worker registration complete.');
  }, function() {
    console.log('CLIENT: service worker registration failure.');
  });
} else {
  console.log('CLIENT: service worker is not supported.');
}
