"use strict";

/*
|--------------------------------------------------------------------------
| KONFIGURASI NUSA RELIGI
|--------------------------------------------------------------------------
| Ganti nomor WhatsApp di bawah dengan nomor admin yang sebenarnya.
| Gunakan kode negara tanpa tanda +, spasi, atau tanda hubung.
| Contoh: 6281234567890
*/

const ADMIN_WHATSAPP = "6281234567890";

/*
|--------------------------------------------------------------------------
| DATA DESTINASI
|--------------------------------------------------------------------------
| Data berikut merupakan contoh awal destinasi wisata religi Islam.
| Silakan periksa informasi lokasi dan gambar sebelum website dipublikasikan.
*/

const destinations = [
    {
        name: "Masjid Agung Demak",
        location: "Demak, Jawa Tengah",
        category: "masjid",
        categoryLabel: "Masjid Bersejarah",
        description: "Masjid bersejarah yang berkaitan erat dengan perkembangan Islam dan dakwah Wali Songo di Pulau Jawa.",
        image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=900&q=85",
        imageAlt: "Arsitektur masjid dengan kubah",
        searchTerms: "masjid agung demak wali songo jawa tengah"
    },
    {
        name: "Masjid Menara Kudus",
        location: "Kudus, Jawa Tengah",
        category: "sejarah-islam",
        categoryLabel: "Sejarah Islam",
        description: "Destinasi bersejarah yang dikenal dengan menaranya dan hubungannya dengan Sunan Kudus.",
        image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=900&q=85",
        imageAlt: "Arsitektur masjid",
        searchTerms: "masjid menara kudus sunan kudus jawa tengah"
    },
    {
        name: "Makam Sunan Kalijaga",
        location: "Demak, Jawa Tengah",
        category: "makam-wali",
        categoryLabel: "Makam Wali",
        description: "Tempat ziarah yang berkaitan dengan Sunan Kalijaga, salah satu tokoh penting dalam sejarah dakwah Islam di Jawa.",
        image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=900&q=85",
        imageAlt: "Suasana tempat ibadah",
        searchTerms: "makam sunan kalijaga kadilangu demak wali songo"
    },
    {
        name: "Makam Sunan Ampel",
        location: "Surabaya, Jawa Timur",
        category: "makam-wali",
        categoryLabel: "Makam Wali",
        description: "Kawasan ziarah yang berhubungan dengan Sunan Ampel dan sejarah penyebaran Islam di Surabaya.",
        image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=900&q=85",
        imageAlt: "Arsitektur masjid",
        searchTerms: "makam sunan ampel surabaya jawa timur wali songo"
    },
    {
        name: "Makam Sunan Giri",
        location: "Gresik, Jawa Timur",
        category: "makam-wali",
        categoryLabel: "Makam Wali",
        description: "Destinasi ziarah bersejarah yang berkaitan dengan Sunan Giri dan perkembangan Islam di wilayah Gresik.",
        image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=900&q=85",
        imageAlt: "Bangunan dengan arsitektur Islam",
        searchTerms: "makam sunan giri gresik jawa timur wali songo"
    },
    {
        name: "Masjid Istiqlal",
        location: "Jakarta Pusat, DKI Jakarta",
        category: "masjid",
        categoryLabel: "Masjid",
        description: "Masjid nasional Indonesia yang menjadi salah satu landmark penting dan tujuan wisata religi di Jakarta.",
        image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=900&q=85",
        imageAlt: "Masjid dengan kubah besar",
        searchTerms: "masjid istiqlal jakarta pusat dki jakarta"
    },
    {
        name: "Masjid Raya Baiturrahman",
        location: "Banda Aceh, Aceh",
        category: "masjid",
        categoryLabel: "Masjid Bersejarah",
        description: "Masjid ikonik di Banda Aceh yang memiliki nilai sejarah dan menjadi salah satu tujuan wisata religi di Aceh.",
        image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=900&q=85",
        imageAlt: "Bangunan masjid",
        searchTerms: "masjid raya baiturrahman banda aceh"
    },
    {
        name: "Makam Sunan Bonang",
        location: "Tuban, Jawa Timur",
        category: "makam-wali",
        categoryLabel: "Makam Wali",
        description: "Tempat ziarah yang berkaitan dengan Sunan Bonang, tokoh dalam sejarah penyebaran Islam di Jawa.",
        image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=900&q=85",
        imageAlt: "Suasana kawasan ibadah",
        searchTerms: "makam sunan bonang tuban jawa timur wali songo"
    },
    {
        name: "Masjid Agung Banten",
        location: "Serang, Banten",
        category: "sejarah-islam",
        categoryLabel: "Sejarah Islam",
        description: "Kompleks masjid bersejarah yang berkaitan dengan Kesultanan Banten dan perkembangan Islam di wilayah Banten.",
        image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=900&q=85",
        imageAlt: "Arsitektur masjid",
        searchTerms: "masjid agung banten serang kesultanan banten"
    },
    {
        name: "Makam Sunan Gunung Jati",
        location: "Cirebon, Jawa Barat",
        category: "makam-wali",
        categoryLabel: "Makam Wali",
        description: "Destinasi ziarah yang berhubungan dengan Sunan Gunung Jati dan sejarah Islam di kawasan Cirebon.",
        image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=900&q=85",
        imageAlt: "Arsitektur tempat ibadah",
        searchTerms: "makam sunan gunung jati cirebon jawa barat wali songo"
    },
    {
        name: "Masjid Raya Sumatera Barat",
        location: "Padang, Sumatera Barat",
        category: "masjid",
        categoryLabel: "Masjid",
        description: "Masjid dengan arsitektur khas Minangkabau yang menjadi salah satu ikon wisata religi di Padang.",
        image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=900&q=85",
        imageAlt: "Arsitektur masjid",
        searchTerms: "masjid raya sumatera barat padang minangkabau"
    },
    {
        name: "Masjid Agung Jawa Tengah",
        location: "Semarang, Jawa Tengah",
        category: "sejarah-islam",
        categoryLabel: "Sejarah Islam",
        description: "Masjid besar di Semarang yang dikenal dengan kompleks arsitekturnya dan menjadi destinasi wisata religi.",
        image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=900&q=85",
        imageAlt: "Bangunan masjid",
        searchTerms: "masjid agung jawa tengah semarang"
    }
];

/*
|--------------------------------------------------------------------------
| ELEMEN HTML
|--------------------------------------------------------------------------
*/

const destinationGrid = document.getElementById("destinationGrid");
const destinationSearch = document.getElementById("destinationSearch");
const destinationCount = document.getElementById("destinationCount");
const emptyState = document.getElementById("emptyState");
const categoryFilters = document.getElementById("categoryFilters");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

/*
|--------------------------------------------------------------------------
| FORMAT TEKS
|--------------------------------------------------------------------------
*/

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

/*
|--------------------------------------------------------------------------
| MENAMPILKAN DESTINASI
|--------------------------------------------------------------------------
*/

function renderDestinations(items) {
    if (!destinationGrid) {
        return;
    }

    destinationGrid.innerHTML = "";

    if (destinationCount) {
        destinationCount.textContent =
            "Menampilkan " + items.length + " dari " + destinations.length + " destinasi";
    }

    if (emptyState) {
        emptyState.hidden = items.length !== 0;
    }

    if (items.length === 0) {
        return;
    }

    const fragment = document.createDocumentFragment();

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
                <span class="card-category">${escapeHTML(destination.categoryLabel)}</span>
            </div>

            <div class="card-body">
                <span class="card-location">⌖ ${escapeHTML(destination.location)}</span>
                <h3>${escapeHTML(destination.name)}</h3>
                <p>${escapeHTML(destination.description)}</p>

                <button
                    type="button"
                    class="card-link destination-detail"
                    data-destination-index="${originalIndex}"
                >
                    <span>Bertanya tentang destinasi</span>
                    <span aria-hidden="true">→</span>
                </button>
            </div>
        `;

        const image = article.querySelector("img");

        image.addEventListener("error", function () {
            image.alt = "Gambar destinasi belum tersedia";
            image.style.opacity = "0.35";
        }, { once: true });

        fragment.appendChild(article);
    });

    destinationGrid.appendChild(fragment);
}

/*
|--------------------------------------------------------------------------
| PENCARIAN DAN FILTER
|--------------------------------------------------------------------------
*/

let activeCategory = "semua";

function filterDestinations() {
    const query = normalizeText(destinationSearch ? destinationSearch.value : "");

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

        if (!button) {
            return;
        }

        activeCategory = button.dataset.filter || "semua";

        categoryFilters.querySelectorAll("[data-filter]").forEach(function (chip) {
            const isActive = chip === button;

            chip.classList.toggle("active", isActive);
            chip.setAttribute("aria-pressed", String(isActive));
        });

        filterDestinations();
    });

    categoryFilters.querySelectorAll("[data-filter]").forEach(function (chip) {
        chip.setAttribute(
            "aria-pressed",
            String((chip.dataset.filter || "semua") === activeCategory)
        );
    });
}

/*
|--------------------------------------------------------------------------
| WHATSAPP
|--------------------------------------------------------------------------
*/

function openWhatsApp(message) {
    const phone = ADMIN_WHATSAPP.replace(/\D/g, "");

    if (!phone || phone === "6281234567890") {
        alert(
            "Silakan ganti nomor ADMIN_WHATSAPP di file script.js dengan nomor WhatsApp admin yang sebenarnya."
        );
        return;
    }

    const url =
        "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

    window.open(url, "_blank", "noopener,noreferrer");
}

/*
|--------------------------------------------------------------------------
| TANYA DESTINASI
|--------------------------------------------------------------------------
*/

if (destinationGrid) {
    destinationGrid.addEventListener("click", function (event) {
        const button = event.target.closest(".destination-detail");

        if (!button) {
            return;
        }

        const index = Number(button.dataset.destinationIndex);
        const destination = destinations[index];

        if (!destination) {
            return;
        }

        const message =
            "Halo Admin Nusa Religi, saya ingin bertanya tentang destinasi wisata religi berikut:\n\n" +
            "Nama destinasi: " + destination.name + "\n" +
            "Lokasi: " + destination.location + "\n\n" +
            "Mohon informasi mengenai lokasi, jadwal kunjungan, dan pilihan perjalanan.";

        openWhatsApp(message);
    });
}

/*
|--------------------------------------------------------------------------
| TANYA PAKET WISATA
|--------------------------------------------------------------------------
*/

document.querySelectorAll(".package-contact").forEach(function (button) {
    button.addEventListener("click", function () {
        const packageName = button.dataset.package || "Paket wisata";

        const message =
            "Halo Admin Nusa Religi, saya ingin bertanya tentang paket wisata berikut:\n\n" +
            packageName + "\n\n" +
            "Mohon informasi harga terbaru, fasilitas, jadwal, dan cara mengikuti perjalanan.";

        openWhatsApp(message);
    });
});

/*
|--------------------------------------------------------------------------
| TOMBOL HUBUNGI WHATSAPP
|--------------------------------------------------------------------------
*/

const contactWhatsapp = document.getElementById("contactWhatsapp");

if (contactWhatsapp) {
    contactWhatsapp.addEventListener("click", function (event) {
        const phone = ADMIN_WHATSAPP.replace(/\D/g, "");

        if (!phone || phone === "6281234567890") {
            event.preventDefault();

            alert(
                "Silakan ganti nomor WhatsApp admin pada file index.html dan script.js."
            );
        }
    });
}

/*
|--------------------------------------------------------------------------
| MENU MOBILE
|--------------------------------------------------------------------------
*/

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
        const isOpen = mainNav.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? "Tutup menu" : "Buka menu");
        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    mainNav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            mainNav.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Buka menu");
            menuToggle.textContent = "☰";
        });
    });

    document.addEventListener("click", function (event) {
        const clickedInsideMenu =
            mainNav.contains(event.target) ||
            menuToggle.contains(event.target);

        if (!clickedInsideMenu && mainNav.classList.contains("open")) {
            mainNav.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Buka menu");
            menuToggle.textContent = "☰";
        }
    });
}

/*
|--------------------------------------------------------------------------
| TAHUN FOOTER
|--------------------------------------------------------------------------
*/

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

/*
|--------------------------------------------------------------------------
| INISIALISASI
|--------------------------------------------------------------------------
*/

renderDestinations(destinations);
