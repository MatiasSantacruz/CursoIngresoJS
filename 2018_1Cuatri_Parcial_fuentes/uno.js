/*Matias Santacruz*/
function mostrar()
{
 var ancho;
 var largo;
 var perimetro;

 ancho=prompt("ingresar ancho del rectangulo");
 ancho=parseInt(ancho);
 largo=prompt("ingresar largo del rectangulo");
 largo=parseInt(largo);

 perimetro= largo * 2 + ancho * 2;

 alert(perimetro); 
 
}
