let num = parseInt(prompt("Añade un numero, se sumaran"));
let result = num;
while (num != 0)
{
    num = parseInt(prompt("Añade un numero, se sumaran"));
    result += num;
}
alert(result);