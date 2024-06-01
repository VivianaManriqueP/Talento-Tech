alert("Este programa te indica el día de la semana a partir de un número entero.");
let n = Number(prompt("Ingresa el número del día (1 a 7): "));
let mensaje = "";

switch (n){case 1:
                mensaje = "El día "+n+ " es lunes.";
            break;
            case 2:
                mensaje = "El día "+n+ " es martes.";
                break;
            case 3:
                mensaje = "El día "+n+ " es miércoles.";
                break;
            case 4:
                mensaje = "El día "+n+ " es jueves.";
                break;
            case 5:
                mensaje = "El día "+n+ " es viernes.";
                break;
            case 6:
                mensaje = "El día "+n+ " es sábado.";
                break;
            case 7:
                mensaje = "El día "+n+ " es domingo.";
                break;
            default:
                mensaje = "El número "+n+" no corresponde a ningún día.";

}
alert(mensaje)