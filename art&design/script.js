let hasTiktokEmbedLoaded = false;

document.onreadystatechange = function () {
    const ring = document.getElementById("s006-001");
    const circle = document.getElementById("s006-000");
    const heading = document.getElementById("s006-h");
    const tiktok = document.getElementById("tiktok-iframe");
    setTimeout(function(){
        ring.style.rotate = "420deg";
        circle.style.opacity = "0.09";
        setTimeout(function(){heading.style.opacity = "1";}, 30);
    }, 150);
    setTimeout(function(){
        if (hasTiktokEmbedLoaded !== true) {
            tiktok.children[0].innerHTML = "Failed to load";
            setTimeout(vanishElement, 900, tiktok);
        }
        else {
            tiktok.children[0].innerHTML = "";
        }
    }, 9000);
}
