var miapliocacion=angular.module ("Iluminacion",[]);
miapliocacion.controller("ControlIluminacion", function($scope){
//definir un objeto JSON en el $scope
$scope.datos={};
//inicializo los valores 
$scope.datos.CantidadDeLamparas=0;
$scope.datos.MarcaDeLampara=0;
$scope.datos.precioDescuento=0;
//muestro mensaje de bienvenida
console.log("Hola mundo");


   $scope.CalcularPrecio=function(){

    //ejemplos de testeo de la instruccion IF
      //var resultado= $scope.datos.CantidadDeLamparas*35;
      //$scope.datos.precioDescuento=resultado;
      
       /*
       $scope.datos.precioDescuento= $scope.datos.CantidadDeLamparas*35;
       if($scope.datos.CantidadDeLamparas>3) 

       {

         $scope.datos.precioDescuento=$scope.datos.precioDescuento*0.9

       } else
       {
           alert("si compra mas de 3 tiene un 10% de descuento");
       }
        

        if($scope.datos.MarcaDeLampara=="ArgentinaLuz") 

        {
        	$scope.datos.precioDescuento=$scope.datos.precioDescuento*0.95
        }
        else	
        {
         alert("si compras argentina luz tenes descuento")
        }
        */
        
        
        $scope.datos.precioDescuento= $scope.datos.CantidadDeLamparas*35;
        if($scope.datos.CantidadDeLamparas>6) 

            {
                 
                 	$scope.datos.precioDescuento=$scope.datos.precioDescuento*0.5;
            

            } else
                {
            alert("si compra mas de 6 tiene 50% de descuento");
                }
                

      
      
        if($scope.datos.CantidadDeLamparas==5)
        {
            if($scope.datos.MarcaDeLampara=="ArgentinaLuz")
            {
             $scope.datos.precioDescuento=$scope.datos.precioDescuento*0.6;
            }
            
            else 
            {
              $scope.datos.precioDescuento=$scope.datos.precioDescuento*0.7;
            }

        } 
        
        if($scope.datos.CantidadDeLamparas==4)
        {
          if($scope.datos.MarcaDeLampara=="ArgentinaLuz" || $scope.datos.MarcaDeLampara=="FelipeLamparas")
            {
             $scope.datos.precioDescuento=$scope.datos.precioDescuento*0.75;
            }
            else 
            {
              $scope.datos.precioDescuento=$scope.datos.precioDescuento*0.80;
            }
        }
       }//fin funcion

});