//scripts
alert("Hola! Vamos a realizar el presupuesto");
var costo= prompt("¿Cuanto cobra por pintar cada metro cuadrado?");//vARIABLES
var metros_2= prompt("¿Cuantos metros cuadrados hay que pintar?");//vARIABLES
var respuesta=(  parseFloat(costo) * parseFloat(metros_2) );//vARIABLES
alert("El presupuesto seria de: $ " + respuesta );