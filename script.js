// MOBILE MENU
const menuBtn = document.getElementById("mobile-menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// FILTER ALBUM
const albumButtons = document.querySelectorAll(".album-card");
const galleryImages = document.querySelectorAll(".gallery-img");

albumButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    galleryImages.forEach(img => {
      if (img.dataset.category === filter) {
        img.style.display = "block";
      } else {
        img.style.display = "none";
      }
    });

    // auto scroll to gallery
    document.getElementById("gallery").scrollIntoView({ behavior: "smooth" });
  });
});

// LIGHTBOX
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

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.add("hidden");
  }
});

// GUESTBOOK (LOCAL STORAGE)
const nameInput = document.getElementById("nameInput");
const messageInput = document.getElementById("messageInput");
const saveMessageBtn = document.getElementById("saveMessageBtn");
const guestbookList = document.getElementById("guestbookList");

function loadMessages() {
  const data = JSON.parse(localStorage.getItem("guestbookMessages")) || [];
  guestbookList.innerHTML = "";

  data.reverse().forEach(item => {
    const div = document.createElement("div");
    div.classList.add("guestbook-entry");

    div.innerHTML = `
      <h4>${item.name}</h4>
      <p>${item.message}</p>
    `;

    guestbookList.appendChild(div);
  });
}

saveMessageBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const message = messageInput.value.trim();

  if (!name || !message) {
    alert("Isi nama dan pesan dulu, jangan males.");
    return;
  }

  const data = JSON.parse(localStorage.getItem("guestbookMessages")) || [];
  data.push({ name, message });

  localStorage.setItem("guestbookMessages", JSON.stringify(data));

  nameInput.value = "";
  messageInput.value = "";

  loadMessages();
});

loadMessages();