let searchBtn = document.querySelector(".fa-search");
let searchContainer = document.querySelector("header form");
let loginBtn = document.querySelector(".fa-user");
let loginContainer = document.querySelector(".login-container");
let loginCloseBtn = document.querySelector(".login-container form .close");

window.onscroll = () => {
  // search
  searchBtn.classList.remove("fa-times");
  searchContainer.classList.remove("active");
  // bars
  bars.classList.remove("fa-times");
  navBar.classList.remove("active");
};

searchBtn.addEventListener("click", () => {
  searchBtn.classList.toggle("fa-times");
  searchContainer.classList.toggle("active");
});

// Create Login Container
loginBtn.addEventListener("click", () => {
  loginContainer.style.cssText = `display: flex; opacity: 1; visibility: visible;`;
});

loginCloseBtn.addEventListener("click", () => {
  loginContainer.style.cssText = `display: flex; opacity: 0; visibility: hidden;`;
});

// Create bars
let bars = document.querySelector(".menu-bar");
let navBar = document.querySelector("header nav");

bars.addEventListener("click", () => {
  bars.classList.toggle("fa-times");
  navBar.classList.toggle("active");
});

// Create Video Slider
let videoBtn = document.querySelectorAll(".vid-btn");

console.log(videoBtn);

videoBtn.forEach((el) => {
  el.addEventListener("click", () => {
    // document.querySelector(".controls .active").classList.remove("active");
    videoBtn.forEach((btn) => btn.classList.remove("active"));
    el.classList.add("active");

    let source = el.getAttribute("data-src");
    document.getElementById("vid-slider").src = source;
  });
});
