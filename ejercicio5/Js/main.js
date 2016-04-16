//scripts
alert("Hola! Vamos a realizar el calculo de tu sueldo semanal");
var sueldo= prompt("¿Cual es tu sueldo por hora?");//vARIABLES
var dias= prompt("¿Cuantos dias trabajaste esta semana?");//vARIABLES
var horas_diarias= prompt("¿Cuantas horas al dia trabajas?");//vARIABLES
var respuesta=(  parseInt(sueldo)*parseInt(horas_diarias)*parseInt(dias) );//vARIABLES
alert("Tu pago semanal sera de " + respuesta);
