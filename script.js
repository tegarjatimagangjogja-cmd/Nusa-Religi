
// ======================================
// KONFIGURASI KONTAK NUSA RELIGI
// ======================================

// Isi nomor WhatsApp resmi tanpa tanda +.
// Contoh: 6281234567890
const WHATSAPP_NUMBER = "";

// Ganti dengan email resmi sebelum publikasi.
const CONTACT_EMAIL = "halo@nusareligi.example";


// ======================================
// MENU NAVIGASI MOBILE
// ======================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Tutup menu" : "Buka menu"
  );
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Buka menu");
  });
});


// ======================================
// FILTER DAN PENCARIAN DESTINASI
// ======================================

const filterButtons = [
  ...document.querySelectorAll(".filter")
];

const destinationCards = [
  ...document.querySelectorAll(".destination-card")
];

const searchInput = document.getElementById("searchInput");
const emptyMessage = document.getElementById("emptyMessage");

let activeFilter = "semua";

function filterDestinations() {
  const keyword = searchInput.value
    .trim()
    .toLocaleLowerCase("id");

  let visibleCount = 0;

  destinationCards.forEach((card) => {
    const categoryMatches =
      activeFilter === "semua" ||
      card.dataset.category === activeFilter;

    const searchableText = (
      card.dataset.search + " " + card.textContent
    ).toLocaleLowerCase("id");

    const keywordMatches = searchableText.includes(keyword);

    const visible = categoryMatches && keywordMatches;

    card.hidden = !visible;

    if (visible) {
      visibleCount++;
    }
  });

  emptyMessage.hidden = visibleCount > 0;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;

    filterButtons.forEach((item) => {
      const active = item === button;

      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });

    filterDestinations();
  });
});

searchInput.addEventListener("input", filterDestinations);


// ======================================
// KONTAK WHATSAPP / EMAIL
// ======================================

function createContactUrl(message) {
  const number = WHATSAPP_NUMBER.trim();

  if (number) {
    return (
      "https://wa.me/" +
      number +
      "?text=" +
      encodeURIComponent(message)
    );
  }

  return (
    "mailto:" +
    CONTACT_EMAIL +
    "?subject=" +
    encodeURIComponent("Pertanyaan Nusa Religi") +
    "&body=" +
    encodeURIComponent(message)
  );
}


// Tombol informasi destinasi
document.querySelectorAll("[data-destination]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const destination = link.dataset.destination;

    window.location.href = createContactUrl(
      `Halo Nusa Religi, saya ingin mengetahui informasi tentang ${destination}.`
    );
  });
});


// Tombol pertanyaan paket wisata
document.querySelectorAll("[data-package]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const packageName = link.dataset.package;

    window.location.href = createContactUrl(
      `Halo Nusa Religi, saya ingin bertanya tentang paket ${packageName}.`
    );
  });
});


// Tombol kontak utama
const contactButton = document.getElementById("contactButton");

contactButton.href = createContactUrl(
  "Halo Nusa Religi, saya ingin bertanya tentang wisata rohani."
);


// ======================================
// TAHUN OTOMATIS DI FOOTER
// ======================================

document.getElementById("year").textContent =
  new Date().getFullYear();

