var beta = beta || {};

beta.Users = Backbone.Firebase.Collection.extend({

	model: beta.User,
	url: 'https://pique-test.firebaseio.com/users',
});





