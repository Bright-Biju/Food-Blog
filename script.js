// Highlight active page in the navbar
document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});

// Contact form alert
function handleSubmit() {
  alert("Thank you for contacting FlavorVerse! We’ll get back to you soon.");
  return false;
}
