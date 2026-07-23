const express = require("express"); //IMPORTAR EXPRESS
const morgan = require("morgan"); //IMPORTAR EXPRESS
const cors = require("cors");
const app = express(); //CREAR INSTANCIA DE EXPRESS
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
const PORT = 3000; //DEFININR PUERTO

let peliculas = [
    {
        id: 1,
        titulo: "Interestelar",
        directoe: "Christopher Nolan",
        año: 2024
    },
    {
        id: 2,
        titulo: "Interestelar",
        directoe: "Christopher Nolan",
        año: 2024
    }
];

//Añadir ruta ("/"), (peticion y respuesta) METODO GET
app.get("/", (req, res) =>{
    //enviar un mensaje
    //res.send("Bienvenido a mi primer servidor con express");
    res.send(`<a href="/pagina">Ir a pagina</a>`);
});

app.get("/pagina", (req, res) =>{
    res.send(`
        <style>
            h1 {
                color: red;
            }
        </style>
        <h1>Mi página</h1>
        <p>Creado con Express</p> 
        <a href="/saludo/:nombre">Ir a saludo</a>   
    `);
})

app.get("/saludo/:nombre", (req, res) =>{
    //obtiene valor de la URL
    const nombre = req.params.nombre;
    res.send("Hola " + nombre);
});

//EJERCICIOS ACTIVIDAD 2
//EJERCICIO 1: NUMERO PAR O IMPAR
app.get("/par/:numero", (req, res) =>{
    const numero = req.params.numero;
    if(numero % 2 == 0){
        res.send(`${numero} es un número par`);
    }else{
        res.send(`${numero} es un número impar`);
    }
});

//EJERCICIO 2: MAYOR DE EDAD
app.get("/edad/:edad", (req, res) =>{
    const edad = req.params.edad;
    if(edad >= 18){
        res.send(`Eres mayor de edad`);
    }else{
        res.send(`Eres menor de edad`)
    }
});

//EJERCICIO 3: CALCULADORA
app.get("/calculadora/:operacion/:a/:b", (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    const operacion = req.params.operacion;
    let resultado;

    switch (operacion) {
        case "suma":
            resultado = a + b;
            break;
        case "resta":
            resultado = a - b;
            break;
        case "multiplicacion":
            resultado = a * b;
            break;
        case "division":
            resultado = a / b;
            break;
        default:
            return res.send("Operación no válida");
    }

    res.send(`Resultado = ${resultado}`);
});

//EJERCICIO 4: TABLA DE MULTIPLICAR
app.get("/tabla/:numero", (req, res) =>{
    const numero = req.params.numero;
    let resultado = "";
    for(let i = 0; i<=10; i++){
        resultado += `${numero} x ${i} = ${numero * i} <br>`;
    }
    res.send(resultado);
});

//EJERCICIO 5: CALIFICACION
app.get("/calificacion/:nota", (req, res) =>{
    const nota = req.params.nota;
    if(nota < 70){
        res.send("Reprobado");
    }else if(nota >= 70 && nota < 80){
        res.send("Aprobado");
    }else if(nota >= 80 && nota <90){
        res.send("Muy bien");
    }else{
        res.send("Excelente");
    }
});

app.listen(PORT, () =>{
    console.log("Servidor inicado en http://localhost:"+PORT);
});

