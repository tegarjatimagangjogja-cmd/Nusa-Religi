
"use strict";

/* =====================================
   DATA DESTINASI WISATA RELIGI
   ===================================== */

const destinations = [
  {
    name: "Masjid Istiqlal",
    region: "Jawa",
    location: "Jakarta Pusat, DKI Jakarta",
    category: "Masjid",
    description: "Masjid nasional Indonesia yang menjadi simbol persatuan, toleransi, dan kehidupan beragama.",
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Masjid Agung Demak",
    region: "Jawa",
    location: "Demak, Jawa Tengah",
    category: "Masjid",
    description: "Masjid bersejarah yang erat kaitannya dengan perkembangan Islam di Pulau Jawa.",
    image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Gua Maria Sendangsono",
    region: "Jawa",
    location: "Kulon Progo, DI Yogyakarta",
    category: "Ziarah",
    description: "Tempat ziarah Katolik yang dikenal dengan suasana alamnya yang teduh dan menenangkan.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Gereja Blenduk",
    region: "Jawa",
    location: "Semarang, Jawa Tengah",
    category: "Gereja",
    description: "Gereja bersejarah di kawasan Kota Lama Semarang dengan arsitektur kolonial yang khas.",
    image: "https://images.unsplash.com/photo-1520637836862-4d197d17c19a?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Candi Borobudur",
    region: "Jawa",
    location: "Magelang, Jawa Tengah",
    category: "Lainnya",
    description: "Warisan dunia berupa monumen Buddha yang menyimpan nilai sejarah, seni, dan spiritualitas.",
    image: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Masjid Menara Kudus",
    region: "Jawa",
    location: "Kudus, Jawa Tengah",
    category: "Masjid",
    description: "Masjid bersejarah dengan perpaduan unsur arsitektur yang mencerminkan akulturasi budaya.",
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Masjid Raya Baiturrahman",
    region: "Sumatra",
    location: "Banda Aceh, Aceh",
    category: "Masjid",
    description: "Ikon bersejarah Aceh yang dikenal dengan kubah, menara, dan arsitekturnya yang megah.",
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Istana Maimun",
    region: "Sumatra",
    location: "Medan, Sumatera Utara",
    category: "Lainnya",
    description: "Istana Kesultanan Deli yang memperlihatkan kekayaan sejarah dan budaya Melayu.",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Masjid Raya Sumatera Barat",
    region: "Sumatra",
    location: "Padang, Sumatera Barat",
    category: "Masjid",
    description: "Masjid dengan desain unik yang mengadaptasi bentuk atap rumah tradisional Minangkabau.",
    image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Pura Besakih",
    region: "Bali",
    location: "Karangasem, Bali",
    category: "Pura",
    description: "Kompleks pura penting di lereng Gunung Agung yang menjadi pusat spiritual umat Hindu Bali.",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Pura Ulun Danu Beratan",
    region: "Bali",
    location: "Tabanan, Bali",
    category: "Pura",
    description: "Pura tepi danau dengan lanskap pegunungan yang menjadi salah satu ikon wisata Bali.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Masjid 99 Kubah",
    region: "Sulawesi",
    location: "Makassar, Sulawesi Selatan",
    category: "Masjid",
    description: "Masjid dengan desain kontemporer dan susunan kubah berwarna yang menjadi ikon Makassar.",
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Masjid Islamic Center Samarinda",
    region: "Kalimantan",
    location: "Samarinda, Kalimantan Timur",
    category: "Masjid",
    description: "Masjid megah di tepi Sungai Mahakam yang menjadi salah satu landmark Samarinda.",
    image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=900&q=85"
  }
];

/* =====================================
   ELEMEN WEBSITE
   ===================================== */

const destinationGrid = document.getElementById("destinationGrid");
const destinationCount = document.getElementById("destinationCount");
const searchInput = document.getElementById("searchInput");
const regionSelect = document.getElementById("regionSelect");
const categoryFilters = document.getElementById("categoryFilters");
const emptyState = document.getElementById("emptyState");
const showAllBtn = document.getElementById("showAllBtn");

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

let selectedCategory = "Semua";
let showAllDestinations = false;

const INITIAL_DISPLAY = 6;

/* =====================================
   UTILITAS KEAMANAN HTML
   ===================================== */

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };

    return entities[character];
  });
}

/* =====================================
   PENCARIAN DAN FILTER
   ===================================== */

function getFilteredDestinations() {
  const keyword = searchInput.value.trim().toLocaleLowerCase("id");
  const selectedRegion = regionSelect.value;

  return destinations.filter((destination) => {
    const searchableText = [
      destination.name,
      destination.location,
      destination.category,
      destination.region,
      destination.description
    ].join(" ").toLocaleLowerCase("id");

    const matchesKeyword = searchableText.includes(keyword);

    const matchesRegion =
      selectedRegion === "" ||
      destination.region === selectedRegion;

    const matchesCategory =
      selectedCategory === "Semua" ||
      destination.category === selectedCategory;

    return matchesKeyword && matchesRegion && matchesCategory;
  });
}

/* =====================================
   TAMPILKAN KARTU DESTINASI
   ===================================== */

function renderDestinations() {
  if (!destinationGrid) return;

  const filteredDestinations = getFilteredDestinations();

  const visibleDestinations = showAllDestinations
    ? filteredDestinations
    : filteredDestinations.slice(0, INITIAL_DISPLAY);

  destinationGrid.innerHTML = visibleDestinations.map((destination) => {
    const index = destinations.indexOf(destination);

    return `
      <article class="destination-card">
        <div class="destination-image-wrap">
          <img
            class="destination-image"
            src="${escapeHTML(destination.image)}"
            alt="${escapeHTML(destination.name)}"
            loading="lazy"
            decoding="async"
          >
          <span class="destination-category">
            ${escapeHTML(destination.category)}
          </span>
        </div>

        <div class="destination-content">
          <div class="destination-location">
            <span aria-hidden="true">⌖</span>
            ${escapeHTML(destination.location)}
          </div>

          <h3>${escapeHTML(destination.name)}</h3>

          <p>${escapeHTML(destination.description)}</p>

          <button
            class="destination-detail"
            type="button"
            data-destination-index="${index}"
            aria-label="Lihat detail ${escapeHTML(destination.name)}"
          >
            Lihat Detail <span aria-hidden="true">→</span>
          </button>
        </div>
      </article>
    `;
  }).join("");

  if (destinationCount) {
    destinationCount.textContent =
      `Menampilkan ${visibleDestinations.length} dari ${filteredDestinations.length} destinasi`;
  }

  if (emptyState) {
    emptyState.hidden = filteredDestinations.length !== 0;
  }

  if (showAllBtn) {
    const canShowMore = filteredDestinations.length > INITIAL_DISPLAY;

    showAllBtn.hidden = !canShowMore;
    showAllBtn.disabled = !canShowMore;

    showAllBtn.textContent = showAllDestinations
      ? "Tampilkan Lebih Sedikit ↑"
      : "Tampilkan Semua Destinasi ↓";
  }
}

/* =====================================
   EVENT PENCARIAN DAN WILAYAH
   ===================================== */

if (searchInput) {
  searchInput.addEventListener("input", () => {
    showAllDestinations = false;
    renderDestinations();
  });
}

if (regionSelect) {
  regionSelect.addEventListener("change", () => {
    showAllDestinations = false;
    renderDestinations();
  });
}

/* =====================================
   EVENT FILTER KATEGORI
   ===================================== */

if (categoryFilters) {
  categoryFilters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");

    if (!button) return;

    selectedCategory = button.dataset.category;

    categoryFilters.querySelectorAll("[data-category]").forEach((filter) => {
      const isActive = filter === button;

      filter.classList.toggle("active", isActive);
      filter.setAttribute("aria-pressed", String(isActive));
    });

    showAllDestinations = false;
    renderDestinations();
  });

  categoryFilters.querySelectorAll("[data-category]").forEach((button) => {
    button.setAttribute(
      "aria-pressed",
      String(button.dataset.category === selectedCategory)
    );
  });
}

/* =====================================
   TOMBOL TAMPILKAN SEMUA
   ===================================== */

if (showAllBtn) {
  showAllBtn.addEventListener("click", () => {
    showAllDestinations = !showAllDestinations;
    renderDestinations();

    if (!showAllDestinations) {
      document.getElementById("destinasi")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
}

/* =====================================
   DETAIL DESTINASI
   ===================================== */

if (destinationGrid) {
  destinationGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-destination-index]");

    if (!button) return;

    const index = Number(button.dataset.destinationIndex);
    const destination = destinations[index];

    if (!destination) return;

    const message = [
      destination.name,
      "",
      `Lokasi: ${destination.location}`,
      `Kategori: ${destination.category}`,
      "",
      destination.description,
      "",
      "Informasi ini merupakan deskripsi pengenalan destinasi."
    ].join("\n");

    window.alert(message);
  });
}

/* =====================================
   MENU NAVIGASI HP
   ===================================== */

function closeMobileMenu() {
  if (!menuToggle || !navLinks) return;

  navLinks.classList.remove("open");
  menuToggle.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Buka menu navigasi");
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"
    );
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMobileMenu();
    }
  });

  document.addEventListener("click", (event) => {
    if (
      navLinks.classList.contains("open") &&
      !navLinks.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      closeMobileMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 650) {
      closeMobileMenu();
    }
  });
}

/* =====================================
   PILIHAN PAKET WISATA
   ===================================== */

document.querySelectorAll("[data-package]").forEach((link) => {
  link.addEventListener("click", () => {
    const packageName = link.dataset.package;
    const emailContact = document.getElementById("emailContact");

    if (emailContact) {
      const subject = `Informasi Paket Wisata - ${packageName}`;

      emailContact.href =
        `mailto:info@nusareligi.id?subject=${encodeURIComponent(subject)}`;
    }
  });
});

/* =====================================
   TAHUN OTOMATIS DI FOOTER
   ===================================== */

const currentYear = document.getElementById("currentYear");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

/* =====================================
   INISIALISASI WEBSITE
   ===================================== */

renderDestinations();
