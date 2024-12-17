//window.scroll(0, 120);
document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        document.getElementById("loady").style.scale = 0.15;
    }
}
setInterval(scrollUpdate, 120);

function scrollUpdate() {
    const scrolled = document.documentElement.scrollTop / 21;
    const rightring = document.getElementById("s006-001");
    const leftring = document.getElementById("s005-001");
    rightring.style.rotate = scrolled + "deg";
    leftring.style.rotate = "-" + scrolled + "deg";
    //console.log(document.readyState);
}