all=document.querySelectorAll("article img")
for (var i=0; i< all.length; i++){
  all[i].setAttribute("data-src", all[i].getAttribute("src"))
  all[i].src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
  all[i].setAttribute("onload","lzld(this)")
}

