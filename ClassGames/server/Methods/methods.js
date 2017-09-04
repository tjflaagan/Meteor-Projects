if (Meteor.isServer) {
	Meteor.methods({
		createSession: function(doc){
			var obj = Collections.Sessions.insert({
				"Sessions":doc,
				Question: "",
				Question_Type: "",
				Answer_1: "",
				Answer_2: "",
				Answer_3: "",
				Answer_4: "",
			});
			return obj;
		},
		newQuestion: function(doc){
			check(doc, Schema.Sessions);
			console.log(doc);
			Collections.Sessions.update({
				"_id": doc._id,
				},
				{$set: {
					Question: doc.Question,
					Question_Type: doc.Question_Type,
					Answer_1: doc.Answer_1,
					Answer_2: doc.Answer_2,
					Answer_3: doc.Answer_3,
					Answer_4: doc.Answer_4,
				}
			});
			return null;
		},
		createID: function(){
			var id = Random.id(6);
			return id;
		}
	});
}