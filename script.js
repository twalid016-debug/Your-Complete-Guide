// يفعّل تأثيرات الظهور فقط عند تحميل هذا الملف بنجاح
document.documentElement.classList.add("js");

function toggleSettings() {
 
    const menu = document.getElementById("settingsMenu");
 
    if (menu) {
        menu.classList.toggle("show");
    }
 
}
 
 
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
 
 
function changeLanguage() {
    let page = location.pathname.split('/').pop() || 'index.html';
 
    if (page === 'index.html') {
        page = 'index-en.html';
    } else if (page === 'index-en.html') {
        page = 'index.html';
    } else if (page.includes('-ar')) {
        page = page.replace('-ar', '-en');
    } else if (page.includes('-en')) {
        page = page.replace('-en', '-ar');
    }
 
    location.href = page;
}
 
 
function toggleTheme() {
 
    document.body.classList.toggle("dark-mode");
 
    const isDarkMode =
        document.body.classList.contains("dark-mode");
 
    localStorage.setItem(
        "theme",
        isDarkMode ? "dark" : "light"
    );
 
}
 
 
document.addEventListener("DOMContentLoaded", function () {
 
    const savedTheme =
        localStorage.getItem("theme");
 
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
 
});
 
 
function showAbout() {
 
    const aboutOverlay =
        document.getElementById("aboutOverlay");
 
    if (aboutOverlay) {
        aboutOverlay.classList.add("show");
    }
 
}
 
 
function closeAbout() {
 
    const aboutOverlay =
        document.getElementById("aboutOverlay");
 
    if (aboutOverlay) {
        aboutOverlay.classList.remove("show");
    }
 
}
 
 
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
 
 
        particle.style.left =
            Math.random() * 100 + "%";
 
        particle.style.top =
            Math.random() * 100 + "%";
 
 
        const size =
            Math.random() * 5 + 3;
 
        particle.style.width =
            size + "px";
 
        particle.style.height =
            size + "px";
 
 
        particle.style.animationDuration =
            (Math.random() * 8 + 6) + "s";
 
        particle.style.animationDelay =
            (Math.random() * 5) + "s";
 
 
        particlesContainer.appendChild(particle);
 
    }
 
});
 
 
document.addEventListener("DOMContentLoaded", function () {
 
    document.querySelectorAll(".counter").forEach(function (el) {
 
        const target = Number(el.dataset.target);
 
        const step = Math.max(1, Math.ceil(target / 50));
 
        let n = 0;
 
        const timer = setInterval(function () {
 
            n += step;
 
            if (n >= target) {
                n = target;
                clearInterval(timer);
            }
 
            el.textContent = n;
 
        }, 30);
 
    });
 
 
    const revealItems = document.querySelectorAll(".reveal");
 
    if (revealItems.length) {
 
        const observer = new IntersectionObserver(function (entries) {
 
            entries.forEach(function (entry) {
 
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
 
            });
 
        }, { threshold: 0.15 });
 
        revealItems.forEach(function (item) {
            observer.observe(item);
        });
 
    }
 
 
    document.querySelectorAll(".acc-btn").forEach(function (btn) {
 
        btn.addEventListener("click", function () {
 
            const isOpen = btn.parentElement.classList.toggle("open");
 
            btn.setAttribute("aria-expanded", isOpen);
 
        });
 
    });
 
 
    const pwInput = document.getElementById("pwInput");
 
    if (pwInput) {
 
        const pwFill = document.getElementById("pwFill");
 
        const pwText = document.getElementById("pwText");
 
        const isEn = document.documentElement.lang === "en";
 
        const labels = isEn
            ? ["Very weak", "Weak", "Medium", "Strong", "Very strong"]
            : ["ضعيفة جداً", "ضعيفة", "متوسطة", "قوية", "قوية جداً"];
 
        const colors = ["#ef4444", "#f97316", "#eab308", "#22c55e", "#15803d"];
 
        pwInput.addEventListener("input", function () {
 
            const v = pwInput.value;
 
            if (!v) {
                pwFill.style.width = "0";
                pwText.textContent = isEn ? "Type something to start" : "اكتب شيئاً لتبدأ";
                return;
            }
 
            // الطول: من 0 إلى 3 نقاط
            const lengthPts =
                (v.length >= 8 ? 1 : 0) +
                (v.length >= 12 ? 1 : 0) +
                (v.length >= 16 ? 1 : 0);

            // التنوع: عدد أنواع الأحرف (صغيرة، كبيرة، أرقام، رموز) من 0 إلى 3 نقاط
            const classes =
                (/[a-z]/.test(v) ? 1 : 0) +
                (/[A-Z]/.test(v) ? 1 : 0) +
                (/\d/.test(v) ? 1 : 0) +
                (/[^A-Za-z0-9]/.test(v) ? 1 : 0);

            const varietyPts = Math.min(3, Math.max(0, classes - 1));

            const total = lengthPts + varietyPts; // من 0 إلى 6

            let i;
            if (total <= 1) i = 0;
            else if (total === 2) i = 1;
            else if (total === 3) i = 2;
            else if (total <= 5) i = 3;
            else i = 4;

            // كلمة المرور أقصر من 8 أحرف لا تتعدى "ضعيفة" مهما كان تنوعها
            if (v.length < 8) i = Math.min(i, 1);

            pwFill.style.width = (i + 1) * 20 + "%";
            pwFill.style.backgroundColor = colors[i];
            pwText.textContent = labels[i];
 
        });
 
    }
 
});
 
 
// يقرأ الفترة المختارة (أسبوع / شهر / سنة) من القائمة المنسدلة أو من خيارات الراديو
function detectPeriod(input) {

    const scopes = [
        input.closest(".calc-card"),
        input.closest(".calc-container"),
        input.closest(".calc-section"),
        document
    ];

    let text = "";

    for (let i = 0; i < scopes.length && !text; i++) {

        const scope = scopes[i];

        if (!scope) {
            continue;
        }

        const select = scope.querySelector("select");

        if (select && select.selectedIndex >= 0) {
            text = select.value + " " + select.options[select.selectedIndex].text;
            break;
        }

        const radio = scope.querySelector("input[type='radio']:checked");

        if (radio) {
            const label = radio.id
                ? scope.querySelector("label[for='" + radio.id + "']")
                : null;
            text = radio.value + " " + (label ? label.textContent : "");
            break;
        }
    }

    text = text.toLowerCase();

    if (/week|أسبوع|اسبوع/.test(text)) return "week";
    if (/month|شهر/.test(text)) return "month";
    if (/year|سنة|سنه|سنو|عام/.test(text)) return "year";

    return null;
}

const CALC_TEXT = {
    ar: {
        intro: "بفضل استخدامك للخدمات الرقمية، توفر حوالي",
        hours: "ساعة",
        label: { week: "في الأسبوع", month: "في الشهر", year: "في السنة" },
        methodTitle: "طريقة الحساب:",
        method: {
            week: "ساعات الأسبوع = عدد الخدمات × 2",
            month: "ساعات الشهر = عدد الخدمات × 2 × 4",
            year: "ساعات السنة = عدد الخدمات × 2 × 52"
        },
        note: "(عدد الخدمات في الأسبوع)",
        error: "يرجى إدخال عدد صحيح أكبر من صفر."
    },
    en: {
        intro: "Thanks to digital services, you save approximately",
        hours: "hours",
        label: { week: "per week", month: "per month", year: "per year" },
        methodTitle: "How it is calculated:",
        method: {
            week: "Weekly hours = number of services × 2",
            month: "Monthly hours = number of services × 2 × 4",
            year: "Yearly hours = number of services × 2 × 52"
        },
        note: "(number of services per week)",
        error: "Please enter a valid number greater than zero."
    }
};

function runCalculator(inputId, resultId, lang) {

    const input = document.getElementById(inputId);
    const resultDiv = document.getElementById(resultId);

    if (!input || !resultDiv) {
        return;
    }

    const t = CALC_TEXT[lang];
    const value = Number(input.value);

    resultDiv.style.display = "block";

    if (!(value > 0)) {
        resultDiv.style.color = "#d32f2f";
        resultDiv.innerHTML = t.error;
        return;
    }

    const perWeek = value * 2;

    const hours = { week: perWeek, month: perWeek * 4, year: perWeek * 52 };

    // لو مفيش قائمة اختيار، يعرض الثلاثة كما كان
    const chosen = detectPeriod(input);
    const periods = chosen ? [chosen] : ["week", "month", "year"];

    const lines = periods.map(function (p) {
        return "<strong>" + hours[p] + " " + t.hours + "</strong> " + t.label[p];
    });

    const methodLines = periods.map(function (p) {
        return t.method[p];
    });

    resultDiv.style.color = "#2e7d32";

    resultDiv.innerHTML =
        t.intro + (chosen ? " " : ":<br>") + lines.join("<br>") + (chosen ? "!" : "") +
        '<br><div class="calc-method" style="display:block;margin-top:20px;padding-top:14px;border-top:1px dashed #cbd5e1;font-size:14px;font-weight:normal;line-height:1.8;">' +
        "<b>" + t.methodTitle + "</b><br>" +
        methodLines.join("<br>") + "<br>" +
        "<small>" + t.note + "</small>" +
        "</div>";
}

function calculateSavings() {
    runCalculator("lessonsInput", "calcResult", "ar");
}

function calculateSavingsEn() {
    runCalculator("lessonsInputEn", "calcResultEn", "en");
}

document.addEventListener("DOMContentLoaded", function () {

    const page = location.pathname.split("/").pop() || "index.html";

    if (page === "index.html" || page === "index-en.html") {
        return;
    }

    const isEn = document.documentElement.lang === "en";

    const backButton = document.createElement("button");

    backButton.className = "back-arrow";

    backButton.setAttribute("aria-label", isEn ? "Back" : "رجوع");

    backButton.textContent = isEn ? "←" : "→";

    backButton.addEventListener("click", function () {

        if (history.length > 1) {
            history.back();
        } else {
            location.href = isEn ? "index-en.html" : "index.html";
        }

    });

    document.body.appendChild(backButton);

});
