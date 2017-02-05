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

window.onload = function (){
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
};
