<?php

/**
 * Template Name: Contact page
 */

$context = Timber::context();


$context['posts'] = get_posts();


Timber::render( 'page-contact.twig', $context);