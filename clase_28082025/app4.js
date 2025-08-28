//IF y ELSE

// let clave = prompt("Ingrese la clave secreta: ");
// if(clave == "12345"){
//     console.log("Clave correcta, bienvenido"); 
// }
// console.log("Continua el flujo");

// let numUsuario = prompt("Ingrese un numero mayor a 10: ");
// if(numUsuario >= 10){
//     console.log("Genial");
// }else{
//     console.log("Mal");
// }

let var1 = parseFloat(prompt("Ingrese un primer numero: "));
let var2 = parseFloat(prompt("Ingrese un segundo numero: "));
let var3 = parseFloat(prompt("Ingrese un tercer numero: "));

if(var1<var2 && var1<var3){
    console.log("El numero menor es: " + var1); 
}
else if(var2<var1 && var2<var3){
    console.log("El numero menor es: " + var2); 
}
else if(var3<var1 && var3<var2){
    console.log("El numero menor es: " + var3); 
}


if(var1>var2 && var1>var3){
    console.log("El numero mayor es: " + var1); 
}
else if(var2>var1 && var2>var3){
    console.log("El numero mayor es: " + var2); 
}
else if(var3>var1 && var3>var2){
    console.log("El numero mayor es: " + var3); 
}



if(var1 == var2){
    console.log("El numero 1 y 2 son iguales");
}
if(var1 == var3){
    console.log("El numero 1 y 3 son iguales");
}   
if(var2 == var3){
    console.log("El numero 2 y 3 son iguales");
}

