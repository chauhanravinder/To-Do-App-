 var app = angular.module('todoApp', []);
 
 app.controller('app', function($scope){
	$scope.tasks = [];
	
	var taskData = localStorage['tasklist'];
	if(taskData !== undefined)
	{
		$scope.tasks = JSON.parse(taskData);
	}
	
	
	$scope.searchEnter = function(){
		if(event.which == 13 && $scope.task != "")   //13 is the keynumber of Enter Key
		{
			$scope.addTask();
		}

	};
	
	$scope.addTask = function(){
		$scope.tasks.push({'taskMsg':$scope.task, 'status':false});
	    console.log($scope.tasks);
		$scope.task = "";
		localStorage['tasklist'] = JSON.stringify($scope.tasks);
       console.log(localStorage);		
	};
	
	$scope.edit = function(msg){
		console.log($scope.tasks.indexOf(msg));
		for(i=0; i<$scope.tasks.length; i++)
		{
			if($scope.tasks[i].taskMsg == msg)
			{
				$scope.tasks[i].taskMsg = event.target.innerText;
				$scope.tasks[i].taskMsg = event.target.innerText;
				
			}
		}
		localStorage['tasklist'] = JSON.stringify($scope.tasks);
		
		event.target.contentEditable = event.target.contentEditable == "false" ? "true" : "false";
	
	};
	
	$scope.enterAgain = function(msg){
		if(event.which == 13 && msg != "")   //13 is the keynumber of Enter Key
		{
			$scope.edit(msg);
		
		}
		
	};
	
	
	
	
 });
		
     