if (Meteor.isServer) {
	Meteor.methods({
		newPoll: function(doc){
			check(doc, Schema.Polls);
			var id = Random.id(6);
			Collections.Polls.insert({
				Question: doc.Question,
				Answer_1: doc.Answer_1,
				Answer_2: doc.Answer_2,
				Answer_3: doc.Answer_3,
				Answer_4: doc.Answer_4,
				Results: {
					Answer_1: 0,
					Answer_2: 0,
					Answer_3: 0,
					Answer_4: 0,
				},
				Easy_ID: id,
			});
			return id;
		},
	});
}
