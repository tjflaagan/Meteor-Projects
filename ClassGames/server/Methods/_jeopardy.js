if (Meteor.isServer) {
	Meteor.methods({
		newJeopardy: function(doc){
			check(doc, Schema.Jeopardy);
			var id = Random.id(6);
			Collections.Jeopardy.insert({
				Subject: doc.Subject,
				Easy_ID: id,
			});
			return id;
		},
		deleteCat: function(doc, id){
			Collections.Jeopardy.update({ 
				_id: id
			}, 
			{ $pull: { 
				Category: {
					topic: doc
				}
			} 
			},{multi: true});
		},
		deleteJeop: function(doc, id){
			Collections.Jeopardy.update({ 
				_id: id
			}, 
			{ $pull: { 
				Questions: {
					question: doc
				}
			} 
			},{multi: true});
		},
	});
}