var app= angular.module("edad",[]);

app.controller("controledad",function($scope){
	$scope.datos={}; //En esta linea creo el objeto datos
	$scope.datos.edad= 0;
	$scope.MostrarFranjaEdad=function(){

		/* if ($scope.datos.edad < 13)  
		{
			alert("Niño")
		}
		else  { 
			if ($scope.datos.edad >= 13 && $scope.datos.edad < 17)  
			{
			alert("Adolecente")
			}
			else
			{
				alert("Mayor")
			}
			
		} */ // Forma 1
		if ($scope.datos.edad < 13)  
		{
			alert("Niño")
		}
		else  { 
			if ($scope.datos.edad > 18)  
			{
			alert("Adolecente")
			}
			else
			{
				alert("Mayor")
			}
			
		}
		


	}

});