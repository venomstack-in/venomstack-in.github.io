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

fetch("navbar.html")
  .then((res) => res.text())
  .then((data) => (document.getElementById("navbar").innerHTML = data));
