// main.js

//-----------------------------
//----THE HOMEPAGE----
//-----------------------------
if (window.location.pathname.includes("index.html")) {
  window.onload = function() {
    alert("Welcome to Urban Barista Homepage!");
  };

// This is the toggle navigation menu.
  const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navMenu");
  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  }
}

//-------------------------------
//--THE ABOUT PAGE (about.html)--
//-------------------------------
if (window.location.pathname.includes("about.html")) {
  const aboutHeading = document.querySelector("h2");
  if (aboutHeading) {
    aboutHeading.addEventListener("mouseenter", () => {
      aboutHeading.style.color = "#8B4513"; // coffee brown
    });
    aboutHeading.addEventListener("mouseleave", () => {
      aboutHeading.style.color = ""; // reset
    });
  }
}

//----------------------------------
// THE SERVICE PAGE (services.html)
//----------------------------------
if (window.location.pathname.includes("services.html")) {
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.addEventListener("mouseenter", () => card.style.transform = "scale(1.05)");
    card.addEventListener("mouseleave", () => card.style.transform = "scale(1)");
  });
}

//--------------------------------
// THE ENQUIRY PAGE (enquiry.html)
//--------------------------------
if (window.location.pathname.includes("enquiry.html")) {
  function validateEnquiryForm() {
    let enquiry = document.getElementById("enquiry").value;
    if (enquiry === "") {
      alert("Please enter your enquiry.");
      return false;
    }
    return true;
  }
}

//-------------------------------
// CONTACT US PAGE (contact.html)
//-------------------------------
if (window.location.pathname.includes("contact.html")) {
  function validateContactForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    if (name === "" || email === "") {
      alert("Please fill in all fields.");
      return false;
    }
    return true;
  }
}