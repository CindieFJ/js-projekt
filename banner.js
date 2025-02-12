document.addEventListener("DOMContentLoaded", () => {
    const banner = document.querySelector(".banner");
    const texts = 
    ["TB25 / ODENSE / TB25 / ODENSE / TB25 / ODENSE / TB25 / ODENSE / TB25 / ODENSE", 
    "TB25 / ODENSE / TB25 / ODENSE / TB25 / ODENSE / TB25 / ODENSE / TB25 / ODENSE",
    "TB25 / ODENSE / TB25 / ODENSE / TB25 / ODENSE / TB25 / ODENSE / TB25 / ODENSE",
    "TB25 / ODENSE / TB25 / ODENSE / TB25 / ODENSE / TB25 / ODENSE / TB25 / ODENSE"];
    let elements = [], speed = 0.4;
    
    texts.forEach((msg, i) => {
    let div = document.createElement("div");
    div.className = "text";
    div.textContent = "/ " + msg;
    banner.appendChild(div);

    let startPos = i * 1;
    div.style.left = `${startPos}vw`;
    elements.push(div);
    }); 

    function animate() {
    elements.forEach((el, index) => {
    let x = el.getBoundingClientRect().left - speed;
    el.style.left = x + "px";

    if (x < -el.offsetWidth) {
        let lastElement = elements[(index - 1 + elements.length) % elements.length];
        let lastRight = lastElement.getBoundingClientRect().right;
        el.style.left = `${lastRight}px`;
    }
    });
    requestAnimationFrame(animate);
    }

    animate();
});