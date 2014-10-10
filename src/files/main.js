/**
 * JavaScript for Learn Learnin'
 */

var fonts=["comic sans ms","Helvetica","Verdana","Garamond","Times New Roman","Arial","monospace"]
var fontsizes=["25px","20px","30px","40px"]
var themes=["light","dark","coral","coral-dark"]
var colors={"light":["cyan","black"], "dark":["grey","white"],"coral":["coral","white"],"coral-dark":["coral","black"]}

var bodystyle=document.body.style;

function readpreferences(){
	bodystyle.fontFamily=localStorage.getItem("fontfamily") || fonts[0];
	bodystyle.fontSize=localStorage.getItem("fontsize") || fontsizes[0];
	
	var usertheme=localStorage.getItem("theme") || themes[0];
	bodystyle.backgroundColor=colors[usertheme][0];
	bodystyle.color=colors[usertheme][1];
}

function getnextmember(array,value){
	var index = array.indexOf(value.replace(/('|")/g,"")); 
	if(index >= 0 && index < array.length - 1) return array[index + 1]; else return array[0]; 
}

function changefont(e){
	e.preventDefault();
	bodystyle.fontFamily=getnextmember(fonts,bodystyle.fontFamily);
	localStorage.setItem("fontfamily",bodystyle.fontFamily);
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
		linchor.innerHTML="⚓";
		headings[i].insertBefore(linchor,headings[i].firstChild);
	}
}

window.onload = function (){
	readpreferences();
	document.getElementById("changefont").addEventListener('click',changefont);
	document.getElementById("changefontsize").addEventListener('click',changefontsize);
	document.getElementById("changetheme").addEventListener('click',changetheme);
	permalinks();
};

