/* =========================
   Change Language
========================= */

function changeLanguage() {

    let page = window.location.pathname;

    if (page.includes("-en.html")) {

        window.location.href = page.replace("-en.html", "-ar.html");

    } else if (page.includes("-ar.html")) {

        window.location.href = page.replace("-ar.html", "-en.html");

    }

}


/* =========================
   Platform Tabs
========================= */

const buttons = document.querySelectorAll(".platform-tab");
const sections = document.querySelectorAll(".platform-content");


buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        /* Get the section name */
        const target = button.getAttribute("data-target");


        /* Remove active from all buttons */
        buttons.forEach(function(btn) {
            btn.classList.remove("active");
        });


        /* Hide all sections */
        sections.forEach(function(section) {
            section.classList.remove("active");
        });


        /* Activate clicked button */
        button.classList.add("active");


        /* Find the matching section */
        const selectedSection =
            document.querySelector(
                '.platform-content[data-section="' + target + '"]'
            );


        /* Show the matching section */
        if (selectedSection) {
            selectedSection.classList.add("active");
        }

    });

});
