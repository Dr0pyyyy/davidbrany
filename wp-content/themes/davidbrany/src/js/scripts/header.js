//Open close menu
document.addEventListener("DOMContentLoaded", function () {
    const hamburgerIcon = document.getElementById("hamburger-icon");
    const headerExpanded = document.getElementById("header-expanded");
    const closeIcon = document.getElementById("header-expanded-top-close-icon");

    // Open the menu
    hamburgerIcon.addEventListener("click", function (event) {
        event.preventDefault();
        headerExpanded.classList.add("active");
    });

    // Close the menu
    closeIcon.addEventListener("click", function (event) {
        event.preventDefault();
        headerExpanded.classList.remove("active");
    });
});
