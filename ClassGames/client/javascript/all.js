if (Meteor.isClient) {


  Template.home.events({
    'click #newSession': function () {
      var resp = Meteor.call('createSession', Random.id(5), function (error, result) {
        Router.go('questionSession', {"_id": result});
      });
    }
  });
}
