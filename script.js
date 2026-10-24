
"use strict";

const ADMIN_WHATSAPP = "6289681198159";

const destinations = [
  {
    name: "Sunan Gresik",
    alias: "Maulana Malik Ibrahim",
    city: "Gresik",
    region: "Jawa Timur",
    description: "Kenali salah satu tokoh penting dalam sejarah awal penyebaran Islam di Jawa melalui kompleks makam bersejarah di Gresik.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Makam%20Maulana%20Malik%20Ibrahim%20Tomb%20Complex.jpg",
    fallback: "https://images.unsplash.com/photo-1598032895397-b9472444bf93?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Sunan Ampel",
    alias: "Raden Rahmat",
    city: "Surabaya",
    region: "Jawa Timur",
    description: "Kunjungi kawasan Masjid Agung Sunan Ampel dan kompleks ziarah yang menjadi bagian penting sejarah Islam di Surabaya.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Makam%20Sunan%20Ampel.jpg",
    fallback: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Sunan Bonang",
    alias: "Makhdum Ibrahim",
    city: "Tuban",
    region: "Jawa Timur",
    description: "Telusuri jejak dakwah Sunan Bonang di Tuban dan pelajari hubungan sejarah Islam dengan seni serta kebudayaan setempat.",
    image: "https://images.unsplash.com/photo-1590076215667-875d4ef9e0d7?auto=format&fit=crop&w=900&q=85",
    fallback: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Sunan Drajat",
    alias: "Raden Qasim",
    city: "Lamongan",
    region: "Jawa Timur",
    description: "Kenali peninggalan Sunan Drajat di Lamongan dan kisah dakwah yang dikenal dengan kepedulian sosial.",
    image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=900&q=85",
    fallback: "https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Sunan Giri",
    alias: "Raden Paku",
    city: "Gresik",
    region: "Jawa Timur",
    description: "Jelajahi kompleks makam Sunan Giri dan kawasan Giri Kedaton yang berkaitan dengan sejarah dakwahnya.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Makam%20Sunan%20Giri%20Gapura%20Undakan%20Pertama.jpg",
    fallback: "https://images.unsplash.com/photo-1598032895397-b9472444bf93?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Sunan Kudus",
    alias: "Ja'far Shadiq",
    city: "Kudus",
    region: "Jawa Tengah",
    description: "Temukan warisan sejarah di Kudus, termasuk kawasan Menara Kudus yang dikenal dengan perpaduan unsur arsitekturnya.",
    image: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=900&q=85",
    fallback: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Sunan Kalijaga",
    alias: "Raden Said",
    city: "Demak",
    region: "Jawa Tengah",
    description: "Kunjungi kawasan makam Sunan Kalijaga di Kadilangu dan pelajari kisah dakwah yang berkaitan dengan budaya Jawa.",
    image: "https://images.unsplash.com/photo-1609948543911-3f5a9f6c7f8c?auto=format&fit=crop&w=900&q=85",
    fallback: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Sunan Muria",
    alias: "Raden Umar Said",
    city: "Kudus",
    region: "Jawa Tengah",
    description: "Rencanakan perjalanan menuju kawasan lereng Gunung Muria untuk mengenal makam Sunan Muria dan lingkungan alam sekitarnya.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=85",
    fallback: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Sunan Gunung Jati",
    alias: "Syarif Hidayatullah",
    city: "Cirebon",
    region: "Jawa Barat",
    description: "Jelajahi situs ziarah Sunan Gunung Jati di Cirebon dan kenali warisan sejarah Islam di pesisir utara Jawa Barat.",
    image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=900&q=85",
    fallback: "https://images.unsplash.com/photo-1590076215667-875d4ef9e0d7?auto=format&fit=crop&w=900&q=85"
  }
];

const grid = document.getElementById("destinationGrid");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const filterButtons = document.querySelectorAll(".filter-btn[data-region]");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

let selectedRegion = "semua";

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);
}

function whatsappURL(message) {
  return `https://wa.me/${ADMIN_WHATSAPP}?text=${encodeURIComponent(message)}`;
}

function renderDestinations() {
  const keyword = searchInput.value.trim().toLocaleLowerCase("id");

  const filtered = destinations.filter(destination => {
    const searchable = [
      destination.name,
      destination.alias,
      destination.city,
      destination.region,
      destination.description
    ].join(" ").toLocaleLowerCase("id");

    const matchesKeyword = searchable.includes(keyword);
    const matchesRegion =
      selectedRegion === "semua" ||
      destination.region === selectedRegion;

    return matchesKeyword && matchesRegion;
  });

  resultCount.textContent = filtered.length;
  emptyState.hidden = filtered.length !== 0;
  grid.hidden = filtered.length === 0;

  grid.innerHTML = filtered.map(destination => {
    const index = destinations.indexOf(destination);

    return `
      <article class="destination-card">
        <div class="card-photo-wrap">
          <img
            class="card-photo"
            src="${escapeHTML(destination.image)}"
            data-fallback="${escapeHTML(destination.fallback)}"
            alt="Foto destinasi ${escapeHTML(destination.name)} di ${escapeHTML(destination.city)}"
            loading="lazy"
            decoding="async"
          >
          <span class="region-tag">${escapeHTML(destination.region)}</span>
        </div>

        <div class="card-content">
          <h3>${escapeHTML(destination.name)}</h3>
          <p class="card-alias">(${escapeHTML(destination.alias)})</p>

          <p class="card-location">
            <span class="location-pin" aria-hidden="true">●</span>
            <span>${escapeHTML(destination.city)}, ${escapeHTML(destination.region)}</span>
          </p>

          <p class="card-description">${escapeHTML(destination.description)}</p>

          <div class="card-actions">
            <button class="card-detail-btn" type="button" data-detail="${index}">
              Lihat Detail →
            </button>
            <a
              class="card-ask-btn"
              href="${whatsappURL(`Halo Admin Nusa Religi, saya ingin bertanya tentang ziarah ${destination.name} di ${destination.city}.`)}"
              target="_blank"
              rel="noopener noreferrer"
            >Tanya Admin</a>
          </div>
        </div>
      </article>
    `;
  }).join("");

  setupImageFallbacks();
}

function setupImageFallbacks() {
  document.querySelectorAll(".card-photo").forEach(img => {
    if (img.dataset.fallbackReady) return;
    img.dataset.fallbackReady = "true";

    img.addEventListener("error", () => {
      if (img.dataset.usingFallback !== "true") {
        img.dataset.usingFallback = "true";
        img.src = img.dataset.fallback;
      } else {
        img.style.visibility = "hidden";
        img.parentElement.style.background =
          "linear-gradient(135deg, #e4eee7, #c4d8cb)";
      }
    });
  });
}

function updateActiveFilter(region) {
  selectedRegion = region;

  filterButtons.forEach(button => {
    const active = button.dataset.region === region;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  renderDestinations();
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    updateActiveFilter(button.dataset.region);
  });
});

searchInput.addEventListener("input", () => {
  clearSearch.hidden = searchInput.value.length === 0;
  renderDestinations();
});

clearSearch.addEventListener("click", () => {
  searchInput.value = "";
  clearSearch.hidden = true;
  renderDestinations();
  searchInput.focus();
});

document.getElementById("resetFilters").addEventListener("click", () => {
  searchInput.value = "";
  clearSearch.hidden = true;
  updateActiveFilter("semua");
});

document.querySelectorAll("[data-route]").forEach(button => {
  button.addEventListener("click", () => {
    updateActiveFilter(button.dataset.route);
    document.getElementById("destinasi").scrollIntoView({ behavior: "smooth" });
  });
});

const dialog = document.getElementById("destinationDialog");
const dialogImage = document.getElementById("dialogImage");
const dialogRegion = document.getElementById("dialogRegion");
const dialogTitle = document.getElementById("dialogTitle");
const dialogLocation = document.getElementById("dialogLocation");
const dialogDescription = document.getElementById("dialogDescription");
const dialogMaps = document.getElementById("dialogMaps");
const dialogWhatsApp = document.getElementById("dialogWhatsApp");

grid.addEventListener("click", event => {
  const button = event.target.closest("[data-detail]");
  if (!button) return;

  const destination = destinations[Number(button.dataset.detail)];
  if (!destination) return;

  dialogImage.onerror = () => {
    dialogImage.onerror = null;
    dialogImage.src = destination.fallback;
  };

  dialogImage.src = destination.image;
  dialogImage.alt = `Foto ${destination.name}`;
  dialogRegion.textContent = destination.region;
  dialogTitle.textContent = destination.name;
  dialogLocation.textContent =
    `${destination.city}, ${destination.region} · ${destination.alias}`;
  dialogDescription.textContent = destination.description;

  const mapsQuery = encodeURIComponent(
    `Makam ${destination.name}, ${destination.city}, Indonesia`
  );

  dialogMaps.href = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
  dialogWhatsApp.href = whatsappURL(
    `Halo Admin Nusa Religi, saya ingin mengetahui informasi perjalanan ke ${destination.name} di ${destination.city}.`
  );

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    window.open(dialogMaps.href, "_blank", "noopener");
  }
});

document.getElementById("dialogClose").addEventListener("click", () => {
  dialog.close();
});

dialog.addEventListener("click", event => {
  if (event.target === dialog) dialog.close();
});

document.querySelectorAll("[data-whatsapp]").forEach(link => {
  link.href = whatsappURL(link.dataset.whatsapp);
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Tutup menu" : "Buka menu");
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Buka menu");
  });
});

document.getElementById("currentYear").textContent = new Date().getFullYear();

renderDestinations();
