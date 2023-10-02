const num = parseInt(prompt("Introduce un numero para calcular su factorial:"));
let fact = 1;
let i = 1;
while (i <= num) 
{
  fact *= i;
  i++;
}
alert("El factorial es " + fact);
