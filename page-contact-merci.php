<?php

/**
 * Template Name: Contact-merci page
 */

$context = Timber::context();


$context['posts'] = get_posts();

$timber_post_contact_thanks					= Timber::get_post();
$context['post_contact_thanks'] 		 	= $timber_post_contact_thanks;


Timber::render( 'page-contact-merci.twig', $context);