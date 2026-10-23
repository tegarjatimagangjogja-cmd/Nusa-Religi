
"use strict";

const ADMIN_WHATSAPP = "6289681198159";

/* Data destinasi Wali Songo dengan foto khusus setiap lokasi. */

const destinations = [
    {
        name: "Sunan Gresik",
        location: "Gresik, Jawa Timur",
        category: "jawa-timur",
        categoryLabel: "JAWA TIMUR",
        description: "Makam Maulana Malik Ibrahim, salah satu tujuan ziarah bersejarah di Gresik.",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Makam%20Maulana%20Malik%20Ibrahim%20Tomb%20Complex.jpg",
        imageAlt: "Kompleks makam Sunan Gresik",
        searchTerms: "sunan gresik maulana malik ibrahim makam wali songo"
    },
    {
        name: "Sunan Ampel",
        location: "Surabaya, Jawa Timur",
        category: "jawa-timur",
        categoryLabel: "JAWA TIMUR",
        description: "Kompleks Masjid dan Makam Sunan Ampel yang menjadi pusat wisata religi di Surabaya.",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Makam%20Sunan%20Ampel.jpg",
        imageAlt: "Kompleks makam Sunan Ampel",
        searchTerms: "sunan ampel surabaya masjid makam wali songo"
    },
    {
        name: "Sunan Bonang",
        location: "Tuban, Jawa Timur",
        category: "jawa-timur",
        categoryLabel: "JAWA TIMUR",
        description: "Makam Sunan Bonang, salah satu tokoh penyebaran Islam di pesisir utara Jawa.",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kompleks%20Pemakaman%20Sunan%20Bonang%2C%20Tuban.jpg",
        imageAlt: "Kompleks pemakaman Sunan Bonang di Tuban",
        searchTerms: "sunan bonang tuban makam wali songo"
    },
    {
        name: "Sunan Drajat",
        location: "Lamongan, Jawa Timur",
        category: "jawa-timur",
        categoryLabel: "JAWA TIMUR",
        description: "Kawasan makam Sunan Drajat yang menyimpan jejak sejarah dakwah dan kepedulian sosial.",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Makam%20Sunan%20Drajat.jpg",
        imageAlt: "Makam Sunan Drajat di Lamongan",
        searchTerms: "sunan drajat lamongan makam wisata religi"
    },
    {
        name: "Sunan Giri",
        location: "Gresik, Jawa Timur",
        category: "jawa-timur",
        categoryLabel: "JAWA TIMUR",
        description: "Kompleks makam Sunan Giri di kawasan perbukitan Giri, Gresik.",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Giri%20Kedaton-Makam%20Sunan%20Giri.jpg",
        imageAlt: "Kompleks makam Sunan Giri di Gresik",
        searchTerms: "sunan giri giri kedaton gresik makam wali songo"
    },
    {
        name: "Sunan Kudus",
        location: "Kudus, Jawa Tengah",
        category: "jawa-tengah",
        categoryLabel: "JAWA TENGAH",
        description: "Destinasi ziarah bersejarah yang berada di kawasan Menara Kudus.",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Makam%20Sunan%20Kudus.jpg",
        imageAlt: "Makam Sunan Kudus",
        searchTerms: "sunan kudus menara kudus makam wisata religi"
    },
    {
        name: "Sunan Kalijaga",
        location: "Demak, Jawa Tengah",
        category: "jawa-tengah",
        categoryLabel: "JAWA TENGAH",
        description: "Makam Sunan Kalijaga di Kadilangu, Demak, salah satu tujuan ziarah terkenal.",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Makam%20Sunan%20Kali%20Jaga%20Di%20Kadilangu%20Kab.Demak.jpg",
        imageAlt: "Makam Sunan Kalijaga di Kadilangu, Demak",
        searchTerms: "sunan kalijaga kadilangu demak makam wali songo"
    },
    {
        name: "Sunan Muria",
        location: "Kudus, Jawa Tengah",
        category: "jawa-tengah",
        categoryLabel: "JAWA TENGAH",
        description: "Destinasi wisata religi di kawasan Gunung Muria dengan suasana alam pegunungan.",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Makam%20Sunan%20Muria.jpg",
        imageAlt: "Kawasan makam Sunan Muria",
        searchTerms: "sunan muria gunung muria kudus makam"
    },
    {
        name: "Sunan Gunung Jati",
        location: "Cirebon, Jawa Barat",
        category: "jawa-barat",
        categoryLabel: "JAWA BARAT",
        description: "Kompleks makam Sunan Gunung Jati, salah satu tujuan wisata religi di Cirebon.",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Entrance%20to%20Makam%20Sunan%20Gunung%20Jati.jpg",
        imageAlt: "Pintu masuk kompleks makam Sunan Gunung Jati",
        searchTerms: "sunan gunung jati cirebon makam wali songo"
    }
];

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
                    ⌖ ${escapeHTML(destination.location)}
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
                " belum dapat dimuat. Periksa koneksi atau tautan foto.";

            image.classList.add("image-unavailable");
            image.setAttribute("data-image-error", "true");
        });

        destinationGrid.appendChild(article);
    });
}

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

/* WhatsApp admin */

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

/* Tombol tanya destinasi */

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

/* Tombol kontak paket */

document.querySelectorAll(".package-contact").forEach(function (button) {
    button.addEventListener("click", function () {
        const packageName = button.dataset.package || "Paket wisata";

        openWhatsApp(
            "Halo Admin Nusa Religi, saya ingin bertanya tentang paket " +
            packageName + ". Mohon informasi harga dan jadwal perjalanan."
        );
    });
});

/* Tautan WhatsApp halaman kontak */

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

/* Menu navigasi */

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

/* Tahun otomatis */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

/* Tampilkan destinasi */

renderDestinations(destinations);
