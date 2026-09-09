/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

});


/* Close menu when clicking link */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

    });

});


/* =========================
   DARK MODE
========================= */

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeBtn.innerHTML = "☀️";

        localStorage.setItem("theme", "dark");

    } else {

        themeBtn.innerHTML = "🌙";

        localStorage.setItem("theme", "light");

    }

});


/* Load saved theme */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeBtn.innerHTML = "☀️";

}


/* =========================
   PRODUCT CART
========================= */

function addToCart(productName) {

    showToast(productName + " added to your routine!");

}


/* =========================
   TOAST
========================= */

function showToast(message) {

    const toast = document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}


/* =========================
   SKIN QUIZ
========================= */

const quizModal = document.getElementById("quizModal");

function startQuiz() {

    quizModal.classList.add("active");

}


function closeQuiz() {

    quizModal.classList.remove("active");

}


/* Close modal by clicking outside */

quizModal.addEventListener("click", (event) => {

    if (event.target === quizModal) {

        closeQuiz();

    }

});


/* Quiz result */

function showResult(type) {

    const result = document.getElementById("quizResult");

    let message = "";

    if (type === "Dry") {

        message =
            "💧 Your skin type is Dry. Focus on gentle cleansing, hydration and a rich moisturizer.";

    }

    else if (type === "Oily") {

        message =
            "✨ Your skin type is Oily. Look for lightweight, non-comedogenic and gel-based products.";

    }

    else if (type === "Combination") {

        message =
            "🌿 Your skin type is Combination. Balance hydration while managing oily areas.";

    }

    else {

        message =
            "🌸 Your skin type is Normal. Maintain a simple routine with cleanser, moisturizer and sunscreen.";

    }

    result.innerHTML = message;

}


/* =========================
   NEWSLETTER
========================= */

const newsletterForm =
    document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const email =
        document.getElementById("email").value;

    if (email.trim() !== "") {

        showToast("Thanks! You're now subscribed.");

        newsletterForm.reset();

    }

});


/* =========================
   SCROLL REVEAL
========================= */

const cards = document.querySelectorAll(
    ".product-card, .tip-card, .feature, .about-image"
);

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },

    {
        threshold: 0.15
    }

);


cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(25px)";

    card.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(card);

});


/* =========================
   CONSOLE MESSAGE
========================= */

console.log(
    "🌿 GlowCare website loaded successfully!"
);