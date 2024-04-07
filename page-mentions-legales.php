<?php

/**
 * Template Name: Mentions Legales page
 */

$context = Timber::context();


$context['posts'] = get_posts();


Timber::render( 'page-mentions-legales.twig', $context);