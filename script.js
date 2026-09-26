function changeLanguage() {

    const currentPage = window.location.pathname;

    if (currentPage.includes("-en.html")) {

        window.location.href = currentPage.replace("-en.html", "-ar.html");

    } else {

        window.location.href = currentPage.replace("-ar.html", "-en.html");

    }

}
function showPlatformSection(sectionId, button) {

    const sections = document.querySelectorAll(".platform-content");

    sections.forEach(function(section) {
        section.classList.remove("active");
    });


    const buttons = document.querySelectorAll(".platform-tab");

    buttons.forEach(function(btn) {
        btn.classList.remove("active");
    });


    const selectedSection = document.getElementById(sectionId);

    selectedSection.classList.add("active");


    button.classList.add("active");
}
