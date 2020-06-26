let  themes_choose = document.getElementsByClassName("settings_container")[0];

function themeCheckLocalStorage(){
	load.style.backgroundColor = localStorage.getItem("load") || "#151515";
	if(localStorage.getItem('theme') == 'dark'){
		setDarkTheme();
	}
	else if(localStorage.getItem('theme') == 'light'){
		setLightTheme();
	}
	else{
		setDarkTheme();
	}
}
themeCheckLocalStorage();

themes_choose.children[0].addEventListener("click",setDarkTheme);
themes_choose.children[1].addEventListener("click",setLightTheme);
themes_choose.children[3].addEventListener("click",setLightLoad);
themes_choose.children[4].addEventListener("click",setDarkLoad);

function setDarkLoad() {
	localStorage.setItem("load","#151515");
	window.location.reload();
}

function setLightLoad() {
	localStorage.setItem("load","orange");
	window.location.reload();
}

function setDarkTheme(e){
	document.body.style.backgroundColor = "#151515";
	document.getElementsByClassName("wrapper_parent")[0].style.backgroundColor = "#151515";
	document.getElementsByClassName("header")[0].classList.remove("light");
	[...document.getElementsByClassName("bonus")].forEach(function(e){
		e.classList.remove("light");
	});
	[...document.getElementsByClassName("card_menu")].forEach(function(e){
		e.classList.remove("light");
		e.children[0].classList.remove("light");
		e.style.border = "solid 4px #D89B3D"; 
	});
	document.getElementById("clickes").classList.remove("light");
	document.getElementById("pineapple").setAttribute("src","images/pineapple_dark.png");
	[...document.getElementsByClassName("gifka")].forEach(function(e){
		e.setAttribute("src","images/pa_dark.gif");
	});
	document.getElementById("cash_button").style.backgroundColor = "black";
	localStorage.setItem("theme","dark");
}

function setLightTheme(e){
	document.body.style.backgroundColor = "beige";
	document.getElementsByClassName("header")[0].classList.add("light");
	document.getElementsByClassName("wrapper_parent")[0].style.backgroundColor = "beige";
	[...document.getElementsByClassName("bonus")].forEach((e)=>{
		e.classList.add("light");
	});
	[...document.getElementsByClassName("card_menu")].forEach(function(e){
		e.classList.add("light");
		e.style.border = "solid 4px orange"; 
		e.children[0].classList.add("light");
	});
	document.getElementById("clickes").classList.add("light");
	document.getElementById("pineapple").setAttribute("src","images/pineapple_light.png");
	[...document.getElementsByClassName("gifka")].forEach(function(e){
		e.setAttribute("src","images/pa_light.gif");
	});
	document.getElementById("cash_button").style.backgroundColor = "orange";
	localStorage.setItem("theme","light");
}