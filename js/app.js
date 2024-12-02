// Dynamically Build the Navigation Bar
// Select the navbar list and all sections
const navbarList = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

// Function to dynamically add navigation links
sections.forEach((section) => {
  const navItem = document.createElement("li");
  navItem.innerHTML = `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`;
  navbarList.appendChild(navItem);
});
/////////////////////////////////////////////////////////////////////////////
// Add Active State to Sections and Navigation Links
// Function to add or remove active states based on section visibility
const makeActive = () => {
  sections.forEach((section) => {
    const box = section.getBoundingClientRect();
    if (box.top >= -50 && box.top <= 300) {
      // Add active class to section
      section.classList.add("your-active-class");
      // Highlight corresponding navigation link
      document
        .querySelector(`a[href="#${section.id}"]`)
        .classList.add("active-link");
    } else {
      // Remove active class from section
      section.classList.remove("your-active-class");
      // Remove highlight from navigation link
      document
        .querySelector(`a[href="#${section.id}"]`)
        .classList.remove("active-link");
    }
  });
};

// Attach scroll event listener to activate sections dynamically
document.addEventListener("scroll", makeActive);

/////////////////////////////////////////////////////////
// Enable Smooth Scrolling to Sections
// Function to enable smooth scrolling when clicking navigation links
navbarList.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName === "A") {
    document.querySelector(event.target.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  }
});

///////////////////////////////////////////////////////////////////
// Hide Navigation Bar When Not Scrolling
// Make the navbar visible on page load
navbarList.style.display = "block";
let isScrolling;

// Function to hide the navbar after 2 seconds of no scrolling
document.addEventListener("scroll", () => {
  // Show the navbar when scrolling
  navbarList.style.display = "block";

  // Reset the timeout
  clearTimeout(isScrolling);
  isScrolling = setTimeout(() => {
    // Hide the navbar if the user is not scrolling
    navbarList.style.display = "none";
  }, 2000);
});

/////////////////////////////////////////////////////
// Scroll To Top Button
// Create the Scroll To Top Button button dynamically
const scrollToTopButton = document.createElement("button");
scrollToTopButton.id = "scrollToTopButton";
scrollToTopButton.innerText = "Top";
document.body.appendChild(scrollToTopButton);

// Function to scroll to the top of the page smoothly
scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Display the Scroll To Top Button only when scrolled below a certain point
window.addEventListener("scroll", () => {
  scrollToTopButton.style.display = window.scrollY > 500 ? "block" : "none";
});
