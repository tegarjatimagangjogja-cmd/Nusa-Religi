
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
    image: "https://aswajanusantara.com/esai/sunan-ampel-dalam-lapisan-sejarah/",
    fallback:  "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Sunan Bonang",
    alias: "Makhdum Ibrahim",
    city: "Tuban",
    region: "Jawa Timur",
    description: "Telusuri jejak dakwah Sunan Bonang di Tuban dan pelajari hubungan sejarah Islam dengan seni serta kebudayaan setempat.",
    image: "https://www.google.com/imgres?q=makam%20bonang&imgurl=https%3A%2F%2Findonesiakaya.com%2Fwp-content%2Fuploads%2F2020%2F10%2Fmakam-sunan-bonang-1200.jpg&imgrefurl=https%3A%2F%2Findonesiakaya.com%2Fpustaka-indonesia%2Fziarah-makam-sunan-bonang-maestro-budaya-pencipta-tembang-tombo-ati%2F&docid=6SoU7_sGYbZmdM&tbnid=ad48TQFGKfR8IM&vet=12ahUKEwim4fP84tKXAxVEkeEIHcjjI-QQnPAOegQIThAA..i&w=1200&h=900&hcb=2&ved=2ahUKEwim4fP84tKXAxVEkeEIHcjjI-QQnPAOegQIThAA",
    fallback: "https://www.google.com/imgres?q=makam%20bonang&imgurl=https%3A%2F%2Findonesiakaya.com%2Fwp-content%2Fuploads%2F2020%2F10%2Fmakam-sunan-bonang-1200.jpg&imgrefurl=https%3A%2F%2Findonesiakaya.com%2Fpustaka-indonesia%2Fziarah-makam-sunan-bonang-maestro-budaya-pencipta-tembang-tombo-ati%2F&docid=6SoU7_sGYbZmdM&tbnid=ad48TQFGKfR8IM&vet=12ahUKEwim4fP84tKXAxVEkeEIHcjjI-QQnPAOegQIThAA..i&w=1200&h=900&hcb=2&ved=2ahUKEwim4fP84tKXAxVEkeEIHcjjI-QQnPAOegQIThAA"
  },
  {
    name: "Sunan Drajat",
    alias: "Raden Qasim",
    city: "Lamongan",
    region: "Jawa Timur",
    description: "Kenali peninggalan Sunan Drajat di Lamongan dan kisah dakwah yang dikenal dengan kepedulian sosial.",
    image: "https://www.google.com/imgres?q=makam%20sunan%20drajat&imgurl=https%3A%2F%2Fsalsawisata.com%2Fwp-content%2Fuploads%2F2022%2F12%2Fmakam-sunan-drajat-sekarang.avif&imgrefurl=https%3A%2F%2Fsalsawisata.com%2Fmakam-sunan-drajat%2F&docid=rQtupFx0AnacrM&tbnid=xIPRRYFwTsHbdM&vet=12ahUKEwjUsY3E49KXAxU4leEIHeqIKTMQnPAOegQIORAA..i&w=720&h=540&hcb=2&ved=2ahUKEwjUsY3E49KXAxU4leEIHeqIKTMQnPAOegQIORAA",
    fallback: "https://www.google.com/imgres?q=makam%20sunan%20drajat&imgurl=https%3A%2F%2Fsalsawisata.com%2Fwp-content%2Fuploads%2F2022%2F12%2Fmakam-sunan-drajat-sekarang.avif&imgrefurl=https%3A%2F%2Fsalsawisata.com%2Fmakam-sunan-drajat%2F&docid=rQtupFx0AnacrM&tbnid=xIPRRYFwTsHbdM&vet=12ahUKEwjUsY3E49KXAxU4leEIHeqIKTMQnPAOegQIORAA..i&w=720&h=540&hcb=2&ved=2ahUKEwjUsY3E49KXAxU4leEIHeqIKTMQnPAOegQIORAA"
  },
  {
    name: "Sunan Giri",
    alias: "Raden Paku",
    city: "Gresik",
    region: "Jawa Timur",
    description: "Jelajahi kompleks makam Sunan Giri dan kawasan Giri Kedaton yang berkaitan dengan sejarah dakwahnya.",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYsx0faXvX2hAUNJSFRx22rMuXJH9s_YnX2MGNYX3JqWA8mXmaoHCnrcN75hFhcCYDYhnf4MlNKjZp9x-HvYRjuuxg2RXDQdOMRGDIOAN_UdBLYtzq3YDe2cFiCPpQE5c3NtUMcSWgcIei/s1600/Sunan+Giri+Gresik+%25283%2529_1_wm.jpg",
    fallback:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYsx0faXvX2hAUNJSFRx22rMuXJH9s_YnX2MGNYX3JqWA8mXmaoHCnrcN75hFhcCYDYhnf4MlNKjZp9x-HvYRjuuxg2RXDQdOMRGDIOAN_UdBLYtzq3YDe2cFiCPpQE5c3NtUMcSWgcIei/s1600/Sunan+Giri+Gresik+%25283%2529_1_wm.jpg"
  },
  {
    name: "Sunan Kudus",
    alias: "Ja'far Shadiq",
    city: "Kudus",
    region: "Jawa Tengah",
    description: "Temukan warisan sejarah di Kudus, termasuk kawasan Menara Kudus yang dikenal dengan perpaduan unsur arsitekturnya.",
    image: "https://www.google.com/imgres?q=makam%20sunan%20kudus&imgurl=https%3A%2F%2Fdynamic-media-cdn.tripadvisor.com%2Fmedia%2Fphoto-o%2F0d%2F47%2Fc0%2F78%2Fmenara-masdjid-sunan.jpg%3Fw%3D1200%26h%3D-1%26s%3D1&imgrefurl=https%3A%2F%2Fwww.tripadvisor.co.id%2FAttraction_Review-g1966182-d7390704-Reviews-Sunan_Kudus_Tomb-Kudus_Central_Java_Java.html&docid=6ewC1oI6gRrpGM&tbnid=ghVEiaL4OK5dyM&vet=12ahUKEwiF5oDf49KXAxXdi-EIHQ-FDrMQnPAOegUImQEQAA..i&w=1164&h=1500&hcb=2&ved=2ahUKEwiF5oDf49KXAxXdi-EIHQ-FDrMQnPAOegUImQEQAA",
    fallback: "https://www.google.com/imgres?q=makam%20sunan%20kudus&imgurl=https%3A%2F%2Fdynamic-media-cdn.tripadvisor.com%2Fmedia%2Fphoto-o%2F0d%2F47%2Fc0%2F78%2Fmenara-masdjid-sunan.jpg%3Fw%3D1200%26h%3D-1%26s%3D1&imgrefurl=https%3A%2F%2Fwww.tripadvisor.co.id%2FAttraction_Review-g1966182-d7390704-Reviews-Sunan_Kudus_Tomb-Kudus_Central_Java_Java.html&docid=6ewC1oI6gRrpGM&tbnid=ghVEiaL4OK5dyM&vet=12ahUKEwiF5oDf49KXAxXdi-EIHQ-FDrMQnPAOegUImQEQAA..i&w=1164&h=1500&hcb=2&ved=2ahUKEwiF5oDf49KXAxXdi-EIHQ-FDrMQnPAOegUImQEQAA"
  },
  {
    name: "Sunan Kalijaga",
    description: "Kunjungi kawasan makam Sunan Kalijaga di Kadilangu dan pelajari kisah dakwah yang berkaitan dengan budaya Jawa.",
    alias: "Raden Said",
    city: "Demak",
    region: "Jawa Tengah",
    image: "https://www.google.com/imgres?q=makam%20sunan%20kalijaga&imgurl=https%3A%2F%2Fsunankalijaga.isi.ac.id%2Fmedia%2F6.%2520makam%2520kadilangu%2F30.%2520Makam%2520Sunan%2520Kalijaga%25200.jpeg&imgrefurl=https%3A%2F%2Fsunankalijaga.isi.ac.id%2Fakhir_hayat_sunan_kalijaga.html&docid=Dxv896CAOc5roM&tbnid=KSJs8CHMs8bW2M&vet=12ahUKEwi2pvD049KXAxWBiuEIHY-3ABsQnPAOegQIQxAA..i&w=680&h=510&hcb=2&ved=2ahUKEwi2pvD049KXAxWBiuEIHY-3ABsQnPAOegQIQxAA",
    fallback: "https://www.google.com/imgres?q=makam%20sunan%20kalijaga&imgurl=https%3A%2F%2Fsunankalijaga.isi.ac.id%2Fmedia%2F6.%2520makam%2520kadilangu%2F30.%2520Makam%2520Sunan%2520Kalijaga%25200.jpeg&imgrefurl=https%3A%2F%2Fsunankalijaga.isi.ac.id%2Fakhir_hayat_sunan_kalijaga.html&docid=Dxv896CAOc5roM&tbnid=KSJs8CHMs8bW2M&vet=12ahUKEwi2pvD049KXAxWBiuEIHY-3ABsQnPAOegQIQxAA..i&w=680&h=510&hcb=2&ved=2ahUKEwi2pvD049KXAxWBiuEIHY-3ABsQnPAOegQIQxAA"
  },
  {
    name: "Sunan Muria",
    alias: "Raden Umar Said",
    city: "Kudus",
    region: "Jawa Tengah",
    description: "Rencanakan perjalanan menuju kawasan lereng Gunung Muria untuk mengenal makam Sunan Muria dan lingkungan alam sekitarnya.",
    image: "https://www.google.com/imgres?q=makam%20sunan%20muria&imgurl=https%3A%2F%2Fzjglidcehtsqqqhbdxyp.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fatourin%2Fimages%2Fdestination%2Fkudus%2Fmakam-sunan-muria-profile1670839697.jpeg%3Fx-image-process%3Dimage%2Fresize%2Cp_100%2Climit_1%2Fimageslim&imgrefurl=https%3A%2F%2Fatourin.com%2Fdestination%2Fkudus%2Fmakam-sunan-muria&docid=LUE6MADxmk-MzM&tbnid=yBfNHVg7BUtZeM&vet=12ahUKEwi7pvqG5NKXAxXei-EIHRw_HEAQnPAOegQITBAA..i&w=1080&h=718&hcb=2&ved=2ahUKEwi7pvqG5NKXAxXei-EIHRw_HEAQnPAOegQITBAA",
    fallback: "https://www.google.com/imgres?q=makam%20sunan%20muria&imgurl=https%3A%2F%2Fzjglidcehtsqqqhbdxyp.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fatourin%2Fimages%2Fdestination%2Fkudus%2Fmakam-sunan-muria-profile1670839697.jpeg%3Fx-image-process%3Dimage%2Fresize%2Cp_100%2Climit_1%2Fimageslim&imgrefurl=https%3A%2F%2Fatourin.com%2Fdestination%2Fkudus%2Fmakam-sunan-muria&docid=LUE6MADxmk-MzM&tbnid=yBfNHVg7BUtZeM&vet=12ahUKEwi7pvqG5NKXAxXei-EIHRw_HEAQnPAOegQITBAA..i&w=1080&h=718&hcb=2&ved=2ahUKEwi7pvqG5NKXAxXei-EIHRw_HEAQnPAOegQITBAA"
  {
    name: "Sunan Gunung Jati",
    alias: "Syarif Hidayatullah",
    city: "Cirebon",
    region: "Jawa Barat",
    description: "Jelajahi situs ziarah Sunan Gunung Jati di Cirebon dan kenali warisan sejarah Islam di pesisir utara Jawa Barat.",
    image: "https://www.google.com/imgres?q=makam%20sunan%20gunung%20jati&imgurl=https%3A%2F%2Fwww.hiacecirebontrans.com%2Fwp-content%2Fuploads%2F2017%2F03%2FMakam-Putri-Ong-Tien-Nio.jpg&imgrefurl=https%3A%2F%2Fwww.hiacecirebontrans.com%2Fmakam-sunan-gunung-jati%2F&docid=srctgpSKVM1ecM&tbnid=Lkj3UbxpXYY59M&vet=12ahUKEwiinK6V5NKXAxWWkOEIHXW4BCMQnPAOegUIvQEQAA..i&w=1600&h=1060&hcb=2&ved=2ahUKEwiinK6V5NKXAxWWkOEIHXW4BCMQnPAOegUIvQEQAA",
    fallback:  "https://www.google.com/imgres?q=makam%20sunan%20gunung%20jati&imgurl=https%3A%2F%2Fwww.hiacecirebontrans.com%2Fwp-content%2Fuploads%2F2017%2F03%2FMakam-Putri-Ong-Tien-Nio.jpg&imgrefurl=https%3A%2F%2Fwww.hiacecirebontrans.com%2Fmakam-sunan-gunung-jati%2F&docid=srctgpSKVM1ecM&tbnid=Lkj3UbxpXYY59M&vet=12ahUKEwiinK6V5NKXAxWWkOEIHXW4BCMQnPAOegUIvQEQAA..i&w=1600&h=1060&hcb=2&ved=2ahUKEwiinK6V5NKXAxWWkOEIHXW4BCMQnPAOegUIvQEQAA"
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
