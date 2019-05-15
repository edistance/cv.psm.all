function muestraModulo(menuOpcion_a_Seleccionada){
	// el parametro 'menuOpcion_a_Seleccionada' corresponde al objeto (<a>) sobre el
	// cual se hizo 'clic', pasado con 'this'
	
  // la siguiente linea obtiene el detalle a mostrar almacenado en el atributo "data-detalle"
  // del elemento html.
  // la variable "detalleAMostrar" contiene el nombre de la imagen a mostrar.
  var detalleAMostrar = menuOpcion_a_Seleccionada.dataset.detalle;
  
  // El id "modulo-detalle" corresponde al elemento img de html donde se mostraran los detalles
  // la variable "muestraDetalle" contiene el elemento html <img>
  var muestraDetalle = document.getElementById("modulo-detalle");
  // La siguiente linea actualiza el contenido del recurso del <img> 
  muestraDetalle.src = 'recursos/' + detalleAMostrar;
}
