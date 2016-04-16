//scripts
alert("Hola! Vamos a realizar el calculo de la medida de la tela");
var alto= prompt("¿Cuantos metros mide de alto?");//vARIABLES
var ancho= prompt("¿Cuantos metros mide de ancho?");//vARIABLES
var respuesta_alto=( parseFloat(alto) / 0.0254);//vARIABLES
var respuesta_ancho=(  parseFloat(ancho) / 0.0254);//vARIABLES
alert("Tu tela mide " + respuesta_alto + " x " + respuesta_ancho + " pulgadas.");