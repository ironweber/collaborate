(function($){
	var CollabView = Backbone.View.extend({
		initialize: function(attrs) {
			this.template = attrs.template;
			this.render();
		},
		render: function() {
			// this.$el.find('.items').html( this.template(this.model.toJSON()) );
		},
		events: {
            "click [data-action='new-item']": "newItem"
        },
        newItem: function(e) {
        	var newItem = new CollabItemModel({
    			'url': $(e.target).prev().prev('div').find('input').val(),
				'description': $(e.target).prev('div').find('input').val()
    		});
    		// console.log(newItem);
        	// return false;
    		// save the new item
        	if(newItem.save()) {
        		// add the new item to the page
        		this.$el.find('.items').prepend( this.template(newItem.toJSON()) );
        	}
        }
	});

	var CollabItemModel = Backbone.Model.extend({
		initialize: function() { },
		url: 'items'
	});

	$(function(){
		var template = Handlebars.compile($("#item-template").html());

	 	var cv = new CollabView({
	 		el: $(document),
	 		template: template
	 	});
	});
}(jQuery));
