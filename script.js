function changeLanguage() {

    const currentPage = window.location.pathname;

    if (currentPage.includes("-en.html")) {

        window.location.href = currentPage.replace("-en.html", "-ar.html");

    } else {

        window.location.href = currentPage.replace("-ar.html", "-en.html");

    }

}


function showPlatformSection(sectionId, button) {

    // Hide all platform sections
    const sections = document.querySelectorAll(".platform-content");

    sections.forEach(function(section) {
        section.classList.remove("active");
    });


    // Remove active from all buttons
    const buttons = document.querySelectorAll(".platform-tab");

    buttons.forEach(function(btn) {
        btn.classList.remove("active");
    });


    // Show selected section
    const selectedSection = document.getElementById(sectionId);

    selectedSection.classList.add("active");


    // Make selected button active
    button.classList.add("active");

}
