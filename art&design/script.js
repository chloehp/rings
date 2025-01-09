let hasTiktokEmbedLoaded = false;
let readyStateHasChanged = false;

document.onreadystatechange = function () {
    if (readyStateHasChanged === false) {                                               // document is interactive
        const ring = document.getElementById("s006-001");
        const circle = document.getElementById("s006-000");
        const heading = document.getElementById("s006-h");
        const tiktok = document.getElementById("tiktok-iframe");
        const sketchbookColumn = document.getElementById("sketchbook-column");
        const everythingColumn = document.getElementById("everything-else-column");
        console.log(document.readyState);

        setTimeout(function(){
            ring.style.rotate = "420deg";
            circle.style.opacity = "0.09";
            setTimeout(function(){heading.style.opacity = "1";}, 30);
            tiktok.style.opacity = "1";
            tiktok.style.scale = "1";

            loadElement(artList, "sketchbook", sketchbookColumn);
            loadElement(artList, "", everythingColumn);
        }, 150);
        setTimeout(function(){
            //console.log(tiktok.children[1].contentWindow.postMessage.name);
            if (hasTiktokEmbedLoaded !== true) {
                tiktok.children[0].innerHTML = "Failed to load.";
                //setTimeout(vanishElement, 900, tiktok);
            }
            else {
                //tiktok.children[1].style.opacity = "1";
                tiktok.children[0].innerHTML = "";
            }
        }, 9000);
    }
    else {
        //console.log("document has finished loading");
    }
    readyStateHasChanged = true;
}
