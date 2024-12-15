window.scroll(0, 300);

function scrollUpdate() {
    const scrolled = document.documentElement.scrollTop / 30;
    const rightring = document.getElementById("s006-001");
    const leftring = document.getElementById("s005-001");
    rightring.style.rotate = scrolled + "deg";
    leftring.style.rotate = "-" + scrolled + "deg";
}