// Cindies header og hero
document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript er blevet indlæst!");
  
    const burger = document.querySelector(".header__burger");
    const nav = document.getElementById("nav-menu");
    const hero = document.querySelector(".hero");
    const header = document.querySelector(".header");
    const menuList = document.getElementById("menu-list");
  
    // Array med menupunkter
    const menuItems = [
        { name: "Om os", link: "#" },
        { name: "Job", link: "#" },
        { name: "Program", link: "#" },
    ];
  
    // Tilføj menupunkter KUN hvis listen er tom
    if (menuList.children.length === 0) {
        menuItems.forEach((item) => {
            const li = document.createElement("li");
            li.classList.add("nav__item");
  
            const a = document.createElement("a");
            a.href = item.link;
            a.textContent = item.name;
            a.classList.add("nav__link");
  
            li.appendChild(a);
            menuList.appendChild(li);
        });
    }
  
    // Klik på burger-menuen åbner/lukker navigationen
    burger.addEventListener("click", function () {
        nav.classList.toggle("nav--open");
        burger.classList.toggle("header__burger--open");
        header.classList.toggle("header--open");
  
        // Hvis menuen er åben, skub både header og hero ned
        if (nav.classList.contains("nav--open")) {
            hero.style.marginTop = "250px"; // Skub hero ned
            header.style.marginTop = "280px"; // Skub header ned
        } else {
            hero.style.marginTop = "0"; // Fjerner margin fra hero
            header.style.marginTop = "0"; // Fjerner margin fra header
        }
        
    });
  });

// Nicolines slideshow
  let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".dots");

slides.forEach((_, i) => {
    let dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", () => showSlide(i));
    dotsContainer.appendChild(dot);
});

function showSlide(n) {
    slideIndex = (n + slides.length) % slides.length;
    slides.forEach((slide, i) => {
        slide.style.display = (i === slideIndex) ? "block" : "none";
    });
    document.querySelectorAll(".dot").forEach((dot, i) => {
        dot.classList.toggle("active", i === slideIndex);
    });
}

function changeSlide(n) {
    showSlide(slideIndex + n);
}

function autoSlide() {
    changeSlide(1);
    setTimeout(autoSlide, 3000);
}

showSlide(slideIndex);
setTimeout(autoSlide, 3000);

// Povilas banner
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
    div.textContent = msg;
    banner.appendChild(div);

    let startPos = i * 25;
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

//Yagmurs kontaktformular og lyspæreknap
// finder HTML-elementerne // her bruger jeg DOM
const lightbulb = document.getElementById("lightbulb"); //pæren
const body = document.body; //hele vody elementet (for at ændre baggrunden)
const overlay = document.getElementById("overlay"); // Overlayet
const circleButton = document.querySelector(".circle-button"); //runde knap

// til at holde styr på, om slideshowet kører //her bruger jeg scope //her bruger jeg variabler
let isSlideshowActive = false;
let slideshowInterval; // gemmer intervallet for slideshowet
let originalBackgroundColor = body.style.backgroundColor; // gemmer den oprindelige baggrundsfarve

//  slideshow-container (en div, der viser billeder)
const slideshow = document.createElement("div");
slideshow.classList.add("slideshow"); // CSS-klassen "slideshow"
body.appendChild(slideshow);

// billeder til slideshowet //her bruger jeg array
const images = [
    "billeder/1.jpg",
    "billeder/2.jpg",
    "billeder/3.jpg",
    "billeder/4.jpg",
    "billeder/5.jpg",
    "billeder/6.jpg",
    "billeder/7.jpg",
    "billeder/8.jpg",
    "billeder/9.jpg",
    "billeder/10.jpg"
];

// når man trykker på pæren //her bruger jeg if-statement //her bruger jeg events click
lightbulb.addEventListener("click", function() {
    if (!isSlideshowActive) {
        //slideshow starter
        let index = 0;
        slideshow.style.zIndex = "1"; // Sætter slideshowet til at være synligt
        overlay.style.display = "block"; // Vis overlay

        // skifter billeder hurtigt (hver 0.5 sekund) // her bruger jeg loops
        slideshowInterval = setInterval(() => {
            slideshow.style.backgroundImage = `url(${images[index]})`; // billedeskift
            index = (index + 1) % images.length; //gå til næste billede
        }, 500); 

        isSlideshowActive = true; //sættes til aktiv
    } else {
        //slodeshow stoppes og skifter tilbage til blå baggrund
        clearInterval(slideshowInterval); //billedeskift stoppes
        slideshow.style.backgroundImage = ""; // billedet fjernes
        body.style.backgroundColor = originalBackgroundColor; // skift tilbage til blå baggrund
        slideshow.style.zIndex = "-1"; // slideshow usynlig igen
        overlay.style.display = "none"; // Skjul overlay
        isSlideshowActive = false; //sættes til inaktiv
    }
});

// slideshow information //her bruger jeg objekter
const slideshowData = {
    images: ["billeder/1.jpg", "billeder/2.jpg", "billeder/3.jpg"],
    speed: 500, // 0,5 sekunder
    active: false // om slideshowet er aktivt eller ej
};

// finder inputfelterne og knappen
const firstNameInput = document.querySelector("input[type='text']");
const emailInput = document.querySelector("input[type='email']");

// når man trykker på cirklen // her bruger jeg alert
circleButton.addEventListener("click", function(event) {
    // vise en advarsel hvis felterne er tomme
    if (firstNameInput.value.trim() === "" || emailInput.value.trim() === "") {
        event.preventDefault(); // stopper formularen fra at sende
        alert("Udfyld venligst begge felter!");
    } else {
        alert("Tak for din tilmelding!"); // beskæftelse
    }
});
  
