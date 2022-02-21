/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado;
	contador=0;
	acumulador=0,
	respuesta="si";


    while(respuesta == "si")
    {
    	numeroIngresado = prompt("ingrese un numero");
    	numeroIngresado = parseInt(numeroIngresado);

    	acumulador = acumulador + numeroIngresado;
    	contador = contador + 1; 

    }

    // alert("holaestamos dentro del while");
    respuesta = prompt("¿Quiere seguir ingresando numeros? (si o no)");
    while(respuesta != "si" && respuesta != "no")
    {
    	 respues = prompt("ERROR. ¿Quiere seguir ingresando numeros? (si o no)");

    }

    document.getElementById("txtIdSuma").value=acumulador;
    document.getElementById("txtIdPromedio").value=acumulador/contador;

	
}//FIN DE LA FUNCIÓN