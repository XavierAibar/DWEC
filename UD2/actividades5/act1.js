let nombre = prompt("Introduce tu nombre");
let apellido = prompt("Introduce tu apellido");
let salario = parseFloat(prompt("Introduce tu salario"));
let edad = parseInt(prompt("Introduce tu edad"));
let salarioreal;
let suma;

if (salario >= 2000) {
    salarioreal = salario;
}

else if (1000 < salario && salario < 2000) {
    if (edad >= 45) {
        suma = salario * 0.03;
        salarioreal = suma + salario;
    }

    else {
        suma = salario * 0.1;
        salarioreal = suma + salario;
    }
}

else {
    if (edad < 30) {
        salarioreal = 1100;
    }

    else if (30 <= edad && edad <= 45) {
        suma = salario * 0.03;
        salarioreal = salario + suma;
    }

    else {
        suma = salario * 0.15;
        salarioreal = salario + suma;
    }
}

alert(`Nombre: ${nombre} \n Apellido: ${apellido} \n Edad: ${edad} \n Salario: ${salarioreal}`);