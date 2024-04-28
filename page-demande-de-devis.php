<?php

/**
 * Template Name: Demande de devis page
 */

$context = Timber::context();


$context['posts'] = get_posts();
$timber_post_img_demande_devis					= Timber::get_post();
$context['post_img_demande_devis'] 		 		= $timber_post_img_demande_devis;


Timber::render( 'page-demande-de-devis.twig', $context);