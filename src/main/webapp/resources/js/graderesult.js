var app = angular.module('graderesult', []);

app.controller('ViewCtrl', function($scope, $http){
	$scope.$on('loadGrades', function(){
		$scope.loadGrades();
	});
	
	$scope.loadGrades = function(){
		$http.get('/studentkard/user').success(function(data){
			$scope.student = data;
			$http.get('/studentkard/grade/student/' + $scope.student.studentId).success(function(data){
				$scope.grades = data;
			});
		});
	};
	
	$scope.loadGrades();
});

function stringIt(val) {
    return JSON.stringify(val);
};
