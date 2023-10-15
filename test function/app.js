let ejercicio = document.querySelector("title");
console.log(ejercicio.innerHTML);

let getValue = document.querySelectorAll("dd");
let primerInt = "";
let segundoInt = "";
let color = "";

for (let i = 0; i < getValue.length; i++) {
    if ((i == 0 || i == 1 || i == 2 || i == 3) && isNaN(getValue[i].innerHTML)) {
        if (getValue[i].innerHTML.length > 0) {
            if (i == 2 ||i == 3) {
                primerInt += getValue[i].innerHTML.toUpperCase() + ' ';
                continue;
            }
            primerInt += getValue[i].innerHTML + ' ';
        }
    } else if ((i == 4 || i == 5 || i == 6 || i == 7) && isNaN(getValue[i].innerHTML)) {
        if (getValue[i].innerHTML.length > 0) {
            if (i == 6 || i == 7 ) {
                segundoInt += getValue[i].innerHTML.toUpperCase() + ' ';
                continue;
            }
            segundoInt += getValue[i].innerHTML + ' ';
        }
    }
}
console.log("-----\n" + "Integrante 1: " + primerInt.trim() + "\n" + "Integrante 2: " + segundoInt.trim() + "\n-----");

for (let i = 0; i < 8; i++) {
    if ((i == 0 || i == 1) && getValue[i].innerHTML.length > 0) {
        if (getValue[i].innerHTML.toLowerCase() === getValue[4].innerHTML.toLowerCase() || getValue[i].innerHTML.toLowerCase() === getValue[5].innerHTML.toLowerCase()) {
            same("Nombres");
            if (getValue[i].innerHTML.toLowerCase() === getValue[4].innerHTML.toLowerCase()) { getValue[i].style.color = color; getValue[4].style.color = color; }
            if (getValue[i].innerHTML.toLowerCase() === getValue[5].innerHTML.toLowerCase()) { getValue[i].style.color = color; getValue[5].style.color = color; }
        }
    }
}

let checkLastname = confirm("Quieres revisar si los apellidos coinciden?");
if(checkLastname == true) {
    for (let i = 0; i < 8; i++) {
        if ((i == 2 || i == 3) && getValue[i].innerHTML.length > 0) {
            if (getValue[i].innerHTML.toLowerCase() === getValue[6].innerHTML.toLowerCase() || getValue[i].innerHTML.toLowerCase() === getValue[7].innerHTML.toLowerCase()) {
                same("Apellido");
                if (getValue[i].innerHTML.toLowerCase() === getValue[6].innerHTML.toLowerCase()) { getValue[i].style.color = color; getValue[6].style.color = color; }
                if (getValue[i].innerHTML.toLowerCase() === getValue[7].innerHTML.toLowerCase()) { getValue[i].style.color = color; getValue[6].style.color = color; }
            }
        }
    }
}

function same(elemento) {
    console.log("Hubo coincidencia de " + elemento);
    alert("Hubo coincidencia de " + elemento);
    color = prompt("Hubo coincidencia de " + elemento + ", Por favor ingrese un color, sin comiilas.");
}