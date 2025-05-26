// Scroll-triggered Animation (optional)
window.addEventListener("scroll", () => {
  const elems = document.querySelectorAll("section");
  elems.forEach(elem => {
    const pos = elem.getBoundingClientRect().top;
    if (pos < window.innerHeight - 150) {
      elem.classList.add("animate__animated", "animate__fadeInUp");
    }
  });
});

// Form Submission Interactivity
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const msg = document.getElementById("message").value;
  alert(`Thanks for reaching out, ${name}!\n\nYour message:\n"${msg}"`);
  this.reset();
});

