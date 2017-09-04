var hook1 = {
  onSuccess: function(formType, result) {
  	sAlert.success('Jeopardy EasyID: '+result, {
		effect: 'genie', 
		position: 'top', 
		timeout: '15000', 
		onRouteClose: false, 
		stack: false, 
		offset: '50px'
	});
    Router.go('jeopCategories', {"Easy_ID":result});
  }
};

AutoForm.hooks({
  insertJeopardy: hook1,
});

Template.Categories.helpers({
	cats: function() {
		var List = Collections.Jeopardy.findOne({"Easy_ID":this.Easy_ID});
		var Categories = [];
		var arr = List.Category;
		Session.set("len", arr.length);
		if(typeof arr != 'undefined')
		{
			arr.forEach(function(item){
				Categories.push(item.topic);
				
			});
		}
		Session.set('_id', this._id);
		return Categories;
	}
});

Template.createJeopardy.events({
    "click #editJeopardy": function(event){
        event.preventDefault();
        var result = document.getElementById('easyid').value;
        Session.set("Easy_ID", result);
        Router.go('jeopCategories', {"Easy_ID":result})
    }
});

Template.Categories.events({
	"click #gotoQuestions": function(event){
		event.preventDefault();
		var result = Session.get("Easy_ID");
		Router.go('jeopQuestions', {"Easy_ID":result});
	}
});

Template.joinJeopardy.events({
  "click #jeopView": function(event){
    event.preventDefault();
    var text = document.getElementById('easyid').value;
    var doc = Collections.Jeopardy.findOne({"Easy_ID":text});
    if(typeof doc != 'undefined'){
      Session.set("Easy_ID", text);
      Router.go('jeopardy', {"Easy_ID":text});  
    }
  }
});

Template.jeopQuestions.helpers({  
  options: function () {
    return [
      {
        optgroup: "Value",
        options: [
          {label: "100", value: 100},
          {label: "200", value: 200},
          {label: "300", value: 300},
          {label: "400", value: 400},
          {label: "500", value: 500},
        ]
      },
    ];
  },
  options2: function () {
  	var test = this;
    return [
      {
        optgroup: "Category",
        options: [
          {label: test.Category[0].topic , value: test.Category[0].topic},
          {label: test.Category[1].topic , value: test.Category[1].topic},
          {label: test.Category[2].topic , value: test.Category[2].topic},
          {label: test.Category[3].topic , value: test.Category[3].topic},
          {label: test.Category[4].topic , value: test.Category[4].topic},
        ]
      },
    ];
  }
});

Template.jeopardyList.helpers({
	questions: function() {
		var List = Collections.Jeopardy.findOne({"Easy_ID":this.Easy_ID});
		var questions = [];
		var arr = List.Questions;
		if(typeof arr != 'undefined')
		{
			arr.forEach(function(item){
				questions.push(item);
			});
		}
		Session.set('_id', this._id);
		Session.set('Easy_ID', this.Easy_ID);
		return questions;
	}
});

Template.questionJeop.events({
	'click #deleteQuestion': function(event){
		event.preventDefault();
		var doc = this.question;
		var test =  JSON.stringify(doc);
		test = test.replace(/['"]+/g, '');
		Meteor.call("deleteJeop", test, Session.get('_id'));
	}
});

Template.jeopardy.helpers({
	categories: function(){
		Session.set("doc", this);
		return this.Category;
	}
});

Template.jeopardyCategory.helpers({
	jeopButtons: function(){
		var top = this;
		var doc = Session.get("doc");
		var arr = doc.Questions;
		var qs = [];
		if(typeof doc != 'undefined'){
			arr.forEach(function (item){
				if(item.category == top.topic){
					qs.push(item);
				}
			});
		}
		console.log(qs);
		return qs;
	}
});

Template.jeopardyButton.events({
	'click .checkButton': function(event){
		event.preventDefault();
		// console.log(this.category+this.question);
		var obj = document.getElementById(this.category+this.value);
		// console.log(obj.className);
		obj.className += ' btn-danger ';
	}
});