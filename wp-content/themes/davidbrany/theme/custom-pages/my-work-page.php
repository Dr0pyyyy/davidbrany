<?php /* Template Name: My work */; ?>

<?php get_header() ?>

<main>
    <?php
    if (have_posts()) : ?>

        <?php while (have_posts()) : the_post(); ?>

        <?php the_content(); ?>


    <?php endwhile;
    endif;
    ?>
</main>