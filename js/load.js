//loading animation
document.addEventListener("DOMContentLoaded", loaded);
function loaded(){
	setTimeout(()=>{
		load.style.transition = "1s";
		load.style.transform ="translateY(-100%)"; 
		load.style.opacity ="0"; 
		load_picture.style.animation = "none";
	}, 5000);
}

