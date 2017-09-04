var hook1 = {
	onSuccess: function(formType, result) {
		// console.log(result);
		sAlert.success('Forum EasyID: '+result, {
			effect: 'genie', 
			position: 'top', 
			timeout: '15000', 
			onRouteClose: false, 
			stack: false, 
			offset: '50px'
		});
	},
};

var hook2 = {
  onSubmit: function(insertDoc, updateDoc, currentDoc) {
  	console.log(insertDoc.Easy_ID);
  	var doc = Collections.Forums.findOne({"Easy_ID":insertDoc.Easy_ID}) 
  	if(typeof doc != 'undefined'){
  		
  		this.done(null, insertDoc.Easy_ID);
  	} else {
  		this.done(new Error());
  	}
  },
  onSuccess: function(formType, result) {
  	Router.go('viewForumSubmissions', {"Easy_ID":result});
  },
};

var hook3 = {
  onSuccess: function(formType, result) {
    Router.go('home');
  }
};

AutoForm.hooks({
  insertForum: hook1,
  viewFSubs: hook2,
  respond: hook3,
});


Template.subForum.events({
  "submit .viewForum": function(event){
    event.preventDefault();
    var text = document.getElementById('easyid').value;
    var doc = Collections.Forums.findOne({"Easy_ID":text});
    if(typeof doc != 'undefined'){
      Router.go('viewForumSubmissions', {"Easy_ID":text});  
    }
    
  }
});

Template.viewForumSubmissions.helpers({
  answers: function() {
    var Forum = Collections.Forums.findOne({"Easy_ID":this.Easy_ID}); 
    var answers = [];
    var arr = Forum.Answer;
    arr.forEach(function(item) {
      answers.push(item.answer);
    });
    
    return answers
  }
});

Template.joinForum.events({
  "submit .viewForum": function(event){
    event.preventDefault();
    var text = document.getElementById('easyid').value;
    var doc = Collections.Forums.findOne({"Easy_ID": text});
    if(typeof doc != 'undefined'){
      Router.go('enterForumSubmissions', {"Easy_ID":text});  
    }
  }
});

Template.enterForumSubmissions.events({
  'click .sub': function (event) {
    Session.set('Doc', this);
  },
});

Template.enterForumSubmissions.helpers({
    doc: function () {
    return Session.get('Doc');
  }
});

