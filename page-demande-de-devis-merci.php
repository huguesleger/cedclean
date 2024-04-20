<?php

/**
 * Template Name: Demande de devis merci page
 */

$context = Timber::context();


$context['posts'] = get_posts();
$timber_post_devis_thanks					= Timber::get_post();
$context['post_devis_thanks'] 		 	= $timber_post_devis_thanks;


Timber::render( 'page-demande-de-devis-merci.twig', $context);