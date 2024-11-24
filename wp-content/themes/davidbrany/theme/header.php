<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title(); ?></title>
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <header>
        <div class="header-top-section">
            <h1 class="header-title">DavidBrany.</h1>

            <!-- Hamburger icon -->
            <a href="#" id="hamburger-icon">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 18.5H20M4 12.5H20M4 6.5H20" stroke="#150C00" stroke-width="2.33333" stroke-linecap="round" />
                </svg>
            </a>
        </div>

        <nav id="header-expanded">
            <!-- Header top section -->
            <div class="header-top-section">
                <h1 class="header-title">DavidBrany.</h1>

                <!-- Close icon -->
                <a href="#" id="header-expanded-top-close-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18M18 18L6 6" stroke="#150C00" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </a>
            </div>

            <!-- Header main section -->
            <div class="header-expanded-content">

                <div class="header-expanded-left-side">
                    <h1 class="header-desktop-title">DavidBrany.</h1>

                    <?php
                    wp_nav_menu([
                        'theme_location' => 'header',
                        'container' => 'ul',
                        'menu_class' => 'header-expanded-pages'
                    ]);
                    ?>
                </div>

                <!-- Arrow splitter -->
                <div>
                    <svg class="header-expanded-menu-splitter" width="16" height="172" viewBox="0 0 16 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.29289 170.899C7.68342 171.29 8.31658 171.29 8.70711 170.899L15.0711 164.535C15.4616 164.145 15.4616 163.511 15.0711 163.121C14.6805 162.73 14.0474 162.73 13.6569 163.121L8 168.778L2.34315 163.121C1.95262 162.73 1.31946 162.73 0.928932 163.121C0.538408 163.511 0.538408 164.145 0.928932 164.535L7.29289 170.899ZM7 0.191895L7 170.192H9L9 0.191895L7 0.191895Z" fill="black" />
                    </svg>
                </div>

                <!-- Mobile menu bottom section -->
                <div class="header-expanded-bottom">
                    <a href="#" class="theme-btn">
                        <!-- Sun icon for light theme -->
                        <svg class="theme-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: none">
                            <path d="M12 5.51351V2.39999M12 21.6V18.4865M19.5 12H22.5M1.5 12L4.5 12M16.587 7.41357L18.7885 5.21199M5.21128 18.7882L7.41286 16.5866M16.587 16.5864L18.7885 18.788M5.21128 5.21175L7.41286 7.41334M15.5688 11.8734C15.5688 13.8617 13.957 15.4734 11.9688 15.4734C9.98055 15.4734 8.36877 13.8617 8.36877 11.8734C8.36877 9.88521 9.98055 8.27343 11.9688 8.27343C13.957 8.27343 15.5688 9.88521 15.5688 11.8734Z" stroke="#150C00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <!-- Moon icon for dark theme -->
                        <svg class="theme-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.5999 14.6396C20.6977 14.9133 19.7404 15.0604 18.7487 15.0604C13.3307 15.0604 8.93856 10.6683 8.93856 5.25025C8.93856 4.25904 9.08557 3.30216 9.35897 2.40022C5.33153 3.62161 2.40002 7.36327 2.40002 11.7896C2.40002 17.2076 6.79218 21.5998 12.2102 21.5998C16.637 21.5998 20.3789 18.6677 21.5999 14.6396Z" stroke="#150C00" stroke-width="2" stroke-linejoin="round" />
                        </svg>
                    </a>

                    <a class="contact-me-btn" href="<?php echo esc_url(get_permalink(14)) ?>" class="contact-link">
                        Contact me
                        <svg class="contact-me-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3333 5L20 12M20 12L13.3333 19M20 12L4 12" />
                        </svg>
                    </a>
                </div>
            </div>
        </nav>
    </header>