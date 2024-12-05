<?php /* Template Name: About me */; ?>

<?php get_header() ?>

<main class="bg-svg">
    <?php
    if (have_posts()) : ?>

        <?php while (have_posts()) : the_post(); ?>

        <div class="about-me-mobile-content">
            <?php the_content(); ?>

            <img src="http://localhost:8080/davidbrany/wp-content/uploads/2024/12/profile-picture.png" alt="Profile picture" class="profile-picture mobile-profile-picture">

            <button class="wp-block-button__link about-me-btn">View Studies</button>
 
            <div class="about-me-bottom-section">
                <hr class="about-me-splitter">

                <div class="social-media-buttons">
                    <a href="#" class="social-media-link">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.45802 7.08064L16.98 7.08052M16.98 7.08052L16.98 15.4813M16.98 7.08052L7.08052 16.98" stroke="#150C00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Linked In
                    </a>
                    <a href="#" class="social-media-link">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.45802 7.08064L16.98 7.08052M16.98 7.08052L16.98 15.4813M16.98 7.08052L7.08052 16.98" stroke="#150C00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        E-mail
                    </a>
                    <a href="#" class="social-media-link">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.45802 7.08064L16.98 7.08052M16.98 7.08052L16.98 15.4813M16.98 7.08052L7.08052 16.98" stroke="#150C00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Resume
                    </a>
                </div>
            </div>

            </div>
            <img src="http://localhost:8080/davidbrany/wp-content/uploads/2024/12/profile-picture.png" alt="Profile picture" class="profile-picture desktop-profile-picture">

    <?php endwhile;
    endif;
    ?>
</main>