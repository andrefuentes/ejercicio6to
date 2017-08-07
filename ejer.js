var Triangulo= function(base,altura){
	return (base*altura)/2;
}
var cuadrado= function(base,altura){
	return base*altura;
}
var circulo =function(radio){
	return 3.14*(radio*radio);
}
var area=function(operacion,dato1,dato2){
	return operacion(dato1,dato2);
}
var opcion=3;
if (opcion==1)
{
	console.log(area(Triangulo,base,altura))
}elif(opcion==2){
	console.log(area(cuadrado,base,altura))
}else(opcion==3){
	console.log(area(circulo,radio))
}