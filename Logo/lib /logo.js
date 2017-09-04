Collections = {};

Collections.Student = new Mongo.Collection("Student");
Collections.Color1 = new Mongo.Collection("Color1");


if (Meteor.isClient) {

  Template.logo.events({
    'click button': function () {


      var num = document.getElementById("number").value;

      var flag = false;

      var image = Collections.Color1.findOne({name: "dsu"});

      if(num.length == 0)
      {
        var St = Collections.Student.findOne({"taken": false});
        console.log(St.num);
        Collections.Student.update({"_id": St._id}, {$set: {"taken": true}});
        num = St.num;
      }
      for (var i = 0; i < image.primarypixels.length; i++)
      {
        if(image.primarypixels[i] == num)
        {
          flag = true;
        }
      }

      if(flag === true)
      {
        document.body.style.background = image.primary;
      }
      else
      {
        document.body.style.background = image.secondary;
      }
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    for(var i = 0; i < 210; i++)
      Collections.Student.insert({
        num: i,
        taken: false
      });
    Collections.Color1.insert({
      name: "dsu",
      primary: "yellow",
      secondary: "blue",
      primarypixels: [21, 22, 23, 43, 63, 82, 101, 120, 138, 156, 155, 154, 135, 116, 97, 78, 59, 40, 31, 30, 29, 28, 46, 65, 85, 86, 87, 107, 126, 145, 160, 161, 162, 163, 33, 52, 71, 90, 109, 128, 147, 167, 168, 169, 151, 132, 113, 94, 75, 56, 37]
    })
    });
}