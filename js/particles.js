pineapple.addEventListener("click",(e)=>{
	let randTurn = Math.floor(Math.random()*360 + 1);
	let newParticle = particle_template.content.children[0].cloneNode(true);
	let x = e.clientX;
	let y = e.clientY;
	newParticle.style.position = "absolute";
	newParticle.style.left = `${x}px`;
	newParticle.style.top = `${y}px`;
	if(Math.floor(Math.random()*2 +1) == 1){
		newParticle.style.animation = "fallLeft 1s forwards ease-out";
	}
	else{
		newParticle.style.animation = "fallRight 1s forwards ease-out";
	}
	document.body.append(newParticle);
});