var hook1 = {
  onSuccess: function(formType, result) {
  	sAlert.success('Poll EasyID: '+result, {
		effect: 'genie', 
		position: 'top', 
		timeout: '15000', 
		onRouteClose: false, 
		stack: false, 
		offset: '50px'
	});
    Router.go('pollResults', {"Easy_ID":result});
  }
};

AutoForm.hooks({
  insertPoll: hook1,
});

Template.cat.events({
    'click #deleteCat': function(event){
        event.preventDefault();
        var test =  JSON.stringify(this);
        test = test.replace(/['"]+/g, '');
        Meteor.call("deleteCat", test, Session.get('_id'));
    }
});

Template.createPoll.events({
    "click #pollresultsview": function(event){
        event.preventDefault();
        var result = document.getElementById('easyid').value;
        Session.set("Easy_ID", result);
        Router.go('pollResults', {"Easy_ID":result})
    }
});

Template.joinPoll.events({
  "click #pollview": function(event){
    event.preventDefault();
    var text = document.getElementById('easyid').value;
    var doc = Collections.Polls.findOne({"Easy_ID":text});
    if(typeof doc != 'undefined'){
      Session.set("Easy_ID", text);
      Router.go('takePoll', {"Easy_ID":text});  
    }
    
  }
});

Template.pollButton.events({
    "click .pollSubmit":function(event){
        event.preventDefault();
        var doc = Collections.Polls.findOne({"Easy_ID":Session.get("Easy_ID")});
        if(this == doc.Answer_1){
            Collections.Polls.update({
                "_id":doc._id
            },
            {
                $inc:{"Results.Answer_1":1},
            });
        }
        else if(this == doc.Answer_2){
            Collections.Polls.update({
                "_id":doc._id
            },
            {
                $inc:{"Results.Answer_2":1},
            });
        }
        else if(this == doc.Answer_3){
            Collections.Polls.update({
                "_id":doc._id
            },
            {
                $inc:{"Results.Answer_3":1},
            });
        }
        else if(this == doc.Answer_4){
            Collections.Polls.update({
                "_id":doc._id
            },
            {
                $inc:{"Results.Answer_4":1},
            });
        }
        Router.go('waitPoll', {"Easy_ID": doc.Easy_ID});
    }
});

Template.poll.helpers({
    answers: function(){
        var arr = [];
        arr.push(this.Answer_1);
        arr.push(this.Answer_2);
        arr.push(this.Answer_3);
        arr.push(this.Answer_4);
        return arr;
    }
});


function builtDrillDown() {
    var doc = Collections.Polls.findOne({"Easy_ID":Session.get("Easy_ID")});
    $('#container-drilldown').highcharts({
        
        chart: {
            type: 'column'
        },
        title: {
            text: 'Poll Results'
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span><br/>'
        },
        series: [{
            name: "Answers",
            colorByPoint: true,
            data: [{
                name: doc.Answer_1,
                y: doc.Results.Answer_1,
            }, {
                name: doc.Answer_2,
                y: doc.Results.Answer_2,
            }, {
                name: doc.Answer_3,
                y: doc.Results.Answer_3,
            }, {
                name: doc.Answer_4,
                y: doc.Results.Answer_4,
            }]
        }],
    });
}

/*
 * Call the function to built the chart when the template is rendered
 */
Template.drillDown.rendered = function() {    
    builtDrillDown();
}