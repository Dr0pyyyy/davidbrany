document.addEventListener('DOMContentLoaded', function () {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeBtn = document.querySelector('.mobile-menu-header .close-icon');
    const themeToggleButton = document.querySelectorAll('.theme-toggle-button');
    const body = document.body;

    // Toggle mobile menu on hamburger icon click
    hamburgerIcon.addEventListener('click', function (event) {
        event.preventDefault();
        mobileMenu.classList.toggle('active');
    });

    // Close mobile menu on close icon click
    closeBtn.addEventListener('click', function (event) {
        event.preventDefault();
        mobileMenu.classList.remove('active');
    });

    // Load the saved theme from localStorage if available
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        updateThemeButtonText(savedTheme);
        updateThemeButtonIcon(savedTheme === 'dark-theme');
    }

    // Toggle theme on each button click
    themeToggleButton.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            body.classList.toggle('dark-theme');
            const isDarkTheme = body.classList.contains('dark-theme');

            // Save the current theme to localStorage
            localStorage.setItem('theme', isDarkTheme ? 'dark-theme' : '');

            // Update the button text for all theme toggle buttons
            updateThemeButtonText(isDarkTheme ? 'dark-theme' : '');

            // Update the button icon for all theme toggle buttons
            updateThemeButtonIcon(isDarkTheme);
        });
    });

    function updateThemeButtonIcon(isDarkTheme) {
        const sunIcons = document.querySelectorAll('.sun-icon');
        const moonIcons = document.querySelectorAll('.moon-icon');
    
        sunIcons.forEach(icon => {
            icon.style.display = isDarkTheme ? 'inline' : 'none';
        });
    
        moonIcons.forEach(icon => {
            icon.style.display = isDarkTheme ? 'none' : 'inline';
        });
    }

    function updateThemeButtonText(theme) {    
        if (theme === 'dark-theme') {
            document.documentElement.style.setProperty('--base-color', '#3C3B28');
            document.documentElement.style.setProperty('--text-color', '#EAE6DA');
            document.documentElement.style.setProperty('--green-color', '#4A5742');
        } else {
            document.documentElement.style.setProperty('--base-color', '#FEFAE0');
            document.documentElement.style.setProperty('--text-color', '#150C00');
            document.documentElement.style.setProperty('--green-color', '#D8E5B6');
        }
    
        // Update SVG color for splitter and close icon
        document.querySelectorAll('.mobile-menu-splitter, .close-icon').forEach(icon => {
            icon.style.fill = getComputedStyle(document.documentElement).getPropertyValue('--text-color');
        });
    }    
    
});
