    cantHermanos = prompt("¿Cuantos hermanos tienes?");
    cantidad = prompt("Introduzca el coste.");
    if (cantHermanos >= 3)
    {
        descontado = cantidad * 0.15;
        cantidad -= descontado
    }
    else if (0 < cantHermanos && cantHermanos < 3)
    {
        descontado = cantidad * 0.05;
        cantidad -= descontado
    }
    alert("La cantidad final es de " + cantidad);