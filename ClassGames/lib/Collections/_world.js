Collections.World = new Mongo.Collection('world');

Schema.World = new SimpleSchema({
  Subject:{
    type: String,
    label: "Subject",
    optional: true
  },
  Easy_ID: {
  	type: String,
  	label: "Easy_ID",
  	optional: true
  },
  Count: {
    type: Number,
    label: "Count",
    optional: true,
  },
  Question: {
    type: Array,
    label: "Word",
    optional: true,
  },
  'Question.$': {
    type: Object
  },
  'Question.$.question' :{
    type: String
  },
  'Question.$.answer' :{
    type: String
  }
});

Collections.World.attachSchema(Schema.World);