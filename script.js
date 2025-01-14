//elements
let rightring;
let leftring;
let circle;

document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        const loady = document.getElementById("loady");
        const loadyText = document.getElementById("loady-text");
        circle = document.querySelectorAll(".ringc--circle");
        document.getElementById("toptext-centre").scrollIntoView(true);    
        document.getElementById("s008-000-l").remove(); 

        rightring = document.getElementById("s006-001");
        leftring = document.getElementById("s005-001");

        loady.style.scale = 1;
        loadyText.style.color = "#6cac8500";
        document.body.style.backgroundColor = "#f1dbbf";
        document.getElementById("toptext-centre").scrollIntoView(true);     
        setInterval(scrollUpdate, 120);

        setTimeout(function(){
            loady.remove();
            loadyText.remove();
        }, 1800);
    }
}

function scrollUpdate() {
    const docScroll = document.documentElement.scrollTop;
    const scrolled = docScroll / (6 + (screen.width / 150));    
    rightring.style.rotate = scrolled + "deg";
    leftring.style.rotate = "-" + scrolled + "deg";
    
    if (docScroll > 240) {
        circle[0].style.opacity = "0.3";
        circle[1].style.opacity = "0.3";
        circle[2].style.opacity = "0.3";
    }
    else {
        circle[0].style.opacity = "";
        circle[1].style.opacity = "";
        circle[2].style.opacity = "";
    }
}

let flipDegrees = 0;
function flip(event) {
    const flipElement = event.currentTarget;
    flipElement.style.transformStyle = "preserve-3d";                   // add only when animating as makes it slightly blurry
    flipDegrees += 540;
    flipElement.style.transform = "rotateY(" + flipDegrees + "deg)";
    console.log("flip to " + flipDegrees);
    
    const recordFlipDegrees = flipDegrees
    setTimeout(function(){
        if (flipDegrees > recordFlipDegrees + 5400) pew(flipElement);   // if clicked like 10 times in 3 seconds, pew
    }, 3000);
}

let isPewAlreadyRunning = false;
function pew(pewElement) {
    if (isPewAlreadyRunning === false) {
        isPewAlreadyRunning = true;
        console.log("PEW!");
        pewElement.style.transform = ("translate(0, -6000%)");
        pewElement.style.pointerEvents = "none";
    
        setTimeout(function(){
            pewElement.style.transform = ("translate(0, -150%)");
        }, 3000);  
        setTimeout(function(){
            isPewAlreadyRunning = false;
            pewElement.style.transform = ("translate(0, 0)");
            pewElement.style.pointerEvents = "all";
        }, 15000);                                                      // pew resets after 15 secs (can pew again)
    }
}