let gameSeq = [];
let userSeq = [];

let btns = ["red","yellow","blue","orange"];

let level = 0;
let started = false;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
        started = true;
        alert("Game Starting...");
        levelUp();
    }
});

function levelUp(){
    userSeq = []; 
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor  = btns[randIdx]; 
    let randBtn = document.querySelector(`.${randColor}`); // class ke naam le liye dot
    gameSeq.push(randColor);
    // console.log(gameSeq); // command off to cheat..!!!
    gameFlash(randBtn);
}

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userFlash"); 
    setTimeout(function() {
        btn.classList.remove("userFlash");
    },250);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp , 1000);
        }
    }else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b>.<br>Press any key to start again.`;
        reset();
    }
    
}
function btnPress(){
    console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtn = document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
