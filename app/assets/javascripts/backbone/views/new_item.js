Collab.Views.NewItem = Backbone.View.extend({
	el: '.new-item-form',
	
	events: {
        "click [data-action='new-item']": "newItem"
    },

    newItem: function(e) {
    	this.collection.create({
			'url': this.$el.find('input[name="url"]').val(),
			'description': this.$el.find('input[name="description"]').val()
		}, 
        { 
            wait: true, 
            error: function(model, response) {
                console.log(response.responseText);

            } 
    });
    }
});
