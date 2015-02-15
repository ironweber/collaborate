Collab.Views.Item = Backbone.View.extend({
	tagName: 'li',
	className: 'cf',
	render: function() {
		var template = Collab.getTemplate('item',this.model.toJSON());
		this.$el.html( template );
		return this;
	},

	events: {
        "click [data-action='destroy-item']": "destroyItem",
        "click [data-action='fave-item']": "faveItem"
    },
    
    destroyItem: function(e) {
    	this.model.destroy();
    	this.remove().unbind();
    },

    faveItem: function(e) {
        console.log('fave this item');

        
    }
});