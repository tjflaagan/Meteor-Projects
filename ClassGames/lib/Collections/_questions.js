Collections.Questions = new Mongo.Collection('questions');

Schema.Questions = new SimpleSchema({

  Question:{
    type: String,
    label: "Question",
    optional: true
  }
});

Collections.Questions.attachSchema(Schema.Questions);