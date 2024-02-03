/**
 * JavaScript for Learn Learnin'
 */

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
  if (!('canShare' in navigator)) return;

  const shareData = {
    title: document.title,
    text: document.title,
    url: location.href,
  };
  
  if (!navigator.canShare(shareData)) return;

  const btn = document.createElement("a");
  btn.href="";
  btn.appendChild(document.createTextNode("Elsewhere"));
  
  btn.addEventListener("click", async (e) => {
    e.preventDefault();
    navigator.share(shareData);
  });

  document.querySelector("aside.share").appendChild(btn);
}

function scrollToHash(){
  if(location.hash){
   var idToGo=location.hash.substr(1);
   document.getElementById(idToGo).scrollIntoView();
  }
  return;
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
}


window.onload = function (){
  whenDOMReady();
};

if ('serviceWorker' in navigator) {
navigator.serviceWorker.getRegistrations().then( function(registrations) { for(let registration of registrations) { registration.unregister(); } }); 
}
