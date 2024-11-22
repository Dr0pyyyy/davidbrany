<?php /* Template Name: About me */ ;?>

<?php get_header() ?>

<main>
    <?php
    if ( have_posts() ) : ?>

       <?php while ( have_posts() ) : the_post(); ?>

       <?php the_content(); ?>
       
       <?php endwhile;
    endif;
    ?>
</main>

<?php get_footer() ?>