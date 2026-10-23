
"use strict";

// Nomor WhatsApp Admin Nusa Religi
const ADMIN_WHATSAPP = "6289681198159";

// Gambar utama memakai Wikimedia Commons.
// Gambar cadangan ditampilkan apabila gambar utama gagal dimuat.
const destinations = [
  {
    name: "Sunan Gresik",
    otherName: "Maulana Malik Ibrahim",
    city: "Gresik, Jawa Timur",
    region: "Jawa Timur",
    category: "Makam Wali",
    description: "Mengenal salah satu tokoh penting dalam sejarah awal penyebaran Islam di Jawa melalui kawasan makam bersejarah di Gresik.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Makam%20Maulana%20Malik%20Ibrahim%20Tomb%20Complex.jpg",
    fallback: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1000&q=80",
    source: "https://commons.wikimedia.org/wiki/Category:Sunan_Gresik"
  },
  {
    name: "Sunan Ampel",
    otherName: "Raden Rahmat",
    city: "Surabaya, Jawa Timur",
    region: "Jawa Timur",
    category: "Makam dan Masjid",
    description: "Kunjungi kawasan Masjid Agung Sunan Ampel dan kompleks ziarah yang menjadi bagian penting sejarah Islam di Surabaya.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Makam%20Sunan%20Ampel.jpg",
    fallback: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1000&q=80",
    source: "https://commons.wikimedia.org/wiki/Category:Sunan_Ampel_Mausoleum"
  },
  {
    name: "Sunan Bonang",
    otherName: "Makhdum Ibrahim",
    city: "Tuban, Jawa Timur",
    region: "Jawa Timur",
    category: "Makam Wali",
    description: "Telusuri jejak dakwah Sunan Bonang di Tuban dan pelajari hubungan sejarah Islam dengan seni serta kebudayaan setempat.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Makam%20Sunan%20Bonang.jpg",
    fallback: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1000&q=80",
    source: "https://www.google.com/search?q=Makam+Sunan+Bonang+Tuban"
  },
  {
    name: "Sunan Drajat",
    otherName: "Raden Qasim",
    city: "Lamongan, Jawa Timur",
    region: "Jawa Timur",
    category: "Makam dan Museum",
    description: "Kenali peninggalan Sunan Drajat di Lamongan dan kisah dakwah yang dikenal menekankan kepedulian sosial.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Makam%20Sunan%20Drajat.jpg",
    fallback: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1000&q=80",
    source: "https://www.google.com/search?q=Makam+Sunan+Drajat+Lamongan"
  },
  {
    name: "Sunan Giri",
    otherName: "Raden Paku",
    city: "Gresik, Jawa Timur",
    region: "Jawa Timur",
    category: "Makam Wali",
    description: "Jelajahi kompleks makam Sunan Giri dan kawasan bersejarah Giri Kedaton yang berkaitan dengan perjalanan dakwahnya.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Makam%20Sunan%20Giri%20Gapura%20Undakan%20Pertama.jpg",
    fallback: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1000&q=80",
    source: "https://commons.wikimedia.org/wiki/Category:Sunan_Giri"
  },
  {
    name: "Sunan Kudus",
    otherName: "Ja'far Shadiq",
    city: "Kudus, Jawa Tengah",
    region: "Jawa Tengah",
    category: "Makam dan Masjid",
    description: "Temukan warisan sejarah di Kudus, termasuk kawasan Masjid Menara Kudus yang dikenal dengan perpaduan unsur arsitektur.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Masjid%20Menara%20Kudus.jpg",
    fallback: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1000&q=80",
    source: "https://www.google.com/search?q=Makam+Sunan+Kudus+Masjid+Menara+Kudus"
  },
  {
    name: "Sunan Kalijaga",
    otherName: "Raden Said",
    city: "Kadilangu, Demak, Jawa Tengah",
    region: "Jawa Tengah",
    category: "Makam Wali",
    description: "Kunjungi kompleks makam Sunan Kalijaga di Kadilangu dan pelajari kisah dakwah yang berkaitan dengan budaya Jawa.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Makam%20Sunan%20Kali%20Jaga%20Di%20Kadilangu%20Kab.Demak.jpg",
    fallback: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1000&q=80",
    source: "https://www.google.com/search?q=Makam+Sunan+Kalijaga+Kadilangu+Demak"
  },
  {
    name: "Sunan Muria",
    otherName: "Raden Umar Said",
    city: "Gunung Muria, Kudus, Jawa Tengah",
    region: "Jawa Tengah",
    category: "Makam Wali",
    description: "Rencanakan perjalanan menuju kawasan lereng Gunung Muria untuk mengenal makam Sunan Muria dan lingkungan alam sekitarnya.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Makam%20Sunan%20Muria.jpg",
    fallback: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1000&q=80",
    source: "https://www.google.com/search?q=Makam+Sunan+Muria+Kudus"
  },
  {
    name: "Sunan Gunung Jati",
    otherName: "Syarif Hidayatullah",
    city: "Cirebon, Jawa Barat",
    region: "Jawa Barat",
    category: "Makam Wali",
    description: "Jelajahi situs ziarah Sunan Gunung Jati di Cirebon dan kenali warisan sejarah Islam di pesisir utara Jawa Barat.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Makam%20Sunan%20Gunung%20Jati.jpg",
    fallback: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1000&q=80",
    source: "https://www.google.com/search?q=Makam+Sunan+Gunung+Jati+Cirebon"
  }
];

const destinationGrid = document.getElementById("destinationGrid");
const searchInput = document.getElementById("searchInput");
const filters = document.getElementById("filters");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const yearElement = document.getElementById("year");

let selectedRegion = "Semua";

// Escape text before inserting it into HTML.
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, function (character) {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    };

    return entities[character];
  });
}

function whatsappLink(message) {
  return "https://wa.me/" + ADMIN_WHATSAPP +
    "?text=" + encodeURIComponent(message);
}

function renderDestinations() {
  if (!destinationGrid) return;

  const keyword = searchInput
    ? searchInput.value.trim().toLocaleLowerCase("id")
    : "";

  const filteredDestinations = destinations.filter(function (destination) {
    const searchableText = [
      destination.name,
      destination.otherName,
      destination.city,
      destination.region,
      destination.category,
      destination.description
    ].join(" ").toLocaleLowerCase("id");

    const matchesKeyword = searchableText.includes(keyword);
    const matchesRegion =
      selectedRegion === "Semua" ||
      destination.region === selectedRegion;

    return matchesKeyword && matchesRegion;
  });

  destinationGrid.innerHTML = filteredDestinations.map(function (destination) {
    const name = escapeHTML(destination.name);
    const otherName = escapeHTML(destination.otherName);
    const city = escapeHTML(destination.city);
    const region = escapeHTML(destination.region);
    const category = escapeHTML(destination.category);
    const description = escapeHTML(destination.description);
    const image = escapeHTML(destination.image);
    const fallback = escapeHTML(destination.fallback);
    const source = escapeHTML(destination.source);

    const message = "Assalamu'alaikum Admin Nusa Religi. " +
      "Saya ingin bertanya tentang wisata rohani ke " +
      destination.name + " di " + destination.city +
      ". Mohon informasi rute dan persiapan perjalanannya.";

    return `
      <article class="destination-card">
        <div class="destination-photo-wrap">
          <img
            class="destination-photo"
            src="${image}"
            data-fallback="${fallback}"
            alt="Foto destinasi wisata rohani ${name} di ${city}"
            loading="lazy"
            decoding="async"
          >
          <span class="destination-region">${region}</span>
        </div>

        <div class="destination-body">
          <div class="destination-kicker">${category}</div>
          <h3>${name}</h3>
          <p class="destination-location">⌖ ${city}</p>
          <p>${description}</p>

          <div class="destination-actions">
            <a
              class="destination-link"
              href="${source}"
              target="_blank"
              rel="noopener noreferrer"
            >Lihat Foto & Informasi ↗</a>

            <a
              class="destination-link secondary"
              href="${whatsappLink(message)}"
              target="_blank"
              rel="noopener noreferrer"
            >Tanya Admin</a>
          </div>
        </div>
      </article>
    `;
  }).join("");

  if (resultCount) {
    resultCount.textContent =
      "Menampilkan " + filteredDestinations.length +
      " dari " + destinations.length + " destinasi";
  }

  if (emptyState) {
    emptyState.hidden = filteredDestinations.length !== 0;
  }

  // Atur penanganan gambar setelah kartu dibuat.
  destinationGrid.querySelectorAll(".destination-photo").forEach(function (img) {
    img.addEventListener("error", function () {
      const fallback = img.dataset.fallback;

      if (fallback && img.src !== fallback && !img.dataset.fallbackTried) {
        img.dataset.fallbackTried = "true";
        img.src = fallback;
        return;
      }

      // Jangan biarkan gambar rusak merusak tampilan kartu.
      img.classList.add("image-failed");
      img.alt = "Foto belum tersedia untuk " +
        img.alt.replace("Foto destinasi wisata rohani ", "");
      img.removeAttribute("src");
    }, { once: true });
  });
}

// Pencarian destinasi
if (searchInput) {
  searchInput.addEventListener("input", renderDestinations);
}

// Filter wilayah
if (filters) {
  filters.addEventListener("click", function (event) {
    const button = event.target.closest("[data-region]");

    if (!button) return;

    selectedRegion = button.dataset.region;

    filters.querySelectorAll(".filter").forEach(function (filter) {
      const isActive = filter === button;
      filter.classList.toggle("active", isActive);
      filter.setAttribute("aria-pressed", String(isActive));
    });

    renderDestinations();
  });
}

// Menu navigasi untuk ponsel dan tablet
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Tutup menu" : "Buka menu"
    );
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Buka menu");
      menuToggle.textContent = "☰";
    });
  });
}

// Tombol rute mengirim pesan yang sesuai ke WhatsApp.
document.querySelectorAll("[data-route]").forEach(function (link) {
  const routeName = link.dataset.route;
  const message = "Assalamu'alaikum Admin Nusa Religi. " +
    "Saya ingin bertanya tentang rute wisata rohani: " +
    routeName + ". Mohon informasi rute, durasi, dan persiapannya.";

  link.href = whatsappLink(message);
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

// Tahun otomatis di footer.
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Tampilkan kartu destinasi saat halaman selesai dimuat.
renderDestinations();
