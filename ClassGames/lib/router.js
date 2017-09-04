Router.configure({
  layoutTemplate: 'appbody',
  notFoundTemplate: 'appNotFound',
  loadingTemplate: 'appLoading',
});

Router.route('home', {
  path: '/',
  action: function() {
    this.render('home');
  }
});

Router.route('about', {
  path: 'about',
  action: function() {
    this.render('about');
  }
});

Router.route('createForum',{
  path: 'createForum',
  waitOn: function() {
    return Meteor.subscribe('Forums');
  },
  action: function() {
    this.render('createForum');
  },
});

Router.route('joinForum', {
  path: 'joinForum',
  waitOn: function() {
    return Meteor.subscribe('Forums');
  },
  action: function() {
    this.render('joinForum');
  },
  data: function() {
    return Collections.Forums.findOne({"_id":this.params._id});
  }
});

Router.route('viewForumSubmissions', {
  path: '/viewForumSubmissions/:Easy_ID',
  waitOn: function(){
    return Meteor.subscribe('Forums');
  },
  action: function() {
    this.render('viewForumSubmissions');
  },
  data: function() {
    return Collections.Forums.findOne({"Easy_ID":this.params.Easy_ID});
  }
});

Router.route('enterForumSubmissions', {
  path: '/enterForumSubmissions/:Easy_ID',
  waitOn: function(){
    return Meteor.subscribe('Forums');
  },
  action: function() {
    this.render('enterForumSubmissions');
  },
  data: function() {
    return Collections.Forums.findOne({"Easy_ID":this.params.Easy_ID});
  }
});

Router.route('questionSession', {
  path: 'questionSession/:_id',
  waitOn: function() {
    return Meteor.subscribe('Sessions');
  },
  action: function() {
    if (this.ready()) {
      this.render('questionSession');
    }
  },
  data: function() {
    return Collections.Sessions.findOne({"_id":this.params._id});
  }
});

Router.route('createWhatAmI', {
  path: 'createWhatAmI',
  action: function() {
    this.render('createWhatAmI');
  },
});

Router.route('addVocab', {
  path: 'addVocab/:Easy_ID',
  waitOn: function() {
    return Meteor.subscribe('WhatAmI');
  },
  action: function() {
    if(this.ready()) {
      this.render('addVocab');
    }
  },
  data: function() {
    return Collections.WhatAmI.findOne({"Easy_ID":this.params.Easy_ID});
  }
});

Router.route('joinWhatami', {
  path: 'joinWhatami',
  waitOn: function() {
    Meteor.subscribe('WhatAmI');
  },
  action: function(){
    if(this.ready()){
      this.render('joinWhatami');
    }
  }
});

Router.route('playWhatami',{
  path: 'playWhatami/:Easy_ID',
  waitOn: function() {
    return Meteor.subscribe('WhatAmI');
  },
  action: function() {
    if(this.ready()) {
      this.render('playWhatami');
    }
  },
  data: function() {
    return Collections.WhatAmI.findOne({"Easy_ID":this.params.Easy_ID});
  }
});

Router.route('createWorld', {
  path: 'createWorld',
  action: function() {
    if(this.ready()){
      this.render('createWorld');
    }
  },
});

Router.route('addWorldQuestion',{
  path: 'addWorldQuestion/:Easy_ID',
  waitOn: function() {
    Meteor.subscribe('World');
  },
  action: function(){
    if(this.ready()){
      this.render('addWorldQuestion');
    }
  },
  data: function() {
    return Collections.World.findOne({"Easy_ID":this.params.Easy_ID});
  },
});

Router.route('joinWorld', {
  path: 'joinWorld',
  waitOn: function() {
    return Meteor.subscribe('World');
  },
  action: function(){
    if(this.ready()){
      this.render('joinWorld');
    }
  },
});

Router.route('createJeopardy', {
  path: 'createJeopardy',
  action: function() {
    if(this.ready()){
      this.render('createJeopardy');
    }
  },
});

Router.route('joinJeopardy', {
  path: 'joinJeopardy',
  waitOn: function() {
    return Meteor.subscribe('Jeopardy');
  },
  action: function(){
    if(this.ready()){
      this.render('joinJeopardy');
    }
  },
});

Router.route('createPoll', {
  path: 'createPoll',
  action: function() {
    if(this.ready()){
      this.render('createPoll');
    }
  },
});

Router.route('joinPoll', {
  path: 'joinPoll',
  waitOn: function() {
    return Meteor.subscribe('Polls');
  },
  action: function(){
    if(this.ready()){
      this.render('joinPoll');
    }
  },
});

Router.route('playWorld',{
  path: 'playWorld/:Easy_ID',
  waitOn: function() {
    return Meteor.subscribe('World');
  },
  action: function() {
    if(this.ready()) {
      this.render('playWorld');
    }
  },
  data: function() {
    return Collections.World.findOne({"Easy_ID":this.params.Easy_ID});
  }
});

Router.route('pollResults',{
  path: 'pollResults/:Easy_ID',
  waitOn: function() {
    return Meteor.subscribe('Polls');
  },
  action: function() {
    if(this.ready()) {
      this.render('pollResults');
    }
  },
  data: function() {
    return Collections.Polls.findOne({"Easy_ID":this.params.Easy_ID});
  }
});

Router.route('takePoll',{
  path: 'takePoll/:Easy_ID',
  waitOn: function() {
    return Meteor.subscribe('Polls');
  },
  action: function() {
    if(this.ready()) {
      this.render('takePoll');
    }
  },
  data: function() {
    return Collections.Polls.findOne({"Easy_ID":this.params.Easy_ID});
  }
});

Router.route('waitPoll',{
  path: 'waitPoll/:Easy_ID',
  waitOn: function() {
    return Meteor.subscribe('Polls');
  },
  action: function() {
    if(this.ready()) {
      this.render('waitPoll');
    }
  },
  data: function() {
    return Collections.Polls.findOne({"Easy_ID":this.params.Easy_ID});
  }
});

Router.route('jeopCategories', {
  path: 'jeopCategories/:Easy_ID',
  waitOn: function(){
    return Meteor.subscribe('Jeopardy');
  },
  action: function() {
    this.render('jeopCategories');
  },
  data: function() {
    return Collections.Jeopardy.findOne({"Easy_ID":this.params.Easy_ID});
  }
});

Router.route('jeopQuestions', {
  path: 'jeopQuestions/:Easy_ID',
  waitOn: function(){
    return Meteor.subscribe('Jeopardy');
  },
  action: function() {
    this.render('jeopQuestions');
  },
  data: function() {
    return Collections.Jeopardy.findOne({"Easy_ID":this.params.Easy_ID});
  }
});

Router.route('jeopardy', {
  path: 'jeopardy/:Easy_ID',
  waitOn: function(){
    return Meteor.subscribe('Jeopardy');
  },
  action: function() {
    this.render('jeopardy');
  },
  data: function() {
    return Collections.Jeopardy.findOne({"Easy_ID":this.params.Easy_ID});
  }
});