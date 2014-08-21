(function($){
	window.Collab = {
		init: function() {
			$(function(){
				var newItemForm = new Collab.Views.NewItem(),
					items = new Collab.Collections.Items();
				
				items.fetch({
					success: function(items) {
			    		var itemsView = new Collab.Views.Items({ collection: items });
			    		$('div.items').append(itemsView.render().el);
			  		}
			  	});
			});
		},
		Models: {},
		Views: {},
		Collections: {}
	};

	Collab.Views.NewItem = Backbone.View.extend({
		el: '.new-item-form',
		events: {
            "click [data-action='new-item']": "newItem"
        },
        newItem: function(e) {
        	var newItem = new Collab.Models.Item({
    			'url': $(e.target).prev().prev('div').find('input').val(),
				'description': $(e.target).prev('div').find('input').val()
    		});

    		// save the new item
        	if(newItem.save()) {
        		// add the new item to the page
        		// this.$el.find('.items').prepend( this.template(newItem.toJSON()) );
        	}
        }
	});


	Collab.Views.Item = Backbone.View.extend({
		tagName: 'li',
		render: function() {
			this.$el.html( this.model.get('url') );
			return this;
		},
		events: {
            "click [data-action='destroy-item']": "destroyItem"
        },
        
        destroyItem: function(e) {
        	this.remove();
        	this.unbind();
        	// $(e.target).closest('.row').remove();
 		 	// this.$el.remove();
        }
	});

	Collab.Views.Items = Backbone.View.extend({
		tagName: 'ul',
		render: function() {
			this.collection.each( this.addOne, this );
			return this;
		},
		addOne: function(item) {
			var item = new Collab.Views.Item({ model: item });
			this.$el.append( item.render().el );
		}
	});

	Collab.Models.Item = Backbone.Model.extend({
		defaults: {
			url: 'http://youneedaurl.com',
			description: 'youneed a description'
		},

		validate: function(attrs) {
			if(!attrs.url || !attrs.description) {
				return 'Both Inputs are Required!';
			}
		},
		url: '/items'

	});

	Collab.Collections.Items = Backbone.Collection.extend({
		model: Collab.Models.Item,
		url: '/items'
	});



	Collab.init();
}(jQuery));
