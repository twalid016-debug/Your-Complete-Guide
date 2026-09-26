function changeLanguage() {

    const currentPage = window.location.pathname;

    if (currentPage.includes("-en.html")) {

        window.location.href = currentPage.replace("-en.html", "-ar.html");

    } else {

        window.location.href = currentPage.replace("-ar.html", "-en.html");

    }

}