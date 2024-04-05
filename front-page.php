<?php


$context          				= Timber::context();
$context['posts'] 				= Timber::get_posts();
$timber_post_hero           	= Timber::get_post();
$context['post_hero']       	= $timber_post_hero;
$timber_post_insta           	= Timber::get_post();
$context['post_insta']       	= $timber_post_insta;
$timber_post_about		   		= Timber::get_post();
$context['post_about'] 		 	= $timber_post_about;
$timber_post_video		   		= Timber::get_post();
$context['post_video'] 		 	= $timber_post_video;

// $postCardHero = [
// 	'post_type' => 'card-hero',
// 	'posts_per_page' => 4,
// 	'order'		=> 'ASC'
// ];

$context['posts_card_hero'] = Timber::get_posts([
	'post_type' => 'card-hero',
	'posts_per_page' => 4,
	'order'		=> 'ASC'
]);
//$context['posts_card_hero'] = Timber::get_posts($postCardHero);
// $timber_post_card_hero     = Timber::get_post('card-hero');
// $context['post_card_hero'] = $timber_post_card_hero;

Timber::render( 'front-page.twig', $context);