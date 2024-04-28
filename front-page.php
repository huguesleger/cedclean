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
$timber_post_eco						= Timber::get_post();
$context['post_eco'] 		 			= $timber_post_eco;
$timber_post_img_devis					= Timber::get_post();
$context['post_img_devis'] 		 		= $timber_post_img_devis;


$context['posts_card_hero'] = Timber::get_posts([
	'post_type' => 'card-hero',
	'posts_per_page' => 4,
	'order'		=> 'ASC'
]);

$context['posts_list_service'] = Timber::get_posts([
	'post_type' => 'list-services',
	'posts_per_page' => 8,
	'order'		=> 'ASC'
]);

$context['posts_card_service'] = Timber::get_posts([
	'post_type' => 'card-services',
	'posts_per_page' => 6,
	'order'		=> 'ASC'
]);


Timber::render( 'front-page.twig', $context);