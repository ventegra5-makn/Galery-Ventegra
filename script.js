// ============================
// MOBILE MENU
// ============================
const menuBtn = document.getElementById("mobile-menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(item => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

// ============================
// FILTER ALBUM
// ============================
const albumButtons = document.querySelectorAll(".album-card");
const galleryImages = document.querySelectorAll(".gallery-img");

albumButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    galleryImages.forEach(img => {
      img.style.display =
        img.dataset.category === filter ? "block" : "none";
    });

    document
      .getElementById("gallery")
      .scrollIntoView({ behavior: "smooth" });
  });
});

// ============================
// LIGHTBOX
// ============================
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.classList.remove("hidden");
  });
});

closeLightbox.addEventListener("click", () => {
  lightbox.classList.add("hidden");
});

lightbox.addEventListener("click", e => {
  if (e.target === lightbox) {
    lightbox.classList.add("hidden");
  }
});

// ============================
// SCROLL ANIMATION (SECTION)
// ============================
const sections = document.querySelectorAll(".section");

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

sections.forEach(sec => {
  sec.classList.add("fade-in");
  sectionObserver.observe(sec);
});

// ============================
// GALLERY ANIMATION
// ============================
const imgObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

galleryImages.forEach(img => imgObserver.observe(img));

// ============================
// PARALLAX HERO
// ============================
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  let offset = window.scrollY;
  hero.style.transform = `translateY(${offset * 0.15}px)`;
});

// ============================
