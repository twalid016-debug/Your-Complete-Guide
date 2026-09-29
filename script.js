/* =========================
   Settings Menu
========================= */

function toggleSettings() {

    const menu = document.getElementById("settingsMenu");

    if (menu) {
        menu.classList.toggle("show");
    }

}


/* =========================
   Close Settings When Clicking Outside
========================= */

document.addEventListener("click", function (event) {

    const settingsContainer = document.querySelector(".settings-container");
    const menu = document.getElementById("settingsMenu");

    if (!settingsContainer || !menu) {
        return;
    }

    if (!settingsContainer.contains(event.target)) {
        menu.classList.remove("show");
    }

});


/* =========================
   Change Language
========================= */

function changeLanguage() {

    const currentPage = window.location.pathname;

    if (currentPage.includes("-en.html")) {

        window.location.href = currentPage.replace(
            "-en.html",
            "-ar.html"
        );

    }

    else if (currentPage.includes("-ar.html")) {

        window.location.href = currentPage.replace(
            "-ar.html",
            "-en.html"
        );

    }

}


/* =========================
   Dark / Light Mode
========================= */

function toggleTheme() {

    document.body.classList.toggle("dark-mode");

    const isDarkMode =
        document.body.classList.contains("dark-mode");

    localStorage.setItem(
        "theme",
        isDarkMode ? "dark" : "light"
    );

}


/* =========================
   Load Saved Theme
========================= */

document.addEventListener("DOMContentLoaded", function () {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }

});


/* =========================
   About Popup
========================= */

function showAbout() {

    const aboutOverlay =
        document.getElementById("aboutOverlay");

    if (aboutOverlay) {
        aboutOverlay.classList.add("show");
    }

}


/* =========================
   Close About Popup
========================= */

function closeAbout() {

    const aboutOverlay =
        document.getElementById("aboutOverlay");

    if (aboutOverlay) {
        aboutOverlay.classList.remove("show");
    }

}


/* =========================
   Close About When Clicking Outside
========================= */

document.addEventListener("click", function (event) {

    const aboutOverlay =
        document.getElementById("aboutOverlay");

    if (!aboutOverlay) {
        return;
    }

    if (event.target === aboutOverlay) {
        aboutOverlay.classList.remove("show");
    }

});


/* =========================
   Platform Tabs
========================= */

document.addEventListener("DOMContentLoaded", function () {

    const buttons =
        document.querySelectorAll(".platform-tab");

    const sections =
        document.querySelectorAll(".platform-content");


    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            const target =
                button.getAttribute("data-target");


            /* Remove active from all buttons */

            buttons.forEach(function (btn) {

                btn.classList.remove("active");

            });


            /* Hide all sections */

            sections.forEach(function (section) {

                section.classList.remove("active");

            });


            /* Activate clicked button */

            button.classList.add("active");


            /* Show matching section */

            sections.forEach(function (section) {

                if (
                    section.getAttribute("data-section")
                    === target
                ) {

                    section.classList.add("active");

                }

            });

        });

    });

});
