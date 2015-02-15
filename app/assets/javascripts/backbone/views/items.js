Collab.Views.Items = Backbone.View.extend({
	tagName: 'ul',
	
	initialize: function() {
		this.collection.on('sync', this.addOne, this);
	},

	render: function() {
		this.collection.each( this.addOne, this );
		return this;
	},

	addOne: function(item) {
		var item = new Collab.Views.Item({ model: item });
		this.$el.append( item.render().el );
	}
});