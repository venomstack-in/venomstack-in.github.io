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

const image = document.createElement("img");
image.src = img.url;
image.alt = img.description;
image.loading = "lazy";