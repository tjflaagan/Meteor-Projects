Collections.Forums = new Mongo.Collection('forums');

Schema.Forums = new SimpleSchema({
  Question:{
    type: String,
    label: "Question",
    optional: true
  },
  Easy_ID: {
  	type: String,
  	label: "Easy_ID",
  	optional: true
  },
  Answer: {
    type: Array,
    label: "Response",
    optional: true,
  },
  'Answer.$': {
    type: Object
  },
  'Answer.$.answer' :{
    type: String
  },
});

Collections.Forums.attachSchema(Schema.Forums);
