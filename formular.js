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



