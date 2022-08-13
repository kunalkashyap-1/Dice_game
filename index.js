let rand1=Math.floor((Math.random()*6)+1);
let rand2=Math.floor((Math.random()*6)+1);

function gen_rand1(){
    document.querySelector(".img1").setAttribute("src","css/images/dice"+rand1+".png");
    return rand1;
}

function gen_rand2(){
    document.querySelector(".img2").setAttribute("src","css/images/dice"+rand2+".png");
    return rand2;
}

function winner(){
    if(rand1>rand2){
        document.querySelector("h1").innerHTML="Player 1 Wins";
    }
    else if(rand2>rand1){
        document.querySelector("h1").innerHTML="Player 2 Wins";
    }
    else{
        document.querySelector("h1").innerHTML="DRAW!";
    }
}

function reload(){
    document.location.reload();
}

function toggle_content(){
    document.querySelector(".btn").setAttribute("onclick","reload()");
    document.querySelector(".btn").innerHTML="Play Again";
}