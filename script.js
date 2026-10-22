
"use strict";

const ADMIN_WHATSAPP = "6289681198159";

/*
 * Data gambar destinasi Wali Songo.
 */

const destinations = [
    {
        name: "Sunan Gresik",
        location: "Gresik, Jawa Timur",
        category: "makam-wali",
        categoryLabel: "Makam Wali",
        description: "Ziarah ke makam Maulana Malik Ibrahim, salah satu tokoh penting dalam sejarah penyebaran Islam di Jawa.",
        image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=900&q=85",
        imageAlt: "Ilustrasi arsitektur Islam",
        searchTerms: "sunan gresik maulana malik ibrahim makam gresik"
    },
    {
        name: "Sunan Ampel",
        location: "Surabaya, Jawa Timur",
        category: "makam-wali",
        categoryLabel: "Makam Wali",
        description: "Kunjungi kawasan ziarah Sunan Ampel yang berada di Surabaya, salah satu tujuan wisata religi terkenal.",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Makam%20Sunan%20Ampel.jpg",
        imageAlt: "Makam Sunan Ampel di Surabaya",
        searchTerms: "sunan ampel raden rahmat makam surabaya"
    },
    {
        name: "Sunan Bonang",
        location: "Tuban, Jawa Timur",
        category: "makam-wali",
        categoryLabel: "Makam Wali",
        description: "Kenali sejarah Sunan Bonang dan tempat yang berkaitan dengan perjalanan dakwah beliau di Tuban.",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Tempat%20pasujudan%20sunan%20bonang.jpg",
        imageAlt: "Tempat pasujudan Sunan Bonang",
        searchTerms: "sunan bonang makam tuban pasujudan"
    },
    {
        name: "Sunan Drajat",
        location: "Lamongan, Jawa Timur",
        category: "makam-wali",
        categoryLabel: "Makam Wali",
        description: "Destinasi ziarah yang berkaitan dengan Sunan Drajat, tokoh dakwah yang dikenal dengan ajaran sosialnya.",
        image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=900&q=85",
        imageAlt: "Ilustrasi bangunan berarsitektur Islam",
        searchTerms: "sunan drajat makam lamongan jawa timur"
    },
    {
        name: "Sunan Giri",
        location: "Gresik, Jawa Timur",
        category: "makam-wali",
        categoryLabel: "Makam Wali",
        description: "Jelajahi kompleks bersejarah Giri Kedaton yang berkaitan dengan Sunan Giri di Kabupaten Gresik.",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Giri%20Kedaton-Makam%20Sunan%20Giri.jpg",
        imageAlt: "Kompleks makam Sunan Giri",
        searchTerms: "sunan giri raden paku giri kedaton gresik"
    },
    {
        name: "Sunan Kudus",
        location: "Kudus, Jawa Tengah",
        category: "sejarah-islam",
        categoryLabel: "Sejarah Islam",
        description: "Kenali warisan sejarah Sunan Kudus dan kawasan Menara Kudus yang memiliki ciri arsitektur khas.",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Makam%20Sunan%20Kudus.jpg",
        imageAlt: "Makam Sunan Kudus",
        searchTerms: "sunan kudus menara kudus makam jawa tengah"
    },
    {
        name: "Sunan Kalijaga",
        location: "Kadilangu, Demak, Jawa Tengah",
        category: "makam-wali",
        categoryLabel: "Makam Wali",
        description: "Kunjungi kawasan makam Sunan Kalijaga di Kadilangu, Demak, salah satu tujuan utama wisata ziarah.",
        image: "https://visitjawatengah.jatengprov.go.id/assets/images/destinasi/makam-sunan-kalijaga.jpg",
        imageAlt: "Destinasi makam Sunan Kalijaga di Demak",
        searchTerms: "sunan kalijaga kadilangu demak makam"
    },
    {
        name: "Sunan Muria",
        location: "Colo, Kudus, Jawa Tengah",
        category: "makam-wali",
        categoryLabel: "Makam Wali",
        description: "Destinasi ziarah di kawasan Gunung Muria yang berkaitan dengan Sunan Muria.",
        image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=900&q=85",
        imageAlt: "Ilustrasi suasana tempat ziarah",
        searchTerms: "sunan muria makam gunung muria colo kudus"
    },
    {
        name: "Sunan Gunung Jati",
        location: "Cirebon, Jawa Barat",
        category: "makam-wali",
        categoryLabel: "Makam Wali",
        description: "Telusuri kawasan ziarah Sunan Gunung Jati yang memiliki peran penting dalam sejarah Islam di Cirebon.",
        image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=900&q=85",
        imageAlt: "Ilustrasi arsitektur Islam",
        searchTerms: "sunan gunung jati syarif hidayatullah makam cirebon"
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
            image.alt = "Foto destinasi belum dapat dimuat";
            image.classList.add("image-unavailable");
        }, { once: true });

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
