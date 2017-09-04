Collections.Sessions = new Mongo.Collection('sessions');

Schema.Sessions = new SimpleSchema({
	Sessions: {
		type: String,
		label: "Session",
		optional: true,
	},
	Question: {
		type: String,
		label: "Question",
		optional: true,
	},
	Question_Type: {
		type: String,
		label: "Type of question",
		optional: true,
		allowedValues: ['True/False', 'Multiple Choice', 'Short Answer'],
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
	"Results.Short_Answer": {
		type: [String],
		optional: true
	},
	"Results.True": {
		type: Number,
		optional: true
	},
	"Results.False": {
		type: Number,
		optional: true
	},
	"Results.Answer_1": {
		type: Number,
		optional: true
	},
	"Results.Answer_2": {
		type: Number,
		optional: true
	},
	"Results.Answer_3": {
		type: Number,
		optional: true
	},
	"Results.Answer_4": {
		type: Number,
		optional: true
	}
});

Collections.Sessions.attachSchema(Schema.Sessions);