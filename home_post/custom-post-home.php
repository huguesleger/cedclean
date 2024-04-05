
<?php
	   
/** card hero */
function card_hero() {
    $labels = array(
        'name'               => 'Card hero',
        'singular_name'      => 'card hero',
        'menu_name'          => 'Card hero',
        'name_admin_bar'     => 'Card hero',
        'add_new'            => 'Ajouter une nouvelle card',
        'add_new_item'       => 'Ajouter une card',
        'new_item'           => 'Nouvelle card',
        'edit_item'          => 'Editer une card',
        'view_item'          => 'Voir une card',
        'all_items'          => 'Card hero',
        'search_items'       => 'Rechercher une card',
        'parent_item_colon'  => 'Parent Item',
        'not_found'          => 'Aucune card trouvée',
        'not_found_in_trash' => 'Aucune card dans la corbeille'
    );

    $args = array(
        'labels'             => $labels,
        'description'        => __( 'Description.', 'your-plugin-textdomain' ),
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => 'home_post/custom-post-home.php',
        'show_in_rest'       => true,
        'query_var'          => true,
        'rewrite'            => array( 'slug' => 'card-hero' ),
        'capability_type'    => 'post',
        'menu_icon'          => 'dashicons-smiley',
        'has_archive'        => false,
        'hierarchical'       => true,
        'menu_position'      => 4,
        'supports'           => array( 'title', 'editor', 'author', 'excerpt', 'thumbnail','revisions','page-attributes'),
    );

    register_post_type( 'card-hero', $args );
}
card_hero();

