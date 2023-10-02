let num = parseInt(prompt("Introduce un numero para que adivine tu compañero."));
let numadiv = parseInt(prompt("Intenta adivinarlo."));
while (numadiv != num)
{
    if(numadiv < num)
    {
        alert("No, el numero que buscas es mayor.");
    }
    if(numadiv > num)
    {
        alert("No, el numero que buscas es menor.");
    }
    numadiv = parseInt(prompt("Intenta adivinarlo."));

}
alert("¡Muy bien, adivinaste!");
