<?php

/* очищаем wp_head(); */
function remove_recent_comments_style() {  
  global $wp_widget_factory;  
  remove_action( 'wp_head', array( $wp_widget_factory->widgets['WP_Widget_Recent_Comments'], 'recent_comments_style' ) );  
}  
add_action( 'widgets_init', 'remove_recent_comments_style' );  
remove_action( 'wp_head', 'feed_links_extra', 3 ); 
remove_action( 'wp_head', 'feed_links', 2 );
remove_action( 'wp_head', 'rsd_link' );
remove_action( 'wp_head', 'wlwmanifest_link' );
remove_action( 'wp_head', 'index_rel_link' );
remove_action( 'wp_head', 'parent_post_rel_link', 10, 0 ); 
remove_action( 'wp_head', 'start_post_rel_link', 10, 0 );
remove_action( 'wp_head', 'adjacent_posts_rel_link', 10, 0 );
remove_action( 'wp_head', 'wp_generator' );


if(function_exists('register_sidebar'))
	register_sidebar(array('name' => 'Sidebar' )); 
	

if ( function_exists( 'add_theme_support' ) ) { 
  add_theme_support( 'post-thumbnails' );
}

// breadcumps 

function my_theme_load_resources() {
$theme_uri = get_template_directory_uri();

// global style connected

wp_register_style('my-theme-style', $theme_uri.'/assets/css/production_post.css', false, '1.1');
wp_enqueue_style('my-theme-style');

    
// scripts connected
    
wp_register_script('my_theme_functions', $theme_uri.'/assets/js/production.min.js', array('jquery'), '1.1', true);
wp_enqueue_script('my_theme_functions'); 
}
add_action('wp_enqueue_scripts', 'my_theme_load_resources');

?>