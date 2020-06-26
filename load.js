
/*async function rotate(){
		let timeAct = new Date();
		load_picture.style.transform = "rotate(20deg)";
		console.log(time - timeAct);
		if(timeAct - time >= 5000){
			break;
		}
}
let time = new Date();
console.log(+time)
rotate();*/

document.addEventListener("DOMContentLoaded", loaded);

function loaded(){
	load.style.transition = "1s";
	load.style.transform ="translateY(-100%)"; 
	load_picture.style.animation = "none";
}

