score = 0
cross = true
audio=new Audio();
audiogo= new Audio();
setTimeout(() => {
    audio.play();
}, 1000);

document.onkeydown = function (e) {
    if (e.keyCode == 38) {
        itachi = document.querySelector(".itachi");
        itachi.classList.add("animateitachi");
        setTimeout(() => {
            itachi.classList.remove("animateitachi");
        }, 500);

    }
    else if (e.keyCode == 39) {
        itachi = document.querySelector(".itachi");
        itachix = parseInt(window.getComputedStyle(itachi, null).getPropertyValue("left"));
        itachi.style.left = itachix + 112 + "px";
    }

    else if (e.keyCode == 37) {
        itachi = document.querySelector(".itachi");
        itachix = parseInt(window.getComputedStyle(itachi, null).getPropertyValue("left"));
        itachi.style.left = (itachix - 112) + "px";
    }
}

setInterval(() => {
    itachi = document.querySelector(".itachi");
    gameover = document.querySelector(".gameover");
    madra = document.querySelector(".madra");
    // this code will provide the current values of x and y
    itachix = parseInt(window.getComputedStyle(itachi, null).getPropertyValue("left"));
    itachiy = parseInt(window.getComputedStyle(itachi, null).getPropertyValue("top"));
    madrax = parseInt(window.getComputedStyle(madra, null).getPropertyValue("left"));
    madray = parseInt(window.getComputedStyle(madra, null).getPropertyValue("top"));
    xdiff = Math.abs(itachix - madrax);
    ydiff = Math.abs(itachiy - madray);
    // console.log(xdiff, ydiff)

    if (xdiff < 100 && ydiff < 100) {
        gameover.innerHTML="GAME OVER -Reload To Play Again"
        madra.classList.remove("madramove");
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    // cross true hone pr score bdega isliye false hone k ek sec baad dubara true ho jayega aur score bande layak
    // 2 conditions lgane se score hur sec nhi bdega 
    else if (xdiff < 100 && cross) {
        score += 1;
        updatescore(score);
        cross = false
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
        
            animedur = parseFloat(window.getComputedStyle(madra, null).getPropertyValue("animation-duration"));
            newdur = animedur - 0.2;
            madra.style.animationDuration = newdur + 's';
        }, 500);
    }
}, 100);

function updatescore(score) {
    scorecount.innerHTML = "Your Genjutsu :"  + score;
}
