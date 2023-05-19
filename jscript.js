
		/* Función mostrarSegmento realiza la validación si el área de texto encriptarDesencriptarTexto
		 se encuentra vacio para habilitar o deshabilitar los div previo y posterior */
		function mostrarSegmento() {

				/* Se aplica un setTimeout para que el proceso */
			    setTimeout(() => {

			    	/* Creación de variables let para realizar las condiciones */
				    let textoAProcesar = document.getElementById("encriptarDesencriptarTexto").value;
				    let textoEncriptado = document.getElementById("textoEncriptado");

				    /* Creación de las variables let segmentoPrevio y segmentoPosterior que obtienen el id 
				    de los div que tienen dichos nombres para realizar la aplicación del estilo display
				    block o none que habilitará o deshabilitará cada elemento */
				    let segmentoPrevio = document.getElementById("previo");
				    let segmentoPosterior = document.getElementById("posterior");				    

					/* Primera validación, si la variante textoAProcesar contiene texto, ingresa y 
					bloquea el div previo para habilitar el div posterior*/			    
				    if (textoAProcesar == "") {

					      segmentoPrevio.style.display = "block";
					      segmentoPosterior.style.display = "none";
				    } 

					/* Sino cumple con la primera validación, la variante textoAProcesar no contiene texto, ingresa y 
					habilita el div previo para bloquea el div posterior*/	
				    else 
				    {					      
					      segmentoPrevio.style.display = "none";
					      segmentoPosterior.style.display = "block";

				    }}, 0); 
		}




		/* Funnción encriptarTexto() en las variables textoDeEntrada y textoDeSalida 
			reciben el id de cada área de texto, posteriormente la variable textoRecido recibe 
			valor de textoDeEntrada, la variable textoEncriptado se iguala a la función 
			procesoEncriptar que pasa como parámetros en textoRecibido para posteriormente
			pasarlo como valor a la variable textoDeSalida
		*/
		function encriptarTexto(){

		    let textoDeEntrada = document.getElementById("encriptarDesencriptarTexto");
		    let textoRecibido = textoDeEntrada.value;
		    let textoEncriptado = procesoEncriptar(textoRecibido);

		    mostrarSegmento();
		    let textoDeSalida = document.getElementById("textoEncriptado");		    
		    textoDeSalida.value = textoEncriptado;

		    }



		/* Funnción desencriptarTexto() en las variables textoDeEntrada y textoDeSalida 
			reciben el id de cada área de texto, posteriormente la variable textoRecido recibe 
			valor de textoDeEntrada, la variable textoDesencriptado se iguala a la función 
			procesoDesencriptar que pasa como parámetros en textoRecibido para posteriormente
			pasarlo como valor a la variable textoDeSalida
		*/

		function desencriptarTexto(){

		    let textoDeEntrada = document.getElementById("encriptarDesencriptarTexto");
		    let textoRecibido = textoDeEntrada.value;
		    let textoDesencriptado = procesoDesencriptar(textoRecibido);

		    let textoDeSalida = document.getElementById("textoEncriptado");		    
		    textoDeSalida.value = textoDesencriptado;

		    }


		
		/* Declaración de la variable vocalesEncriptar realiza el reemplazo de cada 
		vocal por el segmento que la sustituirá */
		let vocalesEncriptar = {
		    "e": "enter",
		    "i": "imes",
		    "a": "ai",
		    "o": "ober",
		    "u": "ufat" 
		}



		/* Función procesoEncriptar() recibe como parámetro el texto recibido
		retornando un texto reemplazando la vocales atraves del llamado de vocalesEncriptar
		*/
		function procesoEncriptar(texto) {

			    return texto.replace(/[aeiou]/g, function(match) { 
			      return vocalesEncriptar[match];
			    });
		
		}



		 /* Función procesoDesencriptar recibe como parámetro el texto recibido
		 retornando un texto que reemplaza 
		 */
		function procesoDesencriptar(texto) {

		    	return texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
		}



		/*  Función copiar permite copiar del área de texto procesado al clipboard del navegador, mostrando
		una alerta tras realizar la acción */
		function copiar() {

			  let texto = document.getElementById("textoEncriptado").value;
			  navigator.clipboard.writeText(texto);

			  alert("Texto copiado");
			
		}



		/* Funcion pegar, pegar del clipboard del navegador el texto que se encuentre en el portapapeles, pegando al 
		área de texto a procesar */
		function pegar() {
			  
			let pasteTextarea = document.querySelector('.encriptarDesencriptarTexto');
			navigator.clipboard.readText().then((text) => { pasteTextarea.textContent = text; })			      			
			  
		}



		/* Realiza limpieza de las área de texto, posteriormente llama a la función mostrarSegmento para realizar
		limpieza
		*/
	
		function limpiar() {
		    document.getElementById("textoEncriptado").value = "";
		    document.getElementById("encriptarDesencriptarTexto").value = "";
		    mostrarSegmento();
		    }  
  

