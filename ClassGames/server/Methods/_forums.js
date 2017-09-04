if (Meteor.isServer) {
	Meteor.methods({
		newForum: function(doc) {
			check(doc, Schema.Forums);
			var id = Random.id(6);
			var obj = Collections.Forums.insert({
				Question: doc.Question,
				Easy_ID: id,

			});
			return id;
		},
	});
}