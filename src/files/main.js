/**
 * JavaScript for Learn Learnin'
 */

/*
function togglenavtools(e){
	e.preventDefault();
	var navtools=document.getElementById("navtools");
	navtools.style.visibility = navtools.style.visibility=="hidden"? "visible":"hidden";
	return false;
}
*/

function toggleathing(e, thingid){
	e.preventDefault();
	var thing=document.getElementById(thingid);
	thing.style.visibility = thing.style.visibility=="hidden"? "visible":"hidden";
	return false;
}

function tumbleathing(e, thingid){
	e.preventDefault();
	var thing=document.getElementById(thingid);
	thing.style.display = thing.style.display=="none"? "block":"none";
	return false;
}


var fonts=["Cardo","comic sans ms","Helvetica","Verdana","Garamond","Times New Roman","Arial","monospace"];
// var fontsizes=["25px","20px","30px","40px"]
// var themes=["light","dark","coral","coral-dark"]
// var colors={"light":["cyan","black"], "dark":["grey","white"],"coral":["coral","white"],"coral-dark":["coral","black"]}

var bodystyle=document.body.style;

function readpreferences(){
	bodystyle.fontFamily=localStorage.getItem("fontfamily") || fonts[0];
	// bodystyle.fontSize=localStorage.getItem("fontsize") || fontsizes[0];

	// var usertheme=localStorage.getItem("theme") || themes[0];
	// bodystyle.backgroundColor=colors[usertheme][0];
	// bodystyle.color=colors[usertheme][1];

	document.getElementById("navtools").style.visibility="hidden";
}

function getnextmember(array,value){
	var index = array.indexOf(value.replace(/('|")/g,""));
	if(index >= 0 && index < array.length - 1) return array[index + 1]; else return array[0];
}

function changefont(e){
	e.preventDefault();
	bodystyle.fontFamily=getnextmember(fonts,bodystyle.fontFamily);
	localStorage.setItem("fontfamily",bodystyle.fontFamily);
	return false;
}

function changefontsize(e){
	e.preventDefault();
	bodystyle.fontSize=getnextmember(fontsizes,bodystyle.fontSize);
	localStorage.setItem("fontsize",bodystyle.fontSize);
}

function changetheme(e){
	e.preventDefault();
	var usertheme=getnextmember(themes,localStorage.getItem("theme")||themes[0]);
	bodystyle.backgroundColor=colors[usertheme][0];
	bodystyle.color=colors[usertheme][1];
	localStorage.setItem("theme",usertheme);
}

function permalinks(){
	var headings=document.querySelectorAll("h2,h3,h4,h5,h6");
	for (var i=0; i<headings.length; i++){
		var linchor=document.createElement("a");
		linchor.setAttribute("href","#"+headings[i].id);
		linchor.setAttribute("class","linchor");
		linchor.innerHTML="¶";//"⚓";
		headings[i].insertBefore(linchor,headings[i].firstChild);
	}
}

function sharebuttons(){
	if (!( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )) {
		var elements = document.getElementsByClassName('mobileshare');
	    for (var i = 0; i < elements.length; i++){
	        elements[i].style.visibility = "hidden";
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

function generateTOC(){
  var headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  var filltoc=document.createElement('ul');
  filltoc.setAttribute('id','toc');
  for(var i=1; i<headings.length ;i++){
    var listitem = document.createElement('li');
    listitem.setAttribute('class',"toc"+headings[i].tagName.toLowerCase());

    var link = document.createElement('a');
    link.setAttribute('href',"#"+headings[i].id);
    link.innerHTML=headings[i].innerHTML;

    listitem.appendChild(link);
    filltoc.appendChild(listitem);
  }
  console.log('replacing toc by'+filltoc.innerHTML);
  document.getElementById('toc').appendChild(filltoc);
}

function hidethings(tohide){
  for (var i=0;i<tohide.length;i++){
    document.getElementById(tohide[i]).style.visibility="hidden";
  }
}

function nonethings(tohide){
  for (var i=0;i<tohide.length;i++){
    document.getElementById(tohide[i]).style.display="none";
  }
}


window.onload = function (){
	readpreferences();
	//generateTOC();
  scrollToHash();
	hidethings(['navtools']);
	nonethings(['toc']);
	document.getElementById("togglenavtools").addEventListener('click',function(e){toggleathing(e,"navtools");});
	document.getElementById("toggletoc").addEventListener('click',function(e){tumbleathing(e,"toc");});
	document.getElementById("changefont").addEventListener('click',changefont);
	document.getElementById("clearstorage").addEventListener('click',function(e){
		e.preventDefault();
		localStorage.clear();
		location.reload();
		return false;
	});
	// document.getElementById("changefontsize").addEventListener('click',changefontsize);
	// document.getElementById("changetheme").addEventListener('click',changetheme);
	permalinks();
	sharebuttons();
};
