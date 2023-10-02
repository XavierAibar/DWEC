let result = "";

for (let i = 25; i >= 1; i--) 
{
  if (i % 2 == 0) 
  {
    if (i >= 3)
    {
        result += i + ", ";
    }
    else
    {
        result += i + ".";
    }
  }
}

alert(result);