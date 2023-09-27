num = prompt("Introduce un numero.");
let res = "El numero " + num;
if(num % 2 == 0)
{
    res += " es par";
}
else
{
    res += " es impar";
}
if(num % 3 == 0)
{
    if(num % 5 == 0)
    {
        res += ", es multiplo de 3";
    }
    else
    {
        res += " y es multiplo de 3"; 
    }
}
if(num % 5 == 0)
{
    res += " y es multiplo de 5";
}
alert(res)