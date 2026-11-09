
document.addEventListener("DOMContentLoaded", function () {

    // HAMBURGER MENU
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    menuToggle.addEventListener("click", function () {
        const open = navLinks.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", open);
        menuToggle.textContent = open ? "✕" : "☰";
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.textContent = "☰";
        });
    });

    // DYNAMIC ABOUT ME CONTENT
    const moreButton = document.getElementById("more-btn");
    const moreContent = document.getElementById("more-content");

    moreButton.addEventListener("click", function () {

        if (moreContent.hidden) {
            moreContent.textContent =
                "I am continuously improving my knowledge in technology. " +
                "I enjoy programming, designing websites, database management " +
                "and exploring innovative digital solutions.";

            moreContent.hidden = false;
            moreButton.textContent = "Show Less";

        } else {
            moreContent.hidden = true;
            moreButton.textContent = "Read More About Me";
        }
    });

    // CONTACT FORM VALIDATION
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const nameError = document.getElementById("name-error");
        const emailError = document.getElementById("email-error");
        const messageError = document.getElementById("message-error");
        const feedback = document.getElementById("form-feedback");

        let valid = true;

        // Check name
        if (name === "") {
            nameError.textContent = "Name is required.";
            valid = false;
        } else {
            nameError.textContent = "";
        }

        // Check email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {
            emailError.textContent = "Email is required.";
            valid = false;
        } else if (!emailPattern.test(email)) {
            emailError.textContent = "Enter a valid email address.";
            valid = false;
        } else {
            emailError.textContent = "";
        }

        // Check message
        if (message === "") {
            messageError.textContent = "Message is required.";
            valid = false;
        } else {
            messageError.textContent = "";
        }

        // Display validation result
        if (valid) {
            feedback.textContent =
                "All details are valid! Message delivery requires a connected server.";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "Please correct the errors.";
            feedback.style.color = "red";
        }
    });

    // AUTOMATIC COPYRIGHT YEAR
    document.getElementById("current-year").textContent =
        new Date().getFullYear();

});
