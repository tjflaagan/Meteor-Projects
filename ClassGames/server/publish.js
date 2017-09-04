Meteor.publish("Sessions", function (){ 
	return Collections.Sessions.find({});
});
Meteor.publish("Forums", function (){ 
	return Collections.Forums.find({});
});
Meteor.publish("WhatAmI", function (){
	return Collections.WhatAmI.find({});
});
Meteor.publish("World", function (){
	return Collections.World.find({});
});
Meteor.publish("Jeopardy", function(){
	return Collections.Jeopardy.find({});
});
Meteor.publish("Polls", function(){
	return Collections.Polls.find({});
});