
"use strict";

const ADMIN_WHATSAPP = "6289681198159";

/* DATA DESTINASI WALI SONGO */
const destinations = [
    {
        name: "Sunan Gresik",
        location: "Gresik, Jawa Timur",
        category: "makam-wali",
        categoryLabel: "Makam Wali",
        description: "Ziarah ke makam Maulana Malik Ibrahim, salah satu tokoh penting dalam sejarah penyebaran Islam di Jawa.",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Makam%20Maulana%20Malik%20Ibrahim%20Tomb%20Complex.jpg",
        imageAlt: "Kompleks makam Maulana Malik Ibrahim di Gresik",
        searchTerms: "sunan gresik maulana malik ibrahim makam gresik"
    },
    {
        name: "Sunan Ampel",
        location: "Surabaya, Jawa Timur",
        category: "makam-wali",
        categoryLabel: "Makam Wali",
        description: "Kunjungi kawasan ziarah Sunan Ampel di Surabaya, salah satu tujuan wisata religi terkenal.",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Makam%20Sunan%20Ampel.jpg",
        imageAlt: "Kompleks makam Sunan Ampel di Surabaya",
        searchTerms: "sunan ampel surabaya makam masjid"
    },
    {
        name: "Sunan Bonang",
        location: "Tuban, Jawa Timur",
        category: "makam-wali",
        categoryLabel: "Makam Wali",
        description: "Kenali sejarah Sunan Bonang dan kompleks pemakaman beliau di Tuban.",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kompleks%20Pemakaman%20Sunan%20Bonang%2C%20Tuban.jpg",
        imageAlt: "Kompleks pemakaman Sunan Bonang di Tuban",
        searchTerms: "sunan bonang makam tuban"
    },
    {
        name: "Sunan Drajat",
        location: "Lamongan, Jawa Timur",
        category: "makam-wali",
        categoryLabel: "Makam Wali",
        description: "Destinasi ziarah Sunan Drajat, tokoh dakwah yang dikenal dengan ajaran sosialnya.",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Makam%20Sunan%20Drajat.jpg",
        imageAlt: "Makam Sunan Drajat di Lamongan",
        searchTerms: "sunan drajat makam lamongan"
    },
    {
        name: "Sunan Giri",
        location: "Gresik, Jawa Timur",
        category: "makam-wali",
        categoryLabel: "Makam Wali",
        description: "Jelajahi kompleks bersejarah makam Sunan Giri di Kabupaten Gresik.",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Giri%20Kedaton-Makam%20Sunan%20Giri.jpg",
        imageAlt: "Kompleks makam Sunan Giri di Gresik",
        searchTerms: "sunan giri giri kedaton gresik"
    },
    {
        name: "Sunan Kudus",
        location: "Kudus, Jawa Tengah",
        category: "sejarah-islam",
        categoryLabel: "Sejarah Islam",
        description: "Kenali warisan sejarah Sunan Kudus dan kawasan makamnya yang berdekatan dengan Menara Kudus.",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Makam%20Sunan%20Kudus.jpg",
        imageAlt: "Makam Sunan Kudus di Jawa Tengah",
        searchTerms: "sunan kudus menara kudus sejarah islam"
    },
    {
        name: "Sunan Kalijaga",
        location: "Kadilangu, Demak, Jawa Tengah",
        category: "makam-wali",
        categoryLabel: "Makam Wali",
        description: "Kunjungi kawasan makam Sunan Kalijaga di Kadilangu, Demak, salah satu tujuan utama wisata ziarah.",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Makam%20Sunan%20Kali%20Jaga%20Di%20Kadilangu%20Kab.Demak.jpg",
        imageAlt: "Kompleks makam Sunan Kalijaga di Kadilangu",
        searchTerms: "sunan kalijaga kadilangu demak"
    },
    {
        name: "Sunan Muria",
        location: "Colo, Kudus, Jawa Tengah",
        category: "makam-wali",
        categoryLabel: "Makam Wali",
        description: "Destinasi ziarah di kawasan Gunung Muria dengan suasana alam pegunungan.",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Makam%20Sunan%20Muria.jpg",
        imageAlt: "Kawasan makam Sunan Muria di Colo",
        searchTerms: "sunan muria gunung muria colo kudus"
    },
    {
        name: "Sunan Gunung Jati",
        location: "Cirebon, Jawa Barat",
        category: "makam-wali",
        categoryLabel: "Makam Wali",
        description: "Telusuri kawasan ziarah Sunan Gunung Jati yang memiliki peran penting dalam sejarah Islam di Cirebon.",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Entrance%20to%20Makam%20Sunan%20Gunung%20Jati.jpg",
        imageAlt: "Pintu masuk kompleks makam Sunan Gunung Jati",
        searchTerms: "sunan gunung jati syarif hidayatullah cirebon"
    }
];

/* ELEMEN HALAMAN */
const destinationGrid = document.getElementById("destinationGrid");
const destinationSearch = document.getElementById("destinationSearch");
const destinationCount = document.getElementById("destinationCount");
const emptyState = document.getElementById("emptyState");
const categoryFilters = document.getElementById("categoryFilters");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

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

function normalizeText(value) {
    return String(value)
        .toLocaleLowerCase("id-ID")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
}

/* MEMBUAT KARTU DESTINASI */
function renderDestinations(items) {
    if (!destinationGrid) return;

    destinationGrid.innerHTML = "";

    if (destinationCount) {
        destinationCount.textContent =
            "Menampilkan " + items.length +
            " dari " + destinations.length + " destinasi";
    }

    if (emptyState) {
        emptyState.hidden = items.length !== 0;
    }

    items.forEach(function (destination) {
        const originalIndex = destinations.indexOf(destination);
        const article = document.createElement("article");

        article.className = "destination-card";

        article.innerHTML = `
            <div class="card-image">
                <img
                    src="${escapeHTML(destination.image)}"
                    alt="${escapeHTML(destination.imageAlt)}"
                    loading="lazy"
                    decoding="async"
                >
                <span class="card-category">
                    ${escapeHTML(destination.categoryLabel)}
                </span>
            </div>

            <div class="card-body">
                <span class="card-location">
                    <span aria-hidden="true">📍</span>
                    ${escapeHTML(destination.location)}
                </span>

                <h3>${escapeHTML(destination.name)}</h3>

                <p>${escapeHTML(destination.description)}</p>

                <button
                    type="button"
                    class="card-link destination-detail"
                    data-destination-index="${originalIndex}"
                >
                    <span>Tanya tentang destinasi</span>
                    <span aria-hidden="true">→</span>
                </button>
            </div>
        `;

        const image = article.querySelector("img");

        image.addEventListener("error", function () {
            image.alt = "Foto " + destination.name +
                " belum dapat dimuat. Periksa tautan gambar.";

            image.classList.add("image-unavailable");
            image.setAttribute("data-image-error", "true");
        });

        destinationGrid.appendChild(article);
    });
}

/* PENCARIAN DAN FILTER */
let activeCategory = "semua";

function filterDestinations() {
    const query = normalizeText(
        destinationSearch ? destinationSearch.value : ""
    );

    const filtered = destinations.filter(function (destination) {
        const searchableText = normalizeText([
            destination.name,
            destination.location,
            destination.categoryLabel,
            destination.description,
            destination.searchTerms
        ].join(" "));

        const matchesSearch = searchableText.includes(query);

        const matchesCategory =
            activeCategory === "semua" ||
            destination.category === activeCategory;

        return matchesSearch && matchesCategory;
    });

    renderDestinations(filtered);
}

if (destinationSearch) {
    destinationSearch.addEventListener("input", filterDestinations);
}

if (categoryFilters) {
    categoryFilters.addEventListener("click", function (event) {
        const button = event.target.closest("[data-filter]");
        if (!button) return;

        activeCategory = button.dataset.filter || "semua";

        categoryFilters.querySelectorAll("[data-filter]").forEach(function (chip) {
            const selected = chip === button;

            chip.classList.toggle("active", selected);
            chip.setAttribute("aria-pressed", String(selected));
        });

        filterDestinations();
    });
}

/* WHATSAPP */
function openWhatsApp(message) {
    const phone = ADMIN_WHATSAPP.replace(/\D/g, "");

    if (!phone || phone.length < 10) {
        alert("Nomor WhatsApp admin belum valid.");
        return;
    }

    const whatsappURL =
        "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
}

/* TOMBOL TANYA DESTINASI */
if (destinationGrid) {
    destinationGrid.addEventListener("click", function (event) {
        const button = event.target.closest(".destination-detail");
        if (!button) return;

        const destination = destinations[
            Number(button.dataset.destinationIndex)
        ];

        if (!destination) return;

        openWhatsApp(
            "Halo Admin Nusa Religi, saya ingin bertanya tentang:\n\n" +
            destination.name + "\n" +
            "Lokasi: " + destination.location + "\n\n" +
            "Mohon informasi mengenai lokasi dan perjalanan ziarah."
        );
    });
}

/* TOMBOL KONTAK PAKET */
document.querySelectorAll(".package-contact").forEach(function (button) {
    button.addEventListener("click", function () {
        const packageName = button.dataset.package || "Paket wisata";

        openWhatsApp(
            "Halo Admin Nusa Religi, saya ingin bertanya tentang paket " +
            packageName + ". Mohon informasi harga dan jadwal perjalanan."
        );
    });
});

/* KONTAK WHATSAPP */
const contactWhatsapp = document.getElementById("contactWhatsapp");

if (contactWhatsapp) {
    contactWhatsapp.href =
        "https://wa.me/" + ADMIN_WHATSAPP.replace(/\D/g, "");

    contactWhatsapp.addEventListener("click", function (event) {
        event.preventDefault();

        openWhatsApp(
            "Halo Admin Nusa Religi, saya ingin bertanya mengenai wisata religi."
        );
    });
}

/* MENU NAVIGASI */
if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
        const isOpen = mainNav.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    mainNav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            mainNav.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.textContent = "☰";
        });
    });
}

/* TAHUN OTOMATIS */
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

/* TAMPILKAN DESTINASI */
renderDestinations(destinations);
