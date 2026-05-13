// ============================
// MOBILE MENU
// ============================
const menuBtn =
document.querySelector(
  ".menu-btn"
);

const navLinks =
document.querySelector(
  ".nav-links"
);

menuBtn.addEventListener(
  "click",
  ()=>{

    navLinks.classList.toggle(
      "show"
    );

    menuBtn.classList.toggle(
      "active"
    );

  }
);


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


    // LIGHTBOX
    const galleryImgs = document.querySelectorAll(".gallery-img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    
    lightbox.addEventListener(
  "click",
  ()=>{
    lightbox.classList.add(
      "hidden"
    );
  }
);

    galleryImgs.forEach(img => {
      img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        lightbox.classList.remove("hidden");
      });
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
document
.querySelectorAll(".gallery-img")

.forEach(img=>{

  img.onerror=()=>{

    img.onerror=null;

    img.src=
    "images/empty.jpg";

  };

});
// ============================
// PARALLAX HERO
// ============================
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  let offset = window.scrollY;
  hero.style.transform = `translateY(${offset * 0.15}px)`;
});

// ============================
