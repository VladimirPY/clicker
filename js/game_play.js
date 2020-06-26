cash_button.addEventListener("click",cashConvert); 
pineapple.addEventListener("click",countClickes);
pineapple.addEventListener("mouseover",sizeUpPineapple);
pineapple.addEventListener("mouseout",sizeDownPineapple);
document.body.addEventListener("mousedown",(e)=>{e.preventDefault();});
cash_pointer.textContent = (localStorage.getItem("cashPointer") || 0) + "$";
clickes.children[0].textContent = localStorage.getItem("clickesPointer") || 0;
function setIntervalOnBonus(){if(localStorage.getItem("bonusSec") != undefined){
	setInterval(()=>{
		clickes.children[0].textContent = +clickes.textContent + 1;
	},localStorage.getItem("bonusSec")*1000);
}}
setIntervalOnBonus();
function cashConvert(){
	let buf;
	let multiplier = localStorage.getItem("bonusMoney");
	if(+clickes.textContent >= 10){
		buf = Math.trunc(+clickes.textContent / 10);
		clickes.children[0].textContent = +clickes.children[0].textContent - +buf * 10;
		if (multiplier == 1) {cash_pointer.textContent = parseInt(cash_pointer.textContent) + buf*2 + "$";}
		else if (multiplier == 2) {cash_pointer.textContent = parseInt(cash_pointer.textContent) + buf*3 + "$";}
		else if (multiplier == 3) {cash_pointer.textContent = parseInt(cash_pointer.textContent) + buf*5 + "$";}
		else {cash_pointer.textContent = parseInt(cash_pointer.textContent) + buf + "$";}
	}
	localStorage.setItem("cashPointer",parseInt(cash_pointer.textContent));
	localStorage.setItem("clickesPointer",clickes.textContent);
}

function countClickes(){
	if(localStorage.getItem("bonusClicks") == 1){
		clickes.children[0].textContent = +clickes.textContent + 2;
	}
	else if(localStorage.getItem("bonusClicks") == 2){
		clickes.children[0].textContent = +clickes.textContent + 5;
	}
	else if(localStorage.getItem("bonusClicks") == 3){
		clickes.children[0].textContent = +clickes.textContent + 10;
	}
	else{
		clickes.children[0].textContent = +clickes.textContent + 1;
	}
	localStorage.setItem("clickesPointer",clickes.textContent);
	console.log(localStorage.getItem("clickesPointer"));
}
function sizeUpPineapple(){
	pineapple.style.width = "100%";
}
function sizeDownPineapple(){
	pineapple.style.width = "90%";
}

