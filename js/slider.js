let slide_button = document.getElementsByClassName("slide_button");
let slide_elements = document.getElementsByClassName("guide_slider")[0].children;
let current_element_slide = 0;

slide_button[0].addEventListener("click",slideUp);

slide_button[1].addEventListener("click",slideDown);

document.getElementsByClassName("guide_slider")[0].addEventListener("wheel",(e)=>{
	console.log(e.deltaY +"    "+e.deltaX);
	if(e.deltaY == 100){//down
		slideDown();
	}
	if(e.deltaY == -100){//up
		slideUp();
	}
});

function slideUp(){
	if(current_element_slide == 3){
			for (let i = 0; i < slide_elements.length; i++){
				slide_elements[i].style.top = `0`;
			}
			current_element_slide = 0;
		}
		else{
			for (let i = 0; i < slide_elements.length; i++){
				slide_elements[i].style.top = `${-400 * (current_element_slide + 1)}px`;
			}
			current_element_slide += 1;
		}
}
function slideDown(){
	if(current_element_slide == 0){
			for (let i = 0; i < slide_elements.length; i++){
				slide_elements[i].style.top = `-1200px`;
			}
			current_element_slide = 3;
		}
		else{
			for (let i = 0; i < slide_elements.length; i++){
				slide_elements[i].style.top = `${-400 * (current_element_slide - 1)}px`;
			}
			current_element_slide -= 1;
		}
}