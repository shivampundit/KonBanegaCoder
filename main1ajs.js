var app = angular.module("myapp1",[]);
app.controller("mainController", function($scope, $location, $rootScope, $http, $timeout, $window) {


	var fifty_option = 0;
	var peoplePollValue = 0;
	var i = 0;
	$scope.flag = 0;
	$scope.peopleFlag = 0;
	$scope.top_pos = 317;

	
        
        var aud = new Audio("audio/Intro2.mp3").play();
        
    

    $scope.urlParam = function(name){
    	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    	if (results==null) {
       		return null;
    	}
    	return decodeURI(results[1]) || 0;
	};

var myData = [
                {
                "Question":"1. A term in computer terminology is a change in technology a computer is/was being used.",
                "optionA":" Development",
                "optionB":"Growth",
                "optionC":"Advancement",
                "optionD":"Generation",
                "answer":"4",
                "Level":"1",
                "fiftyFifty":["2","1"],
                "peoplePoll":[10,55,15,65]
                },
               {
                "Question":"2.Which one of these stores more data than a DVD ?",
                "optionA":"CD Rom",
                "optionB":"Floppy",
                "optionC":"Blue Ray Disk",
                "optionD":"Red Ray Disk",
                "answer":"3",
                "Level":"2",
                "fiftyFifty":["1","2"],
                "peoplePoll":[30,10,45,15]
                },

              {
                "Question":"3.The term gigabyte refers to",
                "optionA":"1024 bytes",
                "optionB":"1024 MB",
                "optionC":"1024 KB",
                "optionD":"1024 GB",
                "answer":"2",
                "Level":"3",
                "fiftyFifty":["1","3"],
                "peoplePoll":[10,30,50,10]
                },

              {
                "Question":"4.In the C language, the constant is defined _______.",
                "optionA":"Anywhere, but starting on a new line.",
                "optionB":"Before main",
                "optionC":"After main",
                "optionD":"None of the these.",
                "answer":"1",
                "Level":"4",
                "fiftyFifty":["4","3"],
                "peoplePoll":[40,25,5,30]
                },
                
              {
                "Question":"5.Prototype of a function means _____",
                "optionA":"Name of Function",
                "optionB":"Declaration of Function",
                "optionC":"Output of Function",
                "optionD":"Input of a Function",
                "answer":"2",
                "Level":"5",
                "fiftyFifty":["3","4"],
                "peoplePoll":[10,50,20,10]
                },

              {
                "Question":"6.Which is considered a direct entry input device?",
                "optionA":"Optical Scanner",
                "optionB":"Mouse and Digitizer>",
                "optionC":"Lightpen",
                "optionD":"All of The above",
                "answer":"4",
                "Level":"6",
                "fiftyFifty":["3","2"],
                "peoplePoll":[55,25,10,10]
                },

                {
                "Question":"7. The last row number of the excel spreadsheet is",
                "optionA":"65535",
                "optionB":"65536",
                "optionC":"66535",
                "optionD":"none",
                "answer":"2",
                "Level":"7",
                "fiftyFifty":["1","4"],
                "peoplePoll":[10,20,30,40]
                },
              {
                "Question":"8.. Which of the following IC was used in third generation of computers?",
                "optionA":"SSI",
                "optionB":"MSI",
                "optionC":"LSI",
                "optionD":"Both A and B",
                "answer":"4",
                "Level":"8",
                "fiftyFifty":["1","2"],
                "peoplePoll":[5,45,30,20]
                },

              {
                "Question":"9.Which type of computers uses the 8-bit code called EBCDIC?",
                "optionA":"MainFrameComputer",
                "optionB":"microcomputer",
                "optionC":"minicomputer",
                "optionD":"super computer",
                "answer":"1",
                "Level":"9",
                "fiftyFifty":["2","4"],
                "peoplePoll":[50,30,10,10]
                },
                {
                "Question":"10. Where are all the tools displayed in a window??",
                "optionA":"Menu bar",
                "optionB":"status bar",
                "optionC":"standard toolbar",
                "optionD":"title bar",
                "answer":"3",
                "Level":"10",
                "fiftyFifty":["1","2"],
                "peoplePoll":[15,5,30,50]
                }
        ];
	$scope.myData = myData;
	
	$scope.question = $scope.myData[0].Question;
	$scope.optA = myData[0].optionA;
	$scope.optB = myData[0].optionB;
	$scope.optC = myData[0].optionC;
	$scope.optD = myData[0].optionD;
	$scope.correctAnswer = myData[0].answer;
	$scope.money = myData[0].Level;
	$scope.moneyEarned = 0;
	


$scope.nextQuestion = function(){

	
	var aud = new Audio("audio/NextQ.mp3").play();
     i++;
	if(i<10) {
	$scope.question = myData[i].Question;
	$scope.optA = myData[i].optionA;
	$scope.optB = myData[i].optionB;
	$scope.optC = myData[i].optionC;
	$scope.optD = myData[i].optionD;
	$scope.correctAnswer = myData[i].answer;
	$scope.money = myData[i-1].Level;
	$scope.moneyEarned = $scope.money;

	$scope.optStyle1={"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
	$scope.optStyle2={"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
	$scope.optStyle3={"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
	$scope.optStyle4={"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
	$scope.showingNext = {"display":"none"};
	$scope.showingPoints = {"display":"none"};
	$scope.correctWrong = {"display":"none"};

	$scope.top_pos = $scope.top_pos-31;
	$scope.currentMoney = {"background-position-y": $scope.top_pos+"px"};
	$rootScope.response=0;
	}
	if(i==10)
	{
		var value = myData[i-1].Level;
		var name = $scope.urlParam('val');
		$window.location.href = "restartPage.html?money="+value+"&name="+name;
	}
};

$scope.lock = function(){
	$scope.chartStyle = {"display": "none"};
		if($rootScope.response > 0)
		{
		console.log($rootScope.response);
		$scope.lock1 = 1;
		$rootScope.unlock = 2;
		$rootScope.lock=$scope.lock1;
		

		var aud = new Audio("audio/Lock.mp3").play();

		 $timeout(function(){
		 	if($rootScope.unlock==1){
			}	
		else if($rootScope.response == $scope.correctAnswer)
		{	
			
			var aud = new Audio("audio/applause.mp3").play();

		if($rootScope.response == '1')
		{
			$scope.optStyle1={"background":'url("images/correctAnswer.png")',"background-repeat":"no-repeat"};				
			$scope.correctWrong = {"background":'url("images/correct.png")',"background-repeat":"no-repeat","background-position":"center"};
			$scope.showingNext = {"display":"block"};
		}
		else if($rootScope.response == '2'){
			$scope.optStyle2={"background":'url("images/correctAnswer.png")',"background-repeat":"no-repeat"};
			$scope.correctWrong={"background":'url("images/correct.png")',"background-repeat":"no-repeat","background-position":"center"};			
			$scope.showingNext = {"display":"block"};
		}
		else if($rootScope.response == '3'){
			$scope.optStyle3={"background":'url("images/correctAnswer.png")',"background-repeat":"no-repeat"};
			$scope.correctWrong={"background":'url("images/correct.png")',"background-repeat":"no-repeat","background-position":"center"};				
			$scope.showingNext = {"display":"block"};
		}
		else {
			$scope.optStyle4={"background":'url("images/correctAnswer.png")',"background-repeat":"no-repeat"};
			$scope.correctWrong={"background":'url("images/correct.png")',"background-repeat":"no-repeat","background-position":"center"};				
			$scope.showingNext = {"display":"block"};
		}
	}

	else if($rootScope.response != $scope.correctAnswer)
	{
		
		var aud = new Audio("audio/Wrongans.mp3").play();

		if($rootScope.response == '1'){
			$scope.optStyle1={"background":'url("images/wrongAnswer.png")',"background-repeat":"no-repeat"};				
			$scope.correctWrong={"background":'url("images/wrong.png")',"background-repeat":"no-repeat","background-position":"center"};
			$scope.showingPoints = {"display":"block"};
		}
		else if($rootScope.response == '2'){
			$scope.optStyle2={"background":'url("images/wrongAnswer.png")',"background-repeat":"no-repeat"};				
			$scope.correctWrong={"background":'url("images/wrong.png")',"background-repeat":"no-repeat","background-position":"center"};
			$scope.showingPoints = {"display":"block"};
		}
		else if($rootScope.response == '3'){
			$scope.optStyle3={"background":'url("images/wrongAnswer.png")',"background-repeat":"no-repeat"};				
			$scope.correctWrong={"background":'url("images/wrong.png")',"background-repeat":"no-repeat","background-position":"center"};
			$scope.showingPoints = {"display":"block"};
		}
		else{
			$scope.optStyle4={"background":'url("images/wrongAnswer.png")',"background-repeat":"no-repeat"};
			$scope.correctWrong={"background":'url("images/wrong.png")',"background-repeat":"no-repeat","background-position":"center"};
			$scope.showingPoints = {"display":"block"};
		}
		if($scope.correctAnswer == '1')
			$scope.optStyle1={"background":'url("images/correctAnswer.png")',"background-repeat":"no-repeat"};				
		else if($scope.correctAnswer == '2')
			$scope.optStyle2={"background":'url("images/correctAnswer.png")',"background-repeat":"no-repeat"};				
		else if($scope.correctAnswer == '3')
			$scope.optStyle3={"background":'url("images/correctAnswer.png")',"background-repeat":"no-repeat"};				
		else
			$scope.optStyle4={"background":'url("images/correctAnswer.png")',"background-repeat":"no-repeat"};	
	}
$rootScope.lock = 0;
},3500);
}
};
$scope.unlock = function(){
	alert("you have unlocked the selected option");
	$scope.lock1 = 2;
	$rootScope.unlock = 1;
	$rootScope.lock = $scope.lock;
	/*$scope.correctAnswer=myData[i-1].answer;*/

	$scope.optStyle1 = {"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
	$scope.optStyle2 = {"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
	$scope.optStyle3 = {"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
	$scope.optStyle4 = {"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
};

$scope.optionSelected1 = function() {
	$rootScope.response = 1;
	$scope.optStyle1 = {"background":'url("images/answerClicked.png")',"background-repeat":"no-repeat"};
	$scope.optStyle2 = {"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
	$scope.optStyle3 = {"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
	$scope.optStyle4 = {"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
};
$scope.optionSelected2 = function() {
	$rootScope.response = 2;
	$scope.optStyle1 = {"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
	$scope.optStyle2 = {"background":'url("images/answerClicked.png")',"background-repeat":"no-repeat"};
	$scope.optStyle3 = {"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
	$scope.optStyle4 = {"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
};
$scope.optionSelected3 = function() {
	$rootScope.response = 3;
	$scope.optStyle1 = {"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
	$scope.optStyle2 = {"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
	$scope.optStyle3 = {"background":'url("images/answerClicked.png")',"background-repeat":"no-repeat"};
	$scope.optStyle4 = {"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
};
$scope.optionSelected4 = function() {
	$rootScope.response = 4;
	$scope.optStyle1 = {"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
	$scope.optStyle2 = {"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
	$scope.optStyle3 = {"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
	$scope.optStyle4 = {"background":'url("images/answerClicked.png")',"background-repeat":"no-repeat"};
};

$scope.viewEarnedPoints =function() {
	var value = $scope.moneyEarned;
	var name = $scope.urlParam('val');
	$window.location.href = "restartPage.html?money="+value+"&name="+name;
	new Audio("audio/Correctans.mp3").play();
	
};

$scope.fiftyFifty = function() {
	
	$scope.crossStyleFiftyFifty = {"display":"block"};
	if($scope.flag==0){

		
		var aud = new Audio("audio/5050-r.mp3").play();
	$scope.fiftyValue1 = myData[i].fiftyFifty[0];
	$scope.fiftyValue2 = myData[i].fiftyFifty[1];

	if($scope.fiftyValue1==1) {
		$scope.optA="";
	}
	else if($scope.fiftyValue1==2) {
		$scope.optB="";
	}
	else if($scope.fiftyValue1==3) {
		$scope.optC="";
	}
	else {
		$scope.optD="";
	}

	if($scope.fiftyValue2==1) {
		$scope.optA="";
	}
	else if($scope.fiftyValue2==2) {
		$scope.optB="";
	}
	else if($scope.fiftyValue2==3) {
		$scope.optC="";
	}
	else {
		$scope.optD="";
	}
	$scope.flag=1;
}
};
$scope.peoplePoll = function() {

if($scope.peopleFlag==0) {
	
	var aud = new Audio("audio/peoplepoll.mp3").play();
	$timeout(function () {
	if($scope.peopleFlag==0)
	{
	$scope.chartStyle = {"display":"block"};
	$scope.correctWrong = {"display":"block"};
	$scope.crossStylePeoplePoll = {"display":"block"};
	$scope.peoplePoll1 = myData[i].peoplePoll[0];
	$scope.peoplePoll2 = myData[i].peoplePoll[1];
	$scope.peoplePoll3 = myData[i].peoplePoll[2];
	$scope.peoplePoll4 = myData[i].peoplePoll[3];
    }
 $scope.peopleFlag=1;
 }, 3000);
}
};


});