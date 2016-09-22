<?php $post = get_post($_POST['id']); ?>
<div id="single-post post-<?php the_ID(); ?>" class="wow fadeInUp">
<?php while (have_posts()) : the_post(); ?>
    <header class="post-title">
        <h2><?php the_title(); ?></h2>
    </header> 
    <div class="post-content">
        <?php the_content(); ?>
    </div>
<?php endwhile;?> 
