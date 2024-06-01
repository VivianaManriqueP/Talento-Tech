let NumeroAleatorio = Math.floor(Math.random() * 100) + 1; // Genera número aleatorio entre 1 y 100
let intentosRestantes = 8;

function Adivina() {
    let numeroIngresado = parseInt(document.getElementById("numeroIngresado").value);//Guarda en numeroIngresado el número ingresado en el HTML
    let mensaje = "";

    if (numeroIngresado === NumeroAleatorio) {
        mensaje = "¡Adivinaste! El número secreto es " + NumeroAleatorio + ".";
       FinJuego();
    } else if (numeroIngresado < NumeroAleatorio) {
        intentosRestantes--;
        mensaje = "El número secreto es mayor que " + numeroIngresado + ". Te quedan " + intentosRestantes + " intentos.";
    } else {
        intentosRestantes--;
        mensaje = "El número secreto es menor que " + numeroIngresado + ". Te quedan " + intentosRestantes + " intentos.";
    }

    if (intentosRestantes === 0 && numeroIngresado !== NumeroAleatorio) {
        mensaje = "¡Se acabaron los intentos! Perdiste. El número secreto era " + NumeroAleatorio + ".";
        FinJuego();
    }

    document.getElementById("Resultado").textContent = mensaje;
}

function FinJuego() {
    document.getElementById("numeroIngresado").disabled = true; //Deshabilita el campo numeroIngresado- El usuario no podrá escribir en él.
    document.getElementById("enviar").disabled = true;//Deshabilita el botón enviar
    document.getElementById("reset").style.display = 'block';//Hace visible este botón
}

function Reinicia() {
    NumeroAleatorio = Math.floor(Math.random() * 100) + 1; //Genera un nuevo número aleatorio
    intentosRestantes = 8; //Reinicia en 8 intentos
    document.getElementById("numeroIngresado").value = ''; //Borra este campo de entrada
    document.getElementById("numeroIngresado").disabled = false; //Habilita el campo de entrada
    document.getElementById("enviar").disabled = false; //Habilita el botón enviar
    document.getElementById("Resultado").textContent = ''; //Vacía el espacio de Resultado
    document.getElementById("reset").style.display = 'none';//Oculta el boton de reset
}
