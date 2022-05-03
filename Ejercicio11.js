fecha=parseInt(prompt("Ingrese una fecha en formato DDMMAAAA: "));
dia=fecha/1000000
mes=(fecha/10000)%100
año=fecha%10000
console.log("Fecha en formato DDMMAAAA"+fecha);
console.log(""+dia,"/",""+mes,"/",""+año);