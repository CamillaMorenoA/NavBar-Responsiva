// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const body = document.querySelector("p");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});


links.addEventListener("click", function (e) {
  if (e.target.tagName === "A") {
    e.preventDefault(); // impede abrir a página direto
    const linkText = e.target.textContent.toLowerCase();

    if (linkText === "rock") {
      body.innerHTML = `
        <iframe src="rock.html" width="100%" height="1000px" style="border:1px solid #ccc;"></iframe>
      `;
    }
  }
});

links.addEventListener("click", function (e) {
  if (e.target.tagName === "A") {
    e.preventDefault(); // impede abrir a página direto
    const linkText = e.target.textContent.toLowerCase();

    if (linkText === "rap") {
      body.innerHTML = `
        <iframe src="rap.html" width="100%" height="1000px" style="border:1px solid #ccc;"></iframe>
      `;
    }
  }
});

