<?php

// Hide the admin bar on the front end
add_filter('show_admin_bar', '__return_false');

// Enqueue styles and scripts for the theme
function david_brany_theme_enqueue_styles() {
    // Main style
    wp_enqueue_style('david-brany-main-style', get_stylesheet_uri());

    // Header - related files
    wp_enqueue_style('david-brany-header-style', get_template_directory_uri() . '/header/header.css');
    wp_enqueue_script('david-brany-header-script', get_template_directory_uri() . '/header/header.js', array(), null, true);

    // About me - related files
    wp_enqueue_style('david-brany-about-me-style', get_template_directory_uri() . '/about-me/about-me.css');
    wp_enqueue_script('david-brany-about-me-script', get_template_directory_uri() . '/about-me/about-me.js', array(), null, true);

    // Contact me - related files
    wp_enqueue_style('david-brany-contact-style', get_template_directory_uri() . '/contact-me/contact-me.css');
    wp_enqueue_script('david-brany-contact-me-script', get_template_directory_uri() . '/contact-me/contact-me.js', array(), null, true);
}
add_action('wp_enqueue_scripts', 'david_brany_theme_enqueue_styles');
