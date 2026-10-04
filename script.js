/* =====================================================
   SETTINGS MENU
===================================================== */

function toggleSettings() {

    const menu = document.getElementById("settingsMenu");

    if (menu) {
        menu.classList.toggle("show");
    }

}


/* =====================================================
   CLOSE SETTINGS WHEN CLICKING OUTSIDE
===================================================== */

document.addEventListener("click", function(event) {

    const settingsContainer =
        document.querySelector(".settings-container");

    const menu =
        document.getElementById("settingsMenu");

    if (!settingsContainer || !menu) {
        return;
    }

    if (!settingsContainer.contains(event.target)) {
        menu.classList.remove("show");
    }

});


/* =====================================================
   CHANGE LANGUAGE
   OLD CODE
===================================================== */

function changeLanguage() {

    const currentPage = window.location.pathname;

    if (currentPage.includes("-en.html")) {

        window.location.href =
            currentPage.replace("-en.html", "-ar.html");

    } else {

        window.location.href =
            currentPage.replace("-ar.html", "-en.html");

    }

}


/* =====================================================
   DARK / LIGHT MODE
===================================================== */

function toggleTheme() {

    document.body.classList.toggle("dark-mode");

    const isDarkMode =
        document.body.classList.contains("dark-mode");

    localStorage.setItem(
        "theme",
        isDarkMode ? "dark" : "light"
    );

}


/* =====================================================
   LOAD SAVED THEME
===================================================== */

document.addEventListener("DOMContentLoaded", function() {

    const savedTheme =
        localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

    }

});


/* =====================================================
   ABOUT POPUP
===================================================== */

function showAbout() {

    const aboutOverlay =
        document.getElementById("aboutOverlay");

    if (aboutOverlay) {

        aboutOverlay.classList.add("show");

    }

}


/* =====================================================
   CLOSE ABOUT POPUP
===================================================== */

function closeAbout() {

    const aboutOverlay =
        document.getElementById("aboutOverlay");

    if (aboutOverlay) {

        aboutOverlay.classList.remove("show");

    }

}


/* =====================================================
   CLOSE ABOUT WHEN CLICKING OUTSIDE
===================================================== */

document.addEventListener("click", function(event) {

    const aboutOverlay =
        document.getElementById("aboutOverlay");

    if (!aboutOverlay) {
        return;
    }

    if (event.target === aboutOverlay) {

        aboutOverlay.classList.remove("show");

    }

});


/* =====================================================
   PLATFORM SECTIONS
   OLD CODE
===================================================== */

function showPlatformSection(sectionId, button) {

    // Hide all platform sections

    const sections =
        document.querySelectorAll(".platform-content");

    sections.forEach(function(section) {

        section.classList.remove("active");

    });


    // Remove active from all buttons

    const buttons =
        document.querySelectorAll(".platform-tab");

    buttons.forEach(function(btn) {

        btn.classList.remove("active");

    });


    // Show selected section

    const selectedSection =
        document.getElementById(sectionId);

    if (selectedSection) {

        selectedSection.classList.add("active");

    }


    // Make selected button active

    if (button) {

        button.classList.add("active");

    }

}


/* =====================================================
   ANIMATED PARTICLES
===================================================== */

document.addEventListener("DOMContentLoaded", function() {

    const particlesContainer =
        document.getElementById("particles");

    if (!particlesContainer) {
        return;
    }


    const numberOfParticles = 35;


    for (let i = 0; i < numberOfParticles; i++) {

        const particle =
            document.createElement("div");


        particle.classList.add("particle");


        /* Random Position */

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.top =
            Math.random() * 100 + "%";


        /* Random Size */

        const size =
            Math.random() * 5 + 3;

        particle.style.width =
            size + "px";

        particle.style.height =
            size + "px";


        /* Random Animation Speed */

        particle.style.animationDuration =
            (Math.random() * 8 + 6) + "s";


        /* Random Animation Delay */

        particle.style.animationDelay =
            (Math.random() * 5) + "s";


        particlesContainer.appendChild(particle);

    }

});
