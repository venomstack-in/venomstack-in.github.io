// Menu Bar Hamburger and Cross Changing

function toggleMenu() {
  const menu = document.getElementById("menu");
  const hamburger = document.getElementById("hamburger");

  menu.classList.toggle("active");

  if (menu.classList.contains("active")) {
    hamburger.innerHTML = "✖";
  } else {
    hamburger.innerHTML = "☰";
  }
}

// To Fetch and Serve Data on Main Index Page

fetch("fetch/navbar.html")
  .then((res) => res.text())
  .then((data) => (document.getElementById("navbar").innerHTML = data));

fetch("fetch/index-about.html")
  .then((res) => res.text())
  .then((data) => (document.getElementById("index-about").innerHTML = data));

// Lazy Loading of Images

const images = [
    "/assets/js/slider/art.jpg",
    "/assets/js/slider/maibhavan.jpeg",
    "/assets/js/slider/intellect.jpg"
];

let index = 0;
const slider = document.querySelector(".mainslider");

if (!slider) {
    console.error("❌ .mainslider not found");
}

// first image
slider.style.backgroundImage = `url(${images[index]})`;

setInterval(() => {
    index = (index + 1) % images.length;
    slider.style.backgroundImage = `url(${images[index]})`;
}, 2000);
