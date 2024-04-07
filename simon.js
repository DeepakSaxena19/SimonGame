let gamSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];
let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("started");
        started=true;
    }
    levelUp();
})

function gameFlass(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },200);
}

function levelUp(){
    level++;
    h2.innerText=`Level ${level}`;
    //random btn
    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`)
    // game sequence array me puch ho jayega color
    gamSeq.push(randColor);
    gameFlass(randBtn);
    //level up hone ke bad hame user seq suru se suru karna hoga
    userSeq=[];
}
function checkAns(idx){
    // console.log(level);
    // let idx=level-1;
    if(userSeq[idx]=== gamSeq[idx]){
        // console.log("Same Value");
        if(userSeq.length == gamSeq.length){
            setTimeout(levelUp(),1000);
        }
    }else{
        h2.innerHTML=`Game over!! Your score was <b>${level}<b> <br>Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnPress(){
    //console.log(this);
    let btn=this;
    userFlash(btn);
    //
    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    //console.log(userColor);
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    userSeq=[];
    gamSeq=[];
    level=0;
}
setTimeout(function(){
    
},175000)