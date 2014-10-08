/**
 * JavaScript for Learn Learnin'
 */

var fonts=["comic sans ms","Helvetica","Verdana","Garamond","Times New Roman","Arial"]
var fontsizes=["25px","20px","30px","40px"]

function readpreferences(){
	document.body.style.fontFamily=localStorage.getItem("fontfamily") || fonts[0];
	document.body.style.fontSize=localStorage.getItem("fontsize") || fontsizes[0];
}

function getnextmember(array,value){
	var index = array.indexOf(value); 
	if(index >= 0 && index < array.length - 1) return array[index + 1]; else return array[0]; 
}

function changefont(e){
	e.preventDefault();
	document.body.style.fontFamily=getnextmember(fonts,document.body.style.fontFamily);
	localStorage.setItem("fontfamily",document.body.style.fontFamily);
}

function changefontsize(e){
	e.preventDefault();
	document.body.style.fontSize=getnextmember(fontsizes,document.body.style.fontSize);
	localStorage.setItem("fontsize",document.body.style.fontSize);
}

window.onload = function (){
	readpreferences();
	document.getElementById("changefont").addEventListener('click',changefont);
	document.getElementById("changefontsize").addEventListener('click',changefontsize);
};

