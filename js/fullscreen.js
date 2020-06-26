fullscreen.addEventListener("click",()=>{
	document.documentElement.requestFullscreen();
	fullscreen.style.color = "orange";
	notfullscreen.style.color = "white";
});
notfullscreen.addEventListener("click",()=>{
	document.exitFullscreen();
	notfullscreen.style.color = "orange";
	fullscreen.style.color = "white";
});