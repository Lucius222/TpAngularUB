var app= angular.module("Piedrapapelotijera",[]);

app.controller("controlPiedrapapelotijera",function($scope){
	$scope.datos={};
	$scope.datos.resultado="";
	$scope.datos.fecha="";
	$scope.datos.numerosecreto= Math.floor((Math.random() * 3) + 1);
	switch($scope.datos.numerosecreto)
				{
					case 1 : 
					$scope.datos.eleccion="piedra";
					break;
					case 2 :
					$scope.datos.eleccion="papel";
					break;
					case 3 : 
					$scope.datos.eleccion="tijera";
					break;
					
				}
	// console.info($scope.datos);

	$scope.piedra=function(){
		console.log("Piedra");
		$scope.datos.fecha= new Date().toString();
		if($scope.datos.eleccion== "piedra")
		{
			alert("Empate"); 
			$scope.datos.resultado= "Empate";
		}
		else 
		{
			if ($scope.datos.eleccion=="papel")
			{
				alert("Perdio");
				 $scope.datos.resultado="Perdio";
			}
			else
			{
				alert("Gano");
				$scope.datos.resultado="Gano";
			}
		}
		firebase.database().ref("Piedrapapelotijera/").push($scope.datos);
	} // finalizacion piedra
	

	$scope.papel=function(){
		console.log("Papel");
		$scope.datos.fecha= new Date().toString();
		switch($scope.datos.eleccion)
		{
			case "piedra":
				alert("Gano");
				$scope.datos.resultado="Gano";
			break;
			case "papel":
				alert("Empate");
				$scope.datos.resultado="Empate";
			break;
			case "tijera":
				alert("Perdio")
				$scope.datos.resultado="Perdio";
			break;
		}
		firebase.database().ref("Piedrapapelotijera/").push($scope.datos);
	}
	

	$scope.tijera=function(){
		console.log("Tijera");
		$scope.datos.fecha= new Date().toString();
		if($scope.datos.eleccion== "piedra")
		{
			alert("Perdio")
			$scope.datos.resultado="Perdio";
		}
		else 
		{
			if ($scope.datos.eleccion=="papel")
			{
				alert("Gano")
				$scope.datos.resultado="Gano";
			}
			else
			{
				alert("Empate")
				$scope.datos.resultado="Empate";
			}
		}
		firebase.database().ref("Piedrapapelotijera/").push($scope.datos);
	}

});