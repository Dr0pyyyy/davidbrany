<?php
defined('ABSPATH') or die('');

add_filter('show_admin_bar', '__return_false');

add_action('after_setup_theme', function() {
    register_nav_menu('header', esc_html__('Main navigation', 'davidbrany'));
});

function david_brany_theme_init() {
    wp_enqueue_style('main-styles', get_template_directory_uri() . '/dist/css/main.css');
    wp_enqueue_script('main-javascript', get_template_directory_uri() . './dist/js/main.js');
}
add_action('wp_enqueue_scripts', 'david_brany_theme_init');