
/* =========================
   Change Language
========================= */

function changeLanguage() {

    let currentPage = window.location.href;

    if (currentPage.includes("-en.html")) {

        window.location.href = currentPage.replace("-en.html", "-ar.html");

    } else if (currentPage.includes("-ar.html")) {

        window.location.href = currentPage.replace("-ar.html", "-en.html");

    }

}


/* =========================
   Platform Tabs
========================= */

function showPlatformSection(sectionId, button) {

    const sections = document.querySelectorAll(".platform-content");
    const buttons = document.querySelectorAll(".platform-tab");


    /* Hide all sections */

    sections.forEach(function(section) {

        section.classList.remove("active");

    });


    /* Remove active from all buttons */

    buttons.forEach(function(btn) {

        btn.classList.remove("active");

    });


    /* Show selected section */

    const selectedSection =
        document.querySelector(
            '.platform-content[data-section="' + sectionId + '"]'
        );


    if (selectedSection) {

        selectedSection.classList.add("active");

    }


    /* Activate selected button */

    if (button) {

        button.classList.add("active");

    }

}


/* =========================
   Start Platform Tabs
========================= */

document.addEventListener("DOMContentLoaded", function() {

    const buttons = document.querySelectorAll(".platform-tab");


    buttons.forEach(function(button) {

        button.addEventListener("click", function() {

            const target = button.getAttribute("data-target");

            showPlatformSection(target, button);

        });

    });

});
