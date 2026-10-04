
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


/* =========================
   Change Language
========================= */

function changeLanguage() {

    const currentPage = window.location.pathname;

    if (currentPage.includes("-en.html")) {

        window.location.href =
            currentPage.replace("-en.html", "-ar.html");

    }

    else if (currentPage.includes("-ar.html")) {

        window.location.href =
            currentPage.replace("-ar.html", "-en.html");

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

    const savedTheme =
        localStorage.getItem("theme");

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


            buttons.forEach(function (btn) {
                btn.classList.remove("active");
            });


            sections.forEach(function (section) {
                section.classList.remove("active");
            });


            button.classList.add("active");


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


/* =========================
   Animated Particles
========================= */

document.addEventListener("DOMContentLoaded", function () {

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


        /* Random position */

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.top =
            Math.random() * 100 + "%";


        /* Random size */

        const size =
            Math.random() * 5 + 3;

        particle.style.width =
            size + "px";

        particle.style.height =
            size + "px";


        /* Random animation */

        particle.style.animationDuration =
            (Math.random() * 8 + 6) + "s";

        particle.style.animationDelay =
            (Math.random() * 5) + "s";


        particlesContainer.appendChild(particle);

    }

});

function calculateSavings() {
    const count = parseFloat(document.getElementById('lessonsInput').value);
    const period = document.getElementById('periodSelect').value;
    const resultDiv = document.getElementById('calcResult');
    
    if (count && count > 0) {
        let totalHours = 0;
        let periodText = "";
        let breakdownText = "";

        if (period === "week") {
            totalHours = count * 2;
            periodText = "أسبوعياً";
            breakdownText = `• التوفير الأسبوعي: ${count} معاملة × 2 ساعة = <strong>${totalHours} ساعات أسبوعياً</strong>.`;
        } else if (period === "month") {
            totalHours = count * 2 * 4;
            periodText = "شهرياً";
            breakdownText = `• التوفير الشهري: ${count} معاملة أسبوعياً × 2 ساعة × 4 أسابيع = <strong>${totalHours} ساعة شهرياً</strong>.`;
        } else if (period === "year") {
            totalHours = count * 2 * 52;
            periodText = "سنوياً";
            breakdownText = `• التوفير السنوي: ${count} معاملة أسبوعياً × 2 ساعة × 52 أسبوعاً = <strong>${totalHours} ساعة سنوياً</strong>.`;
        }

        resultDiv.style.display = "block";
        resultDiv.style.backgroundColor = "#f0fdf4";
        resultDiv.style.border = "1px solid #bbf7d0";
        resultDiv.style.color = "#166534";
        
        resultDiv.innerHTML = `
            <div style="font-size: 18px; margin-bottom: 10px;">
                🎉 إجمالي الوقت الموفر: <strong>${totalHours} ساعة ${periodText}!</strong>
            </div>
            <div style="font-size: 13px; color: #4b5563; border-top: 1px dashed #cbd5e1; padding-top: 10px; line-height: 1.6; text-align: right;">
                <strong>طريقة الحساب:</strong><br>
                • الوقت التقديري للخدمة الميدانية (تنقل + انتظار): <strong>2 ساعة</strong> لكل معاملة.<br>
                ${breakdownText}
            </div>
        `;
    } else {
        resultDiv.style.display = "block";
        resultDiv.style.backgroundColor = "#fef2f2";
        resultDiv.style.border = "1px solid #fecaca";
        resultDiv.style.color = "#991b1b";
        resultDiv.innerHTML = "يرجى إدخال عدد صحيح أكبر من صفر.";
    }
}


function calculateSavingsEn() {
    const count = parseFloat(document.getElementById('lessonsInputEn').value);
    const period = document.getElementById('periodSelectEn').value;
    const resultDiv = document.getElementById('calcResultEn');
    
    if (count && count > 0) {
        let totalHours = 0;
        let periodText = "";
        let breakdownText = "";

        if (period === "week") {
            totalHours = count * 2;
            periodText = "weekly";
            breakdownText = `• Weekly Savings: ${count} transactions × 2 hours = <strong>${totalHours} hours/week</strong>.`;
        } else if (period === "month") {
            totalHours = count * 2 * 4;
            periodText = "monthly";
            breakdownText = `• Monthly Savings: ${count} transactions/week × 2 hours × 4 weeks = <strong>${totalHours} hours/month</strong>.`;
        } else if (period === "year") {
            totalHours = count * 2 * 52;
            periodText = "yearly";
            breakdownText = `• Yearly Savings: ${count} transactions/week × 2 hours × 52 weeks = <strong>${totalHours} hours/year</strong>.`;
        }

        resultDiv.style.display = "block";
        resultDiv.style.backgroundColor = "#f0fdf4";
        resultDiv.style.border = "1px solid #bbf7d0";
        resultDiv.style.color = "#166534";
        
        resultDiv.innerHTML = `
            <div style="font-size: 18px; margin-bottom: 10px;">
                🎉 Total Saved Time: <strong>${totalHours} hours ${periodText}!</strong>
            </div>
            <div style="font-size: 13px; color: #4b5563; border-top: 1px dashed #cbd5e1; padding-top: 10px; line-height: 1.6; text-align: left;">
                <strong>Calculation Method:</strong><br>
                • Estimated time per physical visit (travel + waiting): <strong>2 hours</strong>.<br>
                ${breakdownText}
            </div>
        `;
    } else {
        resultDiv.style.display = "block";
        resultDiv.style.backgroundColor = "#fef2f2";
        resultDiv.style.border = "1px solid #fecaca";
        resultDiv.style.color = "#991b1b";
        resultDiv.innerHTML = "Please enter a valid number greater than zero.";
    }
}
