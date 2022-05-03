n1=parseInt(prompt("Primer número:"))
n2=parseInt(prompt("Segundo número:"))
n3=parseInt(prompt("Tercer número:"))
if (n1<n2)
    if (n1<n3)
        console.log("Menor:", n1)
    else
        console.log("Menor:", n3)
else
    if (n2<n3)
        console.log("Menor:", n2)
    else
        console.log("Menor:", n3)