let bonuses_menu = document.getElementsByClassName("text_bonus");
let close_bonuses_menu = document.getElementsByClassName("bonus");

bonuses_menu[0].addEventListener("click",openBonuses);
bonuses_menu[1].addEventListener("click",openBonuses);
close_bonuses_menu[0].children[4].addEventListener("click",closeBonuses);
close_bonuses_menu[1].children[4].addEventListener("click",closeBonuses);

function setActiveBonuses(){
	let bonus_click_insec = document.querySelector(".insec");
	bonus_click_insec.children[1].textContent = `${localStorage.getItem("bonusSec") || 0} sec`
	if(localStorage.getItem("bonusMoney") == 3){
		for(let i = 0; i < localStorage.getItem("bonusMoney"); i++){
			elements_bonuses_change[i].style.color = "lime";
			elements_bonuses_change[i].style.borderColor = "lime";
		}
	}
	if(localStorage.getItem("bonusMoney") == 2){
		for(let i = 0; i < localStorage.getItem("bonusMoney"); i++){
			elements_bonuses_change[i].style.color = "lime";
			elements_bonuses_change[i].style.borderColor = "lime";
		}
	}
	if(localStorage.getItem("bonusMoney") == 1){
		elements_bonuses_change[0].style.color = "lime";
		elements_bonuses_change[0].style.borderColor = "lime";
	}
	let temp = [elements_bonuses_change[3],elements_bonuses_change[4],elements_bonuses_change[5]];

	if(localStorage.getItem("bonusClicks") == 3){
		for(let i = 0; i < localStorage.getItem("bonusClicks"); i++){
			temp[i].style.color = "#E94FF1";
			temp[i].style.borderColor = "#E94FF1";
		}
	}
	if(localStorage.getItem("bonusClicks") == 2){
		for(let i = 0; i < localStorage.getItem("bonusClicks"); i++){
			temp[i].style.color = "#E94FF1";
			temp[i].style.borderColor = "#E94FF1";
		}
	}
	if(localStorage.getItem("bonusClicks") == 1){
		temp[0].style.color = "#E94FF1";
		temp[0].style.borderColor = "#E94FF1";
	}
}


function openBonuses(e){
	e.target.parentElement.style.height = "350px";
}

function closeBonuses(e){
	e.target.parentElement.style.height = "50px";
}
function chekeLocalStorageBonuses(){
	if(localStorage.getItem("bonusMoney") == undefined){
		localStorage.setItem("bonusMoney",0);
	}
	if (localStorage.getItem("bonusClicks") == undefined){
		localStorage.setItem("bonusClicks",0);
	}
}

let buy_bonuses = document.querySelectorAll(".buy_hover");
let insec_bonus = document.querySelector(".click_insec_buy");
insec_bonus.children[0].textContent = `${localStorage.getItem("bonusSec") || 4}`;
let elements_bonuses_change = document.querySelectorAll(".bonus_box")
document.body.querySelector(".block_buy_container").addEventListener("click",(e)=>{
	chekeLocalStorageBonuses();
	if((e.target == buy_bonuses[0] || 
		e.target == buy_bonuses[0].children[0] || 
		e.target == buy_bonuses[0].children[0].children[0] ||
		e.target == buy_bonuses[0].children[1]) 
		&& (localStorage.getItem("bonusMoney") < 1 )
		&& parseInt(cash_pointer.textContent) >= 20){

		cash_pointer.textContent = parseInt(cash_pointer.textContent) - 20 + "$";
		localStorage.setItem("bonusMoney",1);
		setActiveBonuses();
	}
	if((e.target == buy_bonuses[1] || 
		e.target == buy_bonuses[1].children[0] || 
		e.target == buy_bonuses[1].children[0].children[0] ||
		e.target == buy_bonuses[1].children[1]) &&
		localStorage.getItem("bonusMoney") == 1 &&
		parseInt(cash_pointer.textContent) >= 40){

		cash_pointer.textContent = parseInt(cash_pointer.textContent) - 40+ "$";
		localStorage.setItem("bonusMoney",2);
		setActiveBonuses();
	}
	if((e.target == buy_bonuses[2]|| 
		e.target == buy_bonuses[2].children[0] || 
		e.target == buy_bonuses[2].children[0].children[0] ||
		e.target == buy_bonuses[2].children[1]) &&
		localStorage.getItem("bonusMoney") == 2 &&
		parseInt(cash_pointer.textContent) >= 60){

		cash_pointer.textContent = parseInt(cash_pointer.textContent) - 60+ "$";
		localStorage.setItem("bonusMoney",3);
		setActiveBonuses();
	}
	if((e.target == buy_bonuses[3]|| 
		e.target == buy_bonuses[3].children[0] || 
		e.target == buy_bonuses[3].children[0].children[0] ||
		e.target == buy_bonuses[3].children[1]) &&
		localStorage.getItem("bonusClicks") < 1 &&
		parseInt(cash_pointer.textContent) >= 10){

		cash_pointer.textContent = parseInt(cash_pointer.textContent) - 10+ "$";
		localStorage.setItem("bonusClicks",1);
		setActiveBonuses();
	}
	if((e.target == buy_bonuses[4]|| 
		e.target == buy_bonuses[4].children[0] || 
		e.target == buy_bonuses[4].children[0].children[0] ||
		e.target == buy_bonuses[4].children[1]) &&
		localStorage.getItem("bonusClicks") == 1 &&
		parseInt(cash_pointer.textContent) >= 30){

		cash_pointer.textContent = parseInt(cash_pointer.textContent) - 30+ "$";		
		localStorage.setItem("bonusClicks",2);
		setActiveBonuses();
	}
	if((e.target == buy_bonuses[5]|| 
		e.target == buy_bonuses[5].children[0] || 
		e.target == buy_bonuses[5].children[0].children[0] ||
		e.target == buy_bonuses[5].children[1]) &&
		localStorage.getItem("bonusClicks") == 2 &&
		parseInt(cash_pointer.textContent) >= 50){

		cash_pointer.textContent = parseInt(cash_pointer.textContent) - 50+ "$";		
		localStorage.setItem("bonusClicks",3);
		setActiveBonuses();
	}
});
insec_bonus.addEventListener("click",()=>{
	if(parseInt(cash_pointer.textContent) >= 100){
		if(localStorage.getItem("bonusSec") == undefined){
			localStorage.setItem("bonusSec",4);
			insec_bonus.children[0].textContent = 4;
			cash_pointer.textContent = (parseInt(cash_pointer.textContent) - 100) + "$";
			setIntervalOnBonus();
			window.reload();
		}
		else if(localStorage.getItem("bonusSec") == 4){
			localStorage.setItem("bonusSec",3);
			insec_bonus.children[0].textContent = 3;
			cash_pointer.textContent = (parseInt(cash_pointer.textContent) - 100) + "$";
			setIntervalOnBonus();
			window.reload();
		}
		else if(localStorage.getItem("bonusSec") == 3){
			localStorage.setItem("bonusSec",2);
			insec_bonus.children[0].textContent = 2;
			cash_pointer.textContent = (parseInt(cash_pointer.textContent) - 100) + "$";
			setIntervalOnBonus();
			window.reload();
		}
		else if(localStorage.getItem("bonusSec") == 2){
			localStorage.setItem("bonusSec",1);
			insec_bonus.children[0].textContent = 1;
			cash_pointer.textContent = (parseInt(cash_pointer.textContent) - 100) + "$";
			setIntervalOnBonus();
			window.reload();
		}
		else{
			insec_bonus.style.opacity = "0";
			document.querySelector(".insec_price").style.opacity = "0";
			cash_pointer.textContent = (parseInt(cash_pointer.textContent) - 100) + "$";
			setIntervalOnBonus();
			window.reload();
		}
		console.log(localStorage.getItem("bonusSec"));
	}
});
setActiveBonuses();