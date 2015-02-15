window.Collab = {
	init: function() { 
		$(function() {
			var items = new Collab.Collections.Items(),
				newItemForm = new Collab.Views.NewItem({ collection: items });
				
		
			items.fetch({
				success: function(items) {
		    		var itemsView = new Collab.Views.Items({ collection: items });
		    		$('div.items').append(itemsView.render().el);
		  		}
		  	});
		});
	},
	getTemplate: function(name,model) {
		return this.Templates[this.templatePath+name](model);
	},
	templatePath: 'backbone/templates/',
	Templates: HandlebarsTemplates,
	Models: {},
	Views: {},
	Collections: {},
};
