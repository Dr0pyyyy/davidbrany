document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.querySelector(".theme-btn");
    const body = document.body;
    const themeIcons = themeToggleButton.querySelectorAll(".theme-icon");

    const savedTheme = localStorage.getItem("theme") || "light";
    body.setAttribute("data-theme", savedTheme);

    // Toggle theme icons based on the saved theme
    toggleThemeIcons(savedTheme);

    themeToggleButton.addEventListener("click", () => {
        const currentTheme = body.getAttribute("data-theme");

        const newTheme = currentTheme === "light" ? "dark" : "light";
        body.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);

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
});
