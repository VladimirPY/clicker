cash_button.addEventListener("click",cashConvert); 
pineapple.addEventListener("click",countClickes);
pineapple.addEventListener("mouseover",sizeUpPineapple);
pineapple.addEventListener("mouseout",sizeDownPineapple);

function cashConvert(){
	let buf;
	if(+clickes.textContent >= 10){
		buf = Math.trunc(+clickes.textContent / 10);
		clickes.textContent = +clickes.textContent - +buf * 10;
		cash_pointer.textContent = parseInt(cash_pointer.textContent) + buf + "$";
	}
}

function countClickes(){
	clickes.textContent = +clickes.textContent + 1;
}
function sizeUpPineapple(){
	pineapple.style.width = "100%";
}
function sizeDownPineapple(){
	pineapple.style.width = "90%";
}

