<?php

/**
 * Template Name: Demande de devis page
 */

$context = Timber::context();


$context['posts'] = get_posts();


Timber::render( 'page-demande-de-devis.twig', $context);