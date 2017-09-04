Collections.WhatAmI = new Mongo.Collection('whatami');

Schema.WhatAmI = new SimpleSchema({
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
  Word: {
    type: Array,
    label: "Word",
    optional: true,
  },
  'Word.$': {
    type: Object
  },
  'Word.$.word' :{
    type: String
  },
});

Collections.WhatAmI.attachSchema(Schema.WhatAmI);