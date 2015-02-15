Collab.Models.Item = Backbone.Model.extend({
	defaults: {
		url: 'http://youneedaurl.com',
		description: 'youneed a description'
	},

	validate: function(attrs) {
		// if(!attrs.url || !attrs.description) {
		// 	return 'Both Inputs are Required!';
		// }
	}
});