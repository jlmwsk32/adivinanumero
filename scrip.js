/*document.addEventListener('DOMContentLoaded', function() {
    var adivinarBtn = document.getElementById('adivinar-btn');
    
    adivinarBtn.addEventListener('click', function() {
      adivinarNumero();
    });
  
    function generarNumeroAleatorio() {
      return Math.floor(Math.random() * 100) + 1;
    }
  
    function adivinarNumero() {
      var numeroAleatorio = generarNumeroAleatorio();
      var numeroAdivinado;
  
      do {
        numeroAdivinado = prompt("¿Es " + numeroAleatorio + " el número que estás pensando? (Sí/No)");
  
        if (numeroAdivinado === null) {
          return; // El usuario ha cancelado, salimos de la función
        }
  
        numeroAdivinado = numeroAdivinado.toLowerCase(); // Convertir la entrada del usuario a minúsculas
  
        if (numeroAdivinado === "si") {
          alert("¡Tu número es " + numeroAleatorio + "! ¡Excelente decisión!");
          return; // Adivinamos el número, salimos de la función
        } else if (numeroAdivinado === "no") {
          // El número no fue adivinado, generamos otro número aleatorio y continuamos
          numeroAleatorio = generarNumeroAleatorio();
        } else {
          alert("Por favor, responde con 'Sí' o 'No'."); // Mensaje de error si la entrada no es válida
        }
      } while (true); // Bucle infinito hasta que el número sea adivinado o el usuario cancele
    }
  });
  */

  document.addEventListener('DOMContentLoaded', function() {

    function generarNumeroAleatorio() {
        return Math.floor(Math.random() * 100) + 1;
      }


    // Definimos la variable
    let miVariable = generarNumeroAleatorio();
    let variableBooleana= false;

    let botonCorrecto = document.getElementById('botonCorrecto');

    botonCorrecto.addEventListener('click', function() {
        alert("Tu numero es el " + miVariable + " excelente decición");
      });



      let botonIncorrecto = document.getElementById('botonIncorrecto');

      botonIncorrecto.addEventListener('click', function() {
        adivinarNumero();
        });

    // Accedemos al elemento donde queremos mostrar el valor de la variable
    let resultadoDiv = document.getElementById("resultado");
    
    // Actualizamos el contenido del elemento con el valor de la variable
    resultadoDiv.innerText = miVariable;
});

function adivinarNumero() {
  var respuesta;
  var min = 1; // Valor mínimo
  var max = 100; // Valor máximo
  var intentos = 0; // Contador de intentos

  do {
    // Calculamos el número medio entre el mínimo y el máximo
    var medio = Math.floor((min + max) / 2);

    // Preguntamos al usuario si el número medio es el número que ha elegido
    respuesta = confirm("¿Es " + medio + " tu número elegido?");

    // Incrementamos el contador de intentos
    intentos++;

    if (respuesta) {
      // Si el usuario confirma que el número medio es correcto, mostramos un mensaje de éxito
      alert("¡Eureka! ¡He adivinado tu número en " + intentos + " intentos!");
      return;
    } else {
      // Si el usuario dice que no, preguntamos si el número es mayor o menor
      respuesta = confirm("¿Es mayor que " + medio + "?");
      
      // Ajustamos los valores mínimo y máximo en consecuencia
      if (respuesta) {
        min = medio + 1;
      } else {
        max = medio - 1;
      }
    }
  } while (min <= max);

  // Si llegamos aquí, el usuario ha mentido o ha ocurrido un error
  alert("¡No has sido honesto o ha ocurrido un error!");
}

