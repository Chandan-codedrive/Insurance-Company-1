let lastScrollY = window.scrollY;

// Show the navbar when user scrolls down
window.onscroll = function() {
  var navbar = document.getElementById("mainNavbar");
  if (window.scrollY > lastScrollY && window.scrollY > 100) { // Hide navbar on scroll down after 100px
    navbar.classList.add("navbar-hidden");
    navbar.classList.remove("navbar-visible");
  } else {
    navbar.classList.add("navbar-visible");
    navbar.classList.remove("navbar-hidden");
  }
  lastScrollY = window.scrollY;
};


console.log('shree ram')