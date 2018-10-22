const labels = {
  name: 'post type general name',
	singular_name: Book', 'post type singular name', 'your-plugin-textdomain,
	menu_name: 'Books',
	name_admin_bar: 'Book',
	add_new: 'Add New',
	add_new_item: 'Add New Book',
	new_item: 'New Book',
	edit_item: 'Edit Book',
	view_item: 'View Book',
	all_items: 'All Books',
	search_items: 'Search Books',
	parent_item_colon: 'Parent Books:',
	not_found: 'No books found.',
	not_found_in_trash: 'No books found in Trash.',
}

export default const customPostTypes = [
  {
    labels,
    description: 'Description',
		public: true,
		publicly_queryable: true,
		show_ui: true,
		show_in_menu: true,
		query_var: true,
		rewrite: [
      'slug': 'book'
    ],
		capability_type: 'post',
	  has_archive: true,
		hierarchical: false,
		menu_position: null,
		supports: [
      'title',
      'editor',
      'author',
      'thumbnail',
      'excerpt',
    ],
  }
]
