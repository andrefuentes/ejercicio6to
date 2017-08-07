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

switch(opcion){
	case 1:
	console.log(Triangulo(base,altura ))
	break;
	case 2:
	console.log(cuadrado(base, altura))
	break;
	case 3:
	console.log(circulo(radio))
}