

window.addEventListener("load", function () {
  document.getElementById("loader").style.display = "none";
  document.getElementById("main-page").classList.remove("hidden");
});

AOS.init({
  duration: 1200, delay: 200
})

var typed = new Typed("#typing", {
  strings: ["Frontend Developer", "React Frontend Developer", "Creative Coder"],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});

// Scroll-to-top
const scrollBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.remove('hidden');
  } else {
    scrollBtn.classList.add('hidden');
  }
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const openBtns = document.querySelectorAll('.open-about'); // sabhi buttons
const aboutPopup = document.getElementById('aboutPopup');
const popupContent = document.getElementById('popupContent');
const closeBtn = document.getElementById('closePopup');

// Open Popup
openBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    aboutPopup.classList.remove('hidden');
    setTimeout(() => {
      popupContent.classList.remove('scale-95', 'opacity-0');
      popupContent.classList.add('scale-100', 'opacity-100');
    }, 10); // chhota delay transition ke liye
  });
});

// Close Popup
closeBtn.addEventListener('click', () => {
  popupContent.classList.remove('scale-100', 'opacity-100');
  popupContent.classList.add('scale-95', 'opacity-0');
  setTimeout(() => {
    aboutPopup.classList.add('hidden');
  }, 300); // same as transition duration
});