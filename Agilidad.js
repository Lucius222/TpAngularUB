var app= angular.module("Agilidad",[]);

app.controller("controlAgilidad",function($scope){
	$scope.datos={};
	$scope.datos.gano="";
	$scope.datos.Numero1= Math.floor((Math.random() * 10) + 1);
	$scope.datos.Numero2= Math.floor((Math.random() * 10) + 1);
	$scope.datos.Signo="+";
	$scope.datos.Resultado="Signo";
	$scope.datos.TiempoTranscurrido="";
	$scope.datos.NumeroSigno= Math.floor((Math.random() * 3) + 1)
	var Tiempo1=new Time().tostring ();

	$scope.Aceptar=function()
	{
		if 	($scope.datos.Resultado==$scope.datos.Respuesta)
			{
				alert ("Ganaste");
				$scope.datos.gano="Si";
			}	
		else 
			{
				alert ("Intenta de nuevo");
				$scope.datos.gano="No";
			}
			var Tiempo2=new Time().tostring ();
			$scope.datos.TiempoTranscurrido= Tiempo2 - Tiempo1;
		firebase.database().ref("Agilidad/").push($scope.datos);
			
	}
	switch($scope.datos.NumeroSigno)
				{
					case 1 : 
					$scope.datos.Signo="+";
					$scope.datos.resultado= $scope.datos.Numero1 + $scope.datos.Numero2;
					break;
					case 2 :
					$scope.datos.Signo="-";
					$scope.datos.resultado= $scope.datos.Numero1 - $scope.datos.Numero2;
					break;
					case 3 : 
					$scope.datos.Signo="*";
					$scope.datos.resultado= $scope.datos.Numero1 * $scope.datos.Numero2;
					break;
					
				}
				console.info ($scope.datos);

});