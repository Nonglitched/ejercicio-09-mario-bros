// Punto 1: Pedir al usuario que ingrese un personaje del mundo de Mario Bros.
let personaje = prompt("¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)");

// Punto 2: Rellenar el <span> con el nombre completo del personaje ingresado
let nombreCompleto = "";
switch (personaje.toLowerCase()) {
    case "mario":
        nombreCompleto = "Mario";
        break;
    case "luigi":
        nombreCompleto = "Luigi";
        break;
    case "bowser":
        nombreCompleto = "Bowser Morton Koopa";
        break;
    case "peach":
        nombreCompleto = "Princesa Peach Toadstool";
        break;
    case "yoshi":
        nombreCompleto = "T. Yoshisaur Munchakoopas";
        break;
    case "toad":
        nombreCompleto = "Toad";
        break;
    case "toadette":
        nombreCompleto = "Toadette";
        break;
    case "daisy":
        nombreCompleto = "Princesa Daisy";
        break;
    default:
        nombreCompleto = "(desconocido)";
        break;
}

document.getElementById("personaje").textContent = nombreCompleto;

// Punto 3: Establecer el atributo "title" al elemento HTML correspondiente al personaje ingresado
if (nombreCompleto !== "(desconocido)") {
    let elemento = document.getElementById(personaje.toLowerCase());
    if (elemento) {
        elemento.setAttribute("title", "Presentado");
    }
}

// Punto 4: Todos los personajes se presentan, no se requiere corrección adicional.

// Punto 5: Crear un botón estilizado
let boton = document.getElementById("boton");

boton.addEventListener("mouseover", function () {
    boton.classList.add("hover");
});

boton.addEventListener("mouseout", function () {
    boton.classList.remove("hover");
});

boton.addEventListener("mousedown", function () {
    boton.classList.add("active");
});

boton.addEventListener("mouseup", function () {
    boton.classList.remove("active");
    presentarPersonaje();
});

// Punto 6: Ejecutar el comportamiento al presionar el botón
function presentarPersonaje() {
    let personaje = prompt("¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)");
    let nombreCompleto = "";
    switch (personaje.toLowerCase()) {
        case "mario":
            nombreCompleto = "Mario";
            break;
        case "luigi":
            nombreCompleto = "Luigi";
            break;
        case "bowser":
            nombreCompleto = "Bowser Morton Koopa";
            break;
        case "peach":
            nombreCompleto = "Princesa Peach Toadstool";
            break;
        case "yoshi":
            nombreCompleto = "T. Yoshisaur Munchakoopas";
            break;
        case "toad":
            nombreCompleto = "Toad";
            break;
        case "toadette":
            nombreCompleto = "Toadette";
            break;
        case "daisy":
            nombreCompleto = "Princesa Daisy";
            break;
        default:
            nombreCompleto = "(desconocido)";
            break;
    }

    document.getElementById("personaje").textContent = nombreCompleto;

    if (nombreCompleto !== "(desconocido)") {
        let elemento = document.getElementById(personaje.toLowerCase());
        if (elemento) {
            elemento.setAttribute("title", "Presentado");
        }
    }
}