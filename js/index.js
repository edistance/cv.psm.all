window.addEventListener("load", muestraModuloInicio, false);
function muestraModuloInicio()
{
	var muestraModulo = document.getElementById("modulos");
	// muestraModulo.innerHTML = '<p>recursos/keyboard-shortcuts-linux.pdf</p>';
	// muestraModulo.innerHTML = recursos/keyboard-shortcuts-linux.pdf;
	//'<iframe src="alumnos-consulta.html" width="100%" height="500" scrolling="auto" />';
}
function muestraModulo(menuPrincipal_li_Seleccionada)
{
	// el parametro 'menuPrincipal_li_Seleccionada' corresponde al objeto (li) sobre el
	// cual se hizo 'clic'.
	
	// el atributo 'modulo' es un atributo definido por el usuario en la etiqueta li del menu
	//  y contiene el nombre del archivo html correspondiente.
	var moduloAMostrar = menuPrincipal_li_Seleccionada.getAttribute('modulo');
	// el parametro 'modulos' corresponde al elemento section donde se muestran los modulos.
	var muestraModulo = document.getElementById("modulos");
	muestraModulo.innerHTML = 
	'<iframe src="' + moduloAMostrar + '" width="100%" height="500" scrolling="auto" />';
}

