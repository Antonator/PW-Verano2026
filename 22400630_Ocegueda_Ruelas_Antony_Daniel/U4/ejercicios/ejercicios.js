//Ejercicio 1:
/*Escribe un programa que genere dos numeros aleatorios y que escriba en consola qué numeros
se generaron. Además, el programa deberá señalar si los números son iguales, y en caso de que no
lo sean, mostrará cual es el mayor. */

console.log("######## EJERCICIO 1 ########");
function ejercicio1(){
    let nAleatorio1 = Math.floor(Math.random()*10)+1;
    let nAleatorio2 = Math.floor(Math.random()*10)+1;
    console.log("Número aleatorio 1: " + nAleatorio1);
    console.log("Número aleatorio 2: " + nAleatorio2);

    if(nAleatorio1 === nAleatorio2){
        console.log("Los numeros generados son iguales: " + nAleatorio1 + " = " + nAleatorio2);
    }else{
        console.log("Los números generados son diferentes: " + nAleatorio1 + " es diferente a " + nAleatorio2);
        if(nAleatorio1 > nAleatorio2){
            console.log("El número mayor es: " + nAleatorio1);
        }else{
            console.log("El número mayor es: " + nAleatorio2);
        }
    }
}
ejercicio1();

//Ejercicio 2
/*Escribe un programa que genere de forma continua numeros aleatorios entre el 0 y el 5
hasta que salga el numero 0*/
console.log("------------------------------------");
console.log("######## EJERCICIO 2 ########");
function ejericicio2(){
    let activo = true;
    while (activo){
        let numeroAleatorio = Math.floor(Math.random()*6);
        console.log(numeroAleatorio);
        if(numeroAleatorio === 0){
            activo = false;
            console.log("Termina programa, numero: " + numeroAleatorio);
        }
    }
    
}

ejericicio2();

//Ejercicio 3
/*Elabora un programa que genere un numero aleatorio entre el numero 2 y el 10 y después
escriba la tabla de multiplicar del numero generado.*/
console.log("------------------------------------");
console.log("######## EJERCICIO 3 ########");
function ejercicio3(){
    let numero = Math.floor(Math.random()*(10-2+1))+2;
    console.log(numero);
    for(i = 0; i<=10; i++){
        console.log(`${numero} x ${i} = ${numero*i}`);
    }
}   

ejercicio3();

//Ejercicio 4
/*Escribe un programa que solicite 10 numeros entre el 1 y el 100, y determine cuantos
de esos numeros son pares y cuantos impares*/
console.log("------------------------------------");
console.log("######## EJERCICIO 4 ########");
function ejercicio4(){
    let listaNumeros = [];
    let contadorPares = 0;
    let contadorImpares = 0;
    for (let i = 10; i>0; i--){
        let numero = parseInt(prompt("Ingresa un numero entre el 1 y el 100"));
        while(numero < 1 || numero > 100){
            alert("Debes ingresar numeros validos entre el 1 y el 100");
            numero = parseInt(prompt("Ingresa un número entre 1 y 100"));
        }
        listaNumeros.push(numero);
        if(numero%2 === 0){
            contadorPares++;
        }else{
            contadorImpares++;
        }
        
        
    }
    console.log("Lista de numeros ingresados: " + listaNumeros);
    console.log("Cantidad de pares: " + contadorPares);
    console.log("Cantidad de impares: " + contadorImpares);
}
ejercicio4();

//Ejercicio 5
/*Una tienda departamental paga a sus empleados el 10% de comisión a quienes venden menos de $10,000.00 en artículos, mientras que otorga 
un 15% a quienes vendan $10,000.00 o más. Diseña un programa que solicite un número entre $5,000 y $30,000 (validar entrada hasta que sea 
número válido) en ventas para un empleado, y muestre en pantalla cuánto dinero va a recibir por comisión*/
console.log("------------------------------------");
console.log("######## EJERCICIO 5 ########");
function ejercicio5(){
    let venta = parseFloat(prompt("Ingresa una venta entre $5,000 y 30,000"));
    while(venta < 5000 || venta > 30000){
        venta = parseFloat(prompt("Valor no valido, ingresa una venta entre $5,000 y 30,000"));
    }
    let comision = 0;
    let dineroRecibido = 0;
    if(venta < 10000){
        comision = 0.10;
        
    }else{
        comision = 0.15;
    }
    dineroRecibido = comision*venta;
    console.log("Dinero a recibir por la comisión ingresada: " + dineroRecibido);

    
}
ejercicio5();