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
        <h1 class="header-title">DavidBrany.</h1>

        <!-- Hamburger icon -->
        <a href="#" class="center-icon" id="hamburger-icon">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 18.5H20M4 12.5H20M4 6.5H20" class="svg-icon svg-icon-color"/>
            </svg>
        </a>
        
        <!-- Desktop menu -->
        <nav class="desktop-menu"> 

            <!-- Left side -->
            <ul class="header-left-side-menu">
                <?php
                $about_me_page = get_page_by_path('about-me');
                $my_work_page = get_page_by_path('my-work');
                $case_studies_page = get_page_by_path('case-studies');
                $contact_me = get_page_by_path('contact-me');
                ?>

                <li>
                    <a href="<?php echo $about_me_page ? esc_url(get_permalink($about_me_page->ID)) : '#'; ?>" class="header-menu-primary-button">
                        About me
                    </a>
                </li>
                <li>
                    <a href="<?php echo $my_work_page ? esc_url(get_permalink($my_work_page->ID)) : '#'; ?>" class="header-menu-primary-button">
                        My work
                    </a>
                </li>
                <li>
                    <a href="<?php echo $case_studies_page ? esc_url(get_permalink($case_studies_page->ID)) : '#'; ?>" class="header-menu-primary-button">
                        Case studies
                    </a>
                </li>
            </ul>

            <!-- Right side -->
            <ul>
                <li class="pe-2">
                    <a href="<?php echo $contact_me ? esc_url(get_permalink($contact_me->ID)) : '#'; ?>" class="header-menu-secondary-button contact-me-button">
                        Contact me
                    </a>
                </li>
                <li>
                    <a href="#" class="header-menu-secondary-button theme-toggle-button">

                        <!-- Sun icon for light theme -->
                        <svg class="sun-icon svg-icon svg-icon-color" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: none;">
                            <path d="M12 2V6M12 18V22M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M2 12H6M18 12H22M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22M12 8C9.8 8 8 9.8 8 12C8 14.2 9.8 16 12 16C14.2 16 16 14.2 16 12C16 9.8 14.2 8 12 8Z" />
                        </svg>

                        <!-- Moon icon for dark theme -->
                        <svg class="moon-icon svg-icon svg-icon-color" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 12.79C20.67 12.83 20.34 12.85 20 12.85C15.14 12.85 11.15 8.86 11.15 4C11.15 3.66 11.17 3.33 11.21 3C7.62 3.5 4.85 6.57 4.85 10.5C4.85 15.08 8.42 18.65 13 18.65C16.93 18.65 20 15.88 20.5 12.29" />
                        </svg>
                    </a>
                </li>
            </ul>
        </nav>
    </header>

    <!-- Mobile menu -->
    <nav id="mobile-menu">
        <div class="mobile-menu-header">
            <h1 class="header-title">DavidBrany</h1>
            
            <!-- Close icon -->
            <a href="#" class="center-icon">
                <svg class="svg-icon svg-icon-color close-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M18 18L6 6" />
                </svg>
            </a>
        </div>

        <!-- Mobile menu main section -->
            <ul>
                <?php
                $about_me_page = get_page_by_path('about-me');
                $my_work_page = get_page_by_path('my-work');
                $case_studies_page = get_page_by_path('case-studies');
                ?>

                <li>
                    <a href="<?php echo $about_me_page ? esc_url(get_permalink($about_me_page->ID)) : '#'; ?>" class="header-menu-primary-button">
                        About me 
                    </a>
                </li>
                <li>
                    <a href="<?php echo $my_work_page ? esc_url(get_permalink($my_work_page->ID)) : '#'; ?>" class="header-menu-primary-button">
                        My work
                    </a>
                </li>
                <li>
                    <a href="<?php echo $case_studies_page ? esc_url(get_permalink($case_studies_page->ID)) : '#'; ?>" class="header-menu-primary-button">
                        Case studies
                    </a>
                </li>
            </ul>
        
        <!-- Arrow splitter -->
        <div class="center-icon">
            <svg width="16" height="136" viewBox="0 0 16 136" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.29289 134.798C7.68342 135.188 8.31658 135.188 8.70711 134.798L15.0711 128.434C15.4616 128.043 15.4616 127.41 15.0711 127.02C14.6805 126.629 
                14.0474 126.629 13.6569 127.02L8 132.676L2.34315 127.02C1.95262 126.629 1.31946 126.629 0.928932 127.02C0.538408 127.41 0.538408 128.043 0.928932 128.434L7.29289 
                134.798ZM7 0.0905762L7 134.091H9L9 0.0905762L7 0.0905762Z" class="svg-icon-color svg-icon-fill"/>
            </svg>
        </div>

        <!-- Mobile menu bottom section -->
        <div class="mobile-menu-bottom-buttons">
            <a href="#" class="header-menu-secondary-button theme-toggle-button">
                <!-- Sun icon for light theme -->
                <svg class="sun-icon svg-icon svg-icon-color" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: none;">
                    <path d="M12 2V6M12 18V22M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M2 12H6M18 12H22M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22M12 8C9.8 8 8 9.8 8 12C8 14.2
                     9.8 16 12 16C14.2 16 16 14.2 16 12C16 9.8 14.2 8 12 8Z" />
                </svg>
                <!-- Moon icon for dark theme -->
                <svg class="moon-icon svg-icon svg-icon-color" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 12.79C20.67 12.83 20.34 12.85 20 12.85C15.14 12.85 11.15 8.86 11.15 4C11.15 3.66 11.17 3.33 11.21 3C7.62 3.5 4.85 6.57 4.85 10.5C4.85 15.08 8.42
                     18.65 13 18.65C16.93 18.65 20 15.88 20.5 12.29" />
                </svg>
            </a>

            <a href="<?php echo $contact_me ? esc_url(get_permalink($contact_me->ID)) : '#'; ?>" class="header-menu-secondary-button contact-me-button">Contact me
                <svg class="svg-icon svg-icon-color" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3333 5L20 12M20 12L13.3333 19M20 12L4 12"/>
                </svg>
            </a>
        </div>
    </nav>
    <?php wp_footer(); ?>
</body>
</html>
