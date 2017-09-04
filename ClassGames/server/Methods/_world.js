if (Meteor.isServer) {
	Meteor.methods({
		newWorld: function(doc){
			check(doc, Schema.World);
			var id = Random.id(6);
			Collections.World.insert({
				Subject: doc.Subject,
				Easy_ID: id,
			});
			return id;
		},
		deleteQuestion: function(doc, id){

			Collections.World.update({
				_id: id
			},
			{$pull: 
				{Question: 
					{question: doc.question}
				}
			},
			{multi: true});
		}
	});
}