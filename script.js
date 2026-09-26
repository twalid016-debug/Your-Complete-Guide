function changeLanguage() {

    const currentPage = window.location.pathname;

    if (currentPage.includes("-en.html")) {

        window.location.href = currentPage.replace("-en.html", "-ar.html");

    } else {

        window.location.href = currentPage.replace("-ar.html", "-en.html");

    }

}


/* =========================
   Platform Tabs
========================= */

function showPlatformSection() {

    const buttons = document.querySelectorAll(".platform-tab");
    const sections = document.querySelectorAll(".platform-content");


    buttons.forEach(function(button) {

        button.addEventListener("click", function() {

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


            /* Show selected section */

            const selectedSection =
                document.querySelector(
                    '.platform-content[data-section="' + target + '"]'
                );


            if (selectedSection) {

                selectedSection.classList.add("active");

            }

        });

    });

}


/* Start the platform tabs */

showPlatformSection();
