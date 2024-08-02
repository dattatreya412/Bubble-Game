let timerElement = document.querySelector("#timer");
let hitElement = document.querySelector('#hit');
let scoreElement = document.querySelector("#score");
let containerElement  = document.querySelector("#container");
let startButton = document.querySelector("#start");
let stopButton = document.querySelector("#stop");
let timer = 0;
let hit = 0;
let score = 0;
timerElement.textContent = 0;
hitElement.textContent = hit;
scoreElement.textContent = score;
containerElement.addEventListener("click", (det)=>{
    let selectedValue = Number(det.target.innerHTML);
    console.log(selectedValue)
    if(hit === selectedValue){
        editScore();
        console.log(hit, "now the value should be updated", selectedValue)
    }
    makeBubbles();
})
startButton.addEventListener("click",()=>{
    makeBubbles();
    startTimer();
    setHit();
    stopButton.style.backgroundColor = "red";
})
stopButton.addEventListener("click",()=>{
    stopButton.style.backgroundColor = "";
    timerElement.textContent = 0;
    hitElement.textContent = 0;
    hit = 0;
    timer = 0;
    containerElement.innerHTML = `<h1>your score is ${score}`
})
function makeBubbles(){
    let clutter = "";
    for (let i = 0; i < 154; i++) {
        clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
    }

    const containerElement = document.querySelector("#container");
    containerElement.innerHTML = clutter;
}
function startTimer(){
    score = 0;
    scoreElement.textContent = score;
    timer = 60;
    timerElement.textContent = timer;
    const timerInt = setInterval(()=>{
        if(timer > 0){
            timer--;
            timerElement.textContent = timer;
        }
        else{
            clearInterval(timerInt);
        }
    }, 1000)
}
function setHit(){
    hit = Math.floor(Math.random()*10);
    hitElement.textContent = hit;
}
function editScore(){
    score += 10;
    scoreElement.textContent = score;
}


