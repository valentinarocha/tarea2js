window.onload = function() {
  console.log("Página cargada, configurando la galería.");
  const images = document.querySelectorAll('.preview');

  for(let i = 0; i < images.length; i++) {
    images[i].setAttribute('tabindex', '0'); // Añade tabindex para que sean accesibles
    images[i].addEventListener('focus', function() {
      console.log('Focus en imagen: ' + this.alt);
      upDate(this);
    });
    images[i].addEventListener('blur', function() {
      console.log('Blur en imagen: ' + this.alt);
      unDo();
    });
  }
}

function upDate(previewPic){
    // Comprobación: Verifica que la función se ejecuta correctamente
    console.log("Evento onmouseover activado.");

    // Muestra información del elemento sobre el que estás pasando el cursor
    console.log("Alt:", previewPic.alt);
    console.log("Src:", previewPic.src);

    // Cambiar el fondo del div con id "image" a la imagen de la miniatura
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";

    // Cambiar el texto del div al atributo alt de la imagen
    document.getElementById("image").innerHTML = previewPic.alt;
  
	}

	function unDo(){
     // Comprobación: Avisa que se activó el evento mouseout
    console.log("Evento onmouseout activado.");

    // Restaurar el fondo a la imagen por defecto (como indica el CSS: url(''))
    document.getElementById("image").style.backgroundImage = "url('')";

    // Restaurar el texto original
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
		
	}