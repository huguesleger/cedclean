<?php


$context          						= Timber::context();
$context['posts'] 						= Timber::get_posts();
$timber_post_hero           			= Timber::get_post();
$context['post_hero']       			= $timber_post_hero;
$timber_post_insta           			= Timber::get_post();
$context['post_insta']       			= $timber_post_insta;
$timber_post_about		   				= Timber::get_post();
$context['post_about'] 		 			= $timber_post_about;
$timber_post_video		   				= Timber::get_post();
$context['post_video'] 		 			= $timber_post_video;
$timber_post_service					= Timber::get_post();
$context['post_service'] 		 		= $timber_post_service;
$timber_post_gallery					= Timber::get_post();
$context['post_gallery'] 		 		= $timber_post_gallery;
$timber_post_perimeters					= Timber::get_post();
$context['post_perimeters'] 		 	= $timber_post_perimeters;


$context['posts_card_hero'] = Timber::get_posts([
	'post_type' => 'card-hero',
	'posts_per_page' => 4,
	'order'		=> 'ASC'
]);

$context['posts_list_service'] = Timber::get_posts([
	'post_type' => 'list-services',
	'posts_per_page' => 6,
	'order'		=> 'ASC'
]);

$context['posts_card_service'] = Timber::get_posts([
	'post_type' => 'card-services',
	'posts_per_page' => 3,
	'order'		=> 'ASC'
]);


Timber::render( 'front-page.twig', $context);