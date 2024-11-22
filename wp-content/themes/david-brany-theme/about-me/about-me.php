<?php /* Template Name: About me */ get_template_part('header/header');?>

<div class="page-content-setup about-me-content-mobile">
    <div class="container">
        <h1 class="about-me-header">Brand Manager</h1>
        <p class="text-center about-me-par">About me text</p>
    </div>
    <img class="about-me-img" src="<?php echo get_template_directory_uri(); ?>/images/profile-picture.png" alt="Profile picture">
    <button class="view-studies-button">View studies</button>
    <div class="about-me-main-section-bottom">
        <hr>
        <div class="social-media-buttons">
            <a class="social-media-button" href="#">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.45802 7.08064L16.98 7.08052M16.98 7.08052L16.98 15.4813M16.98 7.08052L7.08052 16.98" class="svg-icon svg-icon-color"/>
            </svg>
            E-Mail
            </a>
            <a class="social-media-button" href="#">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.45802 7.08064L16.98 7.08052M16.98 7.08052L16.98 15.4813M16.98 7.08052L7.08052 16.98" class="svg-icon svg-icon-color"/>
                </svg>
                Linked-In
            </a>
            <a class="social-media-button" href="#">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.45802 7.08064L16.98 7.08052M16.98 7.08052L16.98 15.4813M16.98 7.08052L7.08052 16.98" class="svg-icon svg-icon-color"/>
                </svg>
                Resume
            </a>
        </div>
    </div>
</div>

<div class="about-me-desktop-container">
    <div class="about-me-content-desktop">
        <div class="about-me-main-section">
            <div class="about-me-main-section-top">
                <h1 class="about-me-header">Brand Manager</h1>
                <p class="text-center about-me-par">About me text</p>
                <button class="view-studies-button">View Studies</button>
            </div>
            <div class="about-me-main-section-bottom">
                <hr>
                <div class="social-media-buttons">
                    <a class="social-media-button" href="#">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.45802 7.08064L16.98 7.08052M16.98 7.08052L16.98 15.4813M16.98 7.08052L7.08052 16.98" class="svg-icon svg-icon-color"/>
                    </svg>
                    E-mail
                    </a>
                    <a class="social-media-button" href="#">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.45802 7.08064L16.98 7.08052M16.98 7.08052L16.98 15.4813M16.98 7.08052L7.08052 16.98" class="svg-icon svg-icon-color"/>
                        </svg>
                        Linked-In
                    </a>
                    <a class="social-media-button" href="#">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.45802 7.08064L16.98 7.08052M16.98 7.08052L16.98 15.4813M16.98 7.08052L7.08052 16.98" class="svg-icon svg-icon-color"/>
                        </svg>
                        Resume
                    </a>
                </div>
            </div>
        </div>
        <img class="about-me-img" src="<?php echo get_template_directory_uri(); ?>/images/profile-picture.png" alt="Profile picture">
    </div>
</div>

<?php get_footer(); ?>