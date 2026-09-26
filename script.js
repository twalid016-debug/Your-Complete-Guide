function changeLanguage() {

    const currentPage = window.location.pathname;

    if (currentPage.includes("-en.html")) {
        window.location.href = currentPage.replace("-en.html", "-ar.html");
    }

    else if (currentPage.includes("-ar.html")) {
        window.location.href = currentPage.replace("-ar.html", "-en.html");
    }

}


/* =========================
   Platform Tabs
========================= */

document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".platform-tab");
    const sections = document.querySelectorAll(".platform-content");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            const target = button.getAttribute("data-target");

            buttons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            sections.forEach(function (section) {
                section.classList.remove("active");
            });

            button.classList.add("active");

            sections.forEach(function (section) {

                if (section.getAttribute("data-section") === target) {
                    section.classList.add("active");
                }

            });

        });

    });

});
