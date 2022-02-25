//Matias Santacruz
function mostrar()
{
	var nombre;
	var localidad;

    nombre = document.getElementById("elNombre").value;
    localidad = document.getElementById("laLocalidad").value;

    nombre = prompt("ingrese su nombre");
    localidad = prompt("ingrese su localidad");

    alert("su nombre es :" nombre + "su localidad es :" localidad); 
  
}
