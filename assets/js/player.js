
document.title = document.querySelector(".title").textContent

const mainVideo = document.querySelector('#main-Video');
const musicList = document.querySelector('.music-list');
const playlist = document.getElementById('playlist');
const AllLessons = document.querySelector('.AllLessons');
const videoTitle = document.querySelector('.title');


const ulTag = document.querySelector("ul");
AllLessons.innerHTML = `${allVideos.length} Aulas`


let musicIndex = 1;
window.addEventListener('load',()=>{
   loadMusic(musicIndex);
   playingNow();
})
function playMusic(){
   mainVideo.play();
   playlist.classList.add('active')
}
function loadMusic(indexNumb){
   mainVideo.src = `${allVideos[indexNumb - 1].src}.mp4`;
   videoTitle.innerHTML = `${indexNumb}. ${allVideos[indexNumb - 1].name}`
   
}

for(let i = 0; i < allVideos.length; i++){

   let liTag = `<li li-index="${i + 1}">
   
      <div class="row">
      <p style="font-size:9pt;" id="pmodulo">${localStorage.getItem("modulo")}</p>
         <span>${i + 1}. ${allVideos[i].name}</span>
      </div>
      <video  class="${allVideos[i].id}"  src="${allVideos[i].src}.mp4"  style="display: none;" title="${allVideos[i].name}"></video>

      <span id="${allVideos[i].id}" class="duration"></span>
      
   </li>`;
   playlist.insertAdjacentHTML('beforeend',liTag); 

   let liVideoDuration = ulTag.querySelector(`#${allVideos[i].id}`)
   let liVideoTag = ulTag.querySelector(`.${allVideos[i].id}`);
   

   liVideoTag.addEventListener("loadeddata", ()=>{
      let videoDuration = liVideoTag.duration;
      let totalMin = Math.floor(videoDuration / 60);
      let totalSec = Math.floor(videoDuration % 60);
      // if totalSec is less then 10 then add 0 at the beginging
      totalSec < 10 ? totalSec = "0"+ totalSec : totalSec
      liVideoDuration.innerText = `${totalMin}:${totalSec}`;
      // adding t duration attribe which we'll use below
      liVideoDuration.setAttribute("t-duration", `${totalMin}:${totalSec}`);
   })  
}
// let's work on play particular song on click
const allLiTags = playlist.querySelectorAll('li');
function playingNow(){
   for(let j = 0; j<allVideos.length; j++){
      if(allLiTags[j].classList.contains('playing')){
         allLiTags[j].classList.remove("playing")
      }
      if(allLiTags[j].getAttribute('li-index')==musicIndex){
         allLiTags[j].classList.add('playing')
      }
      // adding onclick attribute in all li tags
      allLiTags[j].setAttribute("onclick", "clicked(this)")
   }

}

function clicked(element){
   // getting li index of particular clicked li tag
   let getIndex = element.getAttribute("li-index");
   musicIndex = getIndex;
   loadMusic(musicIndex);
   playMusic();
   playingNow();}


function modonoite(){

   
  if(localStorage.getItem("noturno") == "desativado"){
   Swal.fire(
      'Modo Noturno Ativado!',
      'Clique Novamente Para Desativar!',
      'success'
    )
    document.body.style.background = "#1c1c1c"
    document.querySelector("#title").style.color = "#ff7f00"
    document.querySelector("#iconmodo").style.color = "#ff7f00"
    localStorage.setItem("noturno", "ativado")
  }
  else{
   Swal.fire(
      'Modo Noturno Desativado!',
      'Clique Novamente Para Ativado!',
      'success'
    )
    document.body.style.background = "#ff7f00"
    document.querySelector("#title").style.color = "#1c1c1c"
    document.querySelector("#iconmodo").style.color = "#fff"
    localStorage.setItem("noturno", "desativado")
  }
}