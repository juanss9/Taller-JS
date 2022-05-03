nombre1=prompt("Ingresa tu nombre:")
nombre2=prompt("Ingresa otro nombre:")
posicion_final_nombre1=parseInt(nombre1)-1
posicion_final_nombre2=parseInt(nombre2)-1
console.log((nombre1[0] == nombre2[0]) || (nombre1[posicion_final_nombre1] == nombre2[posicion_final_nombre2]))