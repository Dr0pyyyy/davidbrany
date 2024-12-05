document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.querySelector(".theme-btn");
    const body = document.body;
    const themeIcons = themeToggleButton.querySelectorAll(".theme-icon");

    const savedTheme = localStorage.getItem("theme") || "light";
    body.setAttribute("data-theme", savedTheme);

    // Set the correct image based on the saved theme
    updateProfilePicture(savedTheme);

    // Toggle theme icons based on the saved theme
    toggleThemeIcons(savedTheme);

    themeToggleButton.addEventListener("click", () => {
        const currentTheme = body.getAttribute("data-theme");

        const newTheme = currentTheme === "light" ? "dark" : "light";
        body.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);

        // Update the profile picture based on the new theme
        updateProfilePicture(newTheme);

        // Toggle the theme icons on button click
        toggleThemeIcons(newTheme);
    });

    function toggleThemeIcons(theme) {
        if (theme === "light") {
            themeIcons[0].style.display = "block"; // Sun icon
            themeIcons[1].style.display = "none";  // Moon icon
        } else {
            themeIcons[0].style.display = "none";  // Sun icon
            themeIcons[1].style.display = "block"; // Moon icon
        }
    }

    // Update the profile picture based on the theme
    function updateProfilePicture(theme) {
        const profilePictures = document.querySelectorAll('.profile-picture');
        profilePictures.forEach(img => {
            if (theme === "light") {
                if (img.classList.contains('mobile-profile-picture')) {
                    img.src = "http://localhost:8080/davidbrany/wp-content/uploads/2024/12/profile-picture.png"; // Light theme image
                }
                if (img.classList.contains('desktop-profile-picture')) {
                    img.src = "http://localhost:8080/davidbrany/wp-content/uploads/2024/12/profile-picture.png"; // Light theme image
                }
            } else {
                if (img.classList.contains('mobile-profile-picture')) {
                    img.src = "http://localhost:8080/davidbrany/wp-content/uploads/2024/12/profile-picture-dark.png"; // Dark theme image
                }
                if (img.classList.contains('desktop-profile-picture')) {
                    img.src = "http://localhost:8080/davidbrany/wp-content/uploads/2024/12/profile-picture-dark.png"; // Dark theme image
                }
            }
        });
    }
});
