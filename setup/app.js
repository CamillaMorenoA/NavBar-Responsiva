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
    e.preventDefault(); 
    const linkText = e.target.textContent.toLowerCase();

    if (linkText === "rock") {
      body.innerHTML = `
    <iframe src="Rock-Page/rock.html" 
            width="100%" 
            style="height: calc(100vh - 70px); border:none; display:block;">
    </iframe>`;
    }
  }
});

links.addEventListener("click", function (e) {
  if (e.target.tagName === "A") {
    e.preventDefault(); 
    const linkText = e.target.textContent.toLowerCase();

    if (linkText === "rap") {
       body.innerHTML = `
    <iframe src="Rap-Page/rap.html" 
            width="100%" 
            style="height: calc(100vh - 70px); border:none; display:block;">
    </iframe>`;
    }
  }
});

links.addEventListener("click", function (e) {
  if (e.target.tagName === "A") {
    e.preventDefault();
    const linkText = e.target.textContent.toLowerCase();

    if (linkText === "pop") {
      body.innerHTML = `
    <iframe src="Pop-Page/index.html" 
            width="100%" 
            style="height: calc(100vh - 70px); border:none; display:block;">
    </iframe>`;
    }
  }
});

links.addEventListener("click", function (e) {
  if (e.target.tagName === "A") {
    e.preventDefault(); 
    const linkText = e.target.textContent.toLowerCase();

    if (linkText === "mpb") {
  body.innerHTML = `
    <iframe src="Mpb-Page/index.html" 
            width="100%" 
            style="height: calc(100vh - 70px); border:none; display:block;">
    </iframe>`;
}
  }
});