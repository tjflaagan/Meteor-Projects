var hook1 = {
  onSuccess: function(formType, result) {
  	sAlert.success('Forum EasyID: '+result, {
		effect: 'genie', 
		position: 'top', 
		timeout: '15000', 
		onRouteClose: false, 
		stack: false, 
		offset: '50px'
	});
    Router.go('addVocab', {"Easy_ID":result});
  }
};

AutoForm.hooks({
  insertWhatAmI: hook1,
});

Template.vocab.helpers({
	words: function() {
		var List = Collections.WhatAmI.findOne({"Easy_ID":this.Easy_ID});
		var words = [];
		var arr = List.Word;
		if(typeof List.Word != 'undefined')
		{
			arr.forEach(function(item){
				words.push(item.word);
			});
		}
		Session.set('_id', this._id);
		return words;
	}
});

Template.word.events({
	'click #deleteWord': function(event){
		event.preventDefault();
		var test =  JSON.stringify(this);
		test = test.replace(/['"]+/g, '');
		Meteor.call("deleteWord", test, Session.get('_id'));
	}
});

Template.joinWhatami.events({
  "click #whatamiview": function(event){
    event.preventDefault();
    var text = document.getElementById('easyid').value;
    var doc = Collections.WhatAmI.findOne({"Easy_ID":text});
    if(typeof doc != 'undefined'){
      Router.go('playWhatami', {"Easy_ID":text});  
    }
    
  }
});

var countdown;
var temp = 0;

Template.playWhatami.events({
	"click #startwhatami": function(event){
		event.preventDefault();
		Session.set("Started", true);
		countdown = new ReactiveCountdown(120);
		countdown.start(function() {
			sAlert.success('Turn Over! Points: ' + Session.get("Points"), {
				effect: 'genie', 
				position: 'top', 
				timeout: '15000', 
				onRouteClose: false, 
				stack: false, 
				offset: '50px'
			});
			Session.set("Started", false);
			Session.set("Points", 0);
			temp = temp + 1;
		});
	},
	"click #resetCounter": function(event){
		event.preventDefault();
		temp = 0;
		sAlert.success('Word Counter Reset!', {
			effect: 'genie', 
			position: 'top', 
			timeout: '15000', 
			onRouteClose: false, 
			stack: false, 
			offset: '50px'
		});
	}
});


Template.playWhatami.helpers({
	notStarted: function(){
		var notStarted = false;
		if(typeof Session.get("Started") == 'undefined'){
			Session.set("Started", false);
			Session.set("Points", 0);
			notStarted = false;
		}
		else if(Session.get("Started") == true){
			notStarted = true;
		}
		else{
			notStarted= false;
		}
		return notStarted;
	},
});
var temp = 0;
Template.whatamiWords.helpers({
	getCountdown: function() {
		return countdown.get();
	},
	getPoints: function() {
		return Session.get("Points");
	},
	getWord: function(){
		var Words = Collections.WhatAmI.findOne({"Easy_ID":this.Easy_ID});
		
		var len = Words.Word.length;
		console.log(temp+ ' - ' +len);
		if(temp >= len){
			sAlert.error('Out of Words! Game Over!', {
				effect: 'genie', 
				position: 'top', 
				timeout: '15000', 
				onRouteClose: false, 
				stack: false, 
				offset: '50px'

			});
			Session.set("Started", false);
		}
		else{
		var w = Words.Word[temp].word;
		}
		return w;
	},
});

Template.whatamiWords.events({
	"click #plusone": function(event){
		Session.set("Points", Session.get("Points") + 1);
		temp = temp + 1;
		Collections.WhatAmI.update({"_id":this._id}, {$set: {"Count":temp}});
	},
});