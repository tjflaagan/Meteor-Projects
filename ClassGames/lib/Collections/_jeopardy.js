Collections.Jeopardy = new Mongo.Collection('jeopardy');

Schema.Jeopardy = new SimpleSchema({
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
  Category: {
    type: Array,
    label: "Category",
    optional: true,
    minCount: 0,
    maxCount: 5,
  },
  'Category.$': {
    type: Object,
    optional: true,
  },
  'Category.$.topic' :{
    type: String,
    optional: true,
  },
  Questions: {
    type: Array,
    label: "Questions",
    optional: true
  },
  'Questions.$': {
    type: Object,
    optional: true
  },
  'Questions.$.category':{
    type: String,
    label: "Category",
    optional: true
  },
  'Questions.$.question':{
    type: String,
    label: "Question",
    optional: true
  },
  'Questions.$.answer':{
    type: String,
    label: "Answer",
    optional: true
  },
  'Questions.$.value':{
    type: Number,
    label: "Value",
    optional: true,
    allowedValues: [100, 200, 300, 400, 500],
  }
});

Collections.Jeopardy.attachSchema(Schema.Jeopardy);