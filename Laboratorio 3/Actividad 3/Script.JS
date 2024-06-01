alert("Este programa te indica si el día es laboral o no laboral.");
let dia = prompt ("Ingresa el día: ");
dia = dia.toLowerCase()
switch (dia){
    case "lunes":
    mensaje = "El día lunes es laboral.";
    break;
    case "martes":
    mensaje = "El día martes es laboral.";
    break;
    case "miércoles":
    mensaje = "El día miércoles es laboral.";
    break;
    case "jueves":
    mensaje = "El día jueves es laboral.";
    break;
    case "viernes":
    mensaje = "El día viernes es laboral.";
    break;
    case "sábado":
    mensaje = "El día sábado no es laboral.";
    break;
    case "domingo":
    mensaje = "El día domingo no es laboral.";
    break;
    default:
    mensaje = "No ingresaste un día de manera correcta.";
}
alert(mensaje)