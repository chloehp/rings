window.scroll(0, 120);
setInterval(scrollUpdate, 120);

function scrollUpdate() {
    const scrolled = document.documentElement.scrollTop / 24;
    const rightring = document.getElementById("s006-001");
    const leftring = document.getElementById("s005-001");
    rightring.style.rotate = scrolled + "deg";
    leftring.style.rotate = "-" + scrolled + "deg";
}