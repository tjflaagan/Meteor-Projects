if (Meteor.isServer) {
	Meteor.methods({
		newWhat: function(doc){
			check(doc, Schema.WhatAmI);
			var id = Random.id(6);
			Collections.WhatAmI.insert({
				Subject: doc.Subject,
				Easy_ID: id,
			});
			return id;
		},
		deleteWord: function(doc, id){
			Collections.WhatAmI.update({ 
				_id: id
			}, 
			{ $pull: { 
				Word: {
					word: doc
				}
			} 
			},{multi: true});

		}
	});
}