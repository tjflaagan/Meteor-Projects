Meteor.publish("Student", function () {
	return Collections.Student.find({});
});
Meteor.publish("Color1", function () {
	return Collections.Color1.find({});
});