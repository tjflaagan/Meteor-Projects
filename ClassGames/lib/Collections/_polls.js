Collections.Polls = new Mongo.Collection('polls');

Schema.Polls = new SimpleSchema({
	Question: {
		type: String,
		label: "Question",
		optional: true,
	},
	Easy_ID: {
  		type: String,
  		label: "Easy_ID",
  		optional: true
    },
	Answer_1: {
		type: String,
		label: "Answer 1",
		optional: true,
	},
	Answer_2: {
		type: String,
		label: "Answer 2",
		optional: true,
	},
	Answer_3: {
		type: String,
		label: "Answer 3",
		optional: true,
	},
	Answer_4: {
		type: String,
		label: "Answer 4",
		optional: true
	},
	Results: {
		type: Object,
		optional: true
	},
	"Results.Answer_1": {
		type: Number,
		optional: true,
		defaultValue: 0,
	},
	"Results.Answer_2": {
		type: Number,
		optional: true,
		defaultValue: 0,
	},
	"Results.Answer_3": {
		type: Number,
		optional: true,
		defaultValue: 0,
	},
	"Results.Answer_4": {
		type: Number,
		optional: true,
		defaultValue: 0,
	}
});

Collections.Polls.attachSchema(Schema.Polls);