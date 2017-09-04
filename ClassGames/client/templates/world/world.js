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
    Router.go('addWorldQuestion', {"Easy_ID":result});
  }
};

AutoForm.hooks({
	insertWorld: hook1,
});

Template.worldQuestion.helpers({
	questions: function() {
		var List = Collections.World.findOne({"Easy_ID":this.Easy_ID});
		var questions = [];
		var arr = List.Question;
		if(typeof arr != 'undefined')
		{
			arr.forEach(function(item){
				questions.push(item);
			});
		}
		Session.set('_id', this._id);
		return questions;
	}
});

Template.question.events({
	'click #deleteQuestion': function(event){
		event.preventDefault();
		Meteor.call("deleteQuestion", this, Session.get('_id'))
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

Template.joinWorld.events({
  "click #worldview": function(event){
    event.preventDefault();
    var text = document.getElementById('easyid').value;
    var doc = Collections.World.findOne({"Easy_ID":text});
    if(typeof doc != 'undefined'){
      Router.go('playWorld', {"Easy_ID":text});  
    }
    
  }
});


var temp = 0;

Template.whatamiWords.events({

	"click #viewAnswer": function(event){
		var doc = Collections.World.findOne({"_id":Session.get('_id')});
		var answer = doc.Question.answer;
			sAlert.success(answer, {
			effect: 'genie', 
			position: 'top', 
			timeout: '15000', 
			onRouteClose: false, 
			stack: false, 
			offset: '50px'
		});
	},
});


Template.playWorld.helpers({
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

Template.playWorld.events({
	"click #startworld": function(event){
		event.preventDefault();
		Session.set("Started", true);
		//Session.set("Started", false);

	},
	"click #resetCounter": function(event){
		event.preventDefault();
		temp = 0;
		sAlert.success('Question List Reset!', {
			effect: 'genie', 
			position: 'top', 
			timeout: '8000', 
			onRouteClose: false, 
			stack: false, 
			offset: '50px'
		});
	}
});

Template.worldQuestions.helpers({
	getQuestion: function(){
		var Questions = Collections.World.findOne({"Easy_ID":this.Easy_ID});
		var len = Questions.Question.length;
		console.log(temp+ ' - ' +len);
		if(temp >= len){
			sAlert.error('Out of Questions! Game Over!', {
				effect: 'genie', 
				position: 'top', 
				timeout: '15000', 
				onRouteClose: false, 
				stack: false, 
				offset: '50px'

			});
			Session.set("Started", false);
			temp = 0;
		}
		else{
		var w = Questions.Question[temp].question;
		}
		return w;
	},
});

Template.worldQuestions.events({
	"click #viewAnswer": function(event){
		// temp = temp + 1;
		
		var doc = Collections.World.findOne({"_id":this._id});
		var answer = doc.Question[temp].answer;
			sAlert.success(answer, {
			effect: 'genie', 
			position: 'top', 
			timeout: '15000', 
			onRouteClose: false, 
			stack: false, 
			offset: '50px'
		});
	},
	"click #nextQuestion": function(event){
		console.log(temp);
		Collections.World.update({"_id":this._id}, {$set: {"Count":temp}});
		temp = temp + 1;
	},
});