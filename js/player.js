let music_array = audio_player.children;
let playing_now = 0;
let time = 0;

function playMusic(e){
	audio_player.play();
	audio_player.currentTime = time;
	e.target.classList.add("hidden_cntrl");
	player.children[2].classList.remove("hidden_cntrl");
}
function pauseMusic(e) {
	time = audio_player.currentTime;
	audio_player.pause();
	e.target.classList.add("hidden_cntrl");
	player.children[1].classList.remove("hidden_cntrl");
	
}
function stopMusic(e){
	audio_player.pause();
	audio_player.currentTime = 0;
	player.children[1].classList.remove("hidden_cntrl");
	player.children[2].classList.add("hidden_cntrl");
}
function nextMusic(e){
	playing_now += 1;
	if(playing_now >= music_array.length){
		audio_player.setAttribute('src',music_array[0].getAttribute("src"));
		audio_player.play();
		playing_now = 0;
	}
	else{
		audio_player.setAttribute('src',music_array[playing_now].getAttribute("src"));
		audio_player.play();
	}
	player.children[1].classList.add("hidden_cntrl");
	player.children[2].classList.remove("hidden_cntrl");
}
function previousMusic(e){
	playing_now -= 1;
	if(playing_now >= 0){
		audio_player.setAttribute('src',music_array[playing_now].getAttribute("src"));
		audio_player.play();
	}
	else{
		audio_player.setAttribute('src',music_array[0].getAttribute("src"));
		audio_player.play();
		playing_now = 0;
	}
	player.children[1].classList.add("hidden_cntrl");
	player.children[2].classList.remove("hidden_cntrl");
}
function muteMusic(e){
	if(audio_player.muted == true){
		audio_player.muted = false;
		e.target.classList.toggle("fa-volume-up");
		e.target.classList.toggle("fa-volume-mute");
	}
	else{
		audio_player.muted = true;
		e.target.classList.toggle("fa-volume-mute");
		e.target.classList.toggle("fa-volume-up");
	}
}

let player = document.getElementById("player");
player.addEventListener('click',(e)=>{
	if(e.target === player.children[2])
		pauseMusic(e);
	if(e.target === player.children[1])
		playMusic(e);
	if(e.target === player.children[3])
		stopMusic(e);
 	if(e.target === player.children[4])
 		nextMusic(e);
 	if(e.target === player.children[0])
 		previousMusic(e);
	if(e.target === player.children[5])
		muteMusic(e);
	setInterval(()=>{
		if(audio_player.currentTime == audio_player.duration){
			nextMusic()
		}
		console.log(audio_player.duration);
	},1000);
});




/*let volume_control1 = document.getElementsByClassName("volume_line")[0];
volume_control1.addEventListener("mousedown",(e)=>{
	e.target.style.left = `${e.clientX - 50}px`;
	console.log(e.clientX);
});

let volume_control2 = document.getElementsByClassName("volume_audio")[0];
volume_control2.addEventListener("click",(e)=>{
	let line = document.getElementsByClassName("volume_line")[0];
	line.style.transform = `translateX(-${e.clientX}px)`;
});*/



