Router.configure({
	layoutTemplate: 'appBody',
	notFoundTemplate: 'appNotFound',
	loadingTemplate: 'appLoading'
});

Router.route('home', {
	path: '/',
	action: function() {
		this.render('home');
	}
});

Router.route('admin', { 
	path: 'admin',
	// waitOn: function() {
	// 	return Meteor.subscribe('admin');
	// },
	action: function() {
		this.render('admin');
	}
});

Router.route('Logo', {
	path: 'logo',
	waitOn: function() {
		return [Meteor.subscribe('Student'), Meteor.subscribe('Color1')];
	},
	action: function() {
		this.render('logo');
	}
});
