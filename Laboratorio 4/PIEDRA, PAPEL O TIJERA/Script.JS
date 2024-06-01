function jugar(eleccionJugador) {
    const opciones = ["piedra", "papel", "tijera"];
    const eleccionComputadora = opciones[Math.floor(Math.random() * opciones.length)];

    let mensaje = "";
    if (eleccionJugador === eleccionComputadora) {
        mensaje = "¡Empataron!";
    } else if (
        (eleccionJugador === "piedra" && eleccionComputadora === "tijera") ||
        (eleccionJugador === "papel" && eleccionComputadora === "piedra") ||
        (eleccionJugador === "tijera" && eleccionComputadora === "papel")
    ) {
        mensaje = "¡Ganaste!";
    } else {
        mensaje = "¡Perdiste!";
    }
    document.getElementById("TuEleccion").textContent = "Elegiste " + eleccionJugador + "." ;
    document.getElementById("EleccionPC").textContent = "La computadora eligió " + eleccionComputadora + ". " ;
    document.getElementById("Resultado").textContent = mensaje;
}