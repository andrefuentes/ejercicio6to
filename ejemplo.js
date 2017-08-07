var isEven = function(n){
	return n% 2 ==0;
}
if (isEven(104)){
	console.log("es par")

} else{
	console.log("no es par")
}
var saludoFormal = function(nombre){
	return "buenas Tardes " + nombre +"gusto saludarle";
}
var saludoInformal= function(nombre){
	return " Que Onda " +  nombre+" ? ";
}
var saludar =function(saludo,nombre){
	return saludo(nombre);
}
var persona="Andre";
if (persona== "Andre"){
	console.log(saludar(saludoInformal,persona))
}else{
	console.log(saludar(saludoFormal,persona))
}
