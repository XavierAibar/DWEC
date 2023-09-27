let num1 = parseInt(prompt("Añade un primer numero"));
let sign = prompt("Añade como quieres operar(+,-,*o /)")
let num2 = parseInt(prompt("Añade un segundo numero"));
switch(sign)
{
    case "+":
    {
        alert(num1 + num2); 
        break;  
    }
    case "-":
    {
        alert(num1 - num2);   
        break;
    }
    case "*":
    {
        alert(num1 * num2);  
        break; 
    }
    case "/":
    {
        alert(num1 / num2);  
        break; 
    }    
    default:
    {
        alert("No pusiste ningun signo de los que se pedian.");
    }
        
}