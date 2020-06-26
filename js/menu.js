document.body.addEventListener("click",(event)=>{
	if(!event.target.classList.contains("card_menu") &&
		!event.target.classList.contains("temp") && 
		!event.target.classList.contains("temp2") &&
		!event.target.classList.contains("temp3")){
		deleteClass();
	}
	else if(event.target.classList.contains("temp")){
		deleteClass();
		event.target.parentElement.classList.add("menu_up");

	}
	else if(event.target.classList.contains("temp2")){
		deleteClass();
		event.target.parentElement.parentElement.classList.add("menu_up");
	}
	else if(!event.target.classList.contains("temp3")){
		deleteClass();
		event.target.classList.toggle("menu_up");
	}
});
function deleteClass(){
	let collection = document.body.getElementsByClassName("card_menu");
		for(let i of collection){
			i.classList.remove("menu_up");
		} 
}
let closeButtonCollection = document.querySelectorAll(".close_button");
let closeButtonLeftCollection =  document.querySelectorAll(".close_button_left");
console.log(closeButtonLeftCollection);
for(let i of closeButtonCollection){
	i.addEventListener("mouseover",()=>{
		i.parentElement.style.borderColor = "red!important";
	});
}
for(let i of closeButtonLeftCollection){
	i.addEventListener("mouseover",()=>{
		i.parentElement.style.borderColor = "red!important";
	});
}
