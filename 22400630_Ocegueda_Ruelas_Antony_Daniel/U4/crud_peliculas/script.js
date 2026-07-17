let peliculas = [];
let siguiendeId = 1;

const formulario = document.getElementById("formulario");
const id = document.getElementById("id");
const titulo = document.getElementById("titulo");
const director = document.getElementById("director");
const año = document.getElementById("año");
const tabla = document.getElementById("tablaPeliculas");

function mostrarPeliculas(){
    tabla.innerHTML = "";
    peliculas.forEach((pelicula) => {
        tabla.innerHTML += `
        <tr>
            <td>${pelicula.id}</td>
            <td>${pelicula.titulo}</td>
            <td>${pelicula.director}</td>
            <td>${pelicula.año}</td>
            <td class="acciones">
                <button onclick="editar(${pelicula.id})">
                    Editar
                </button>
                <button onclick="eliminar(${pelicula.id})">
                    Eliminar
                </button>
            </td>
        </tr>`;
    });
};

formulario.addEventListener("submit", (e) =>{
    e.preventDefault();
    if(id.value == ""){
        peliculas.push({
            id: siguiendeId++,
            titulo: titulo.value,
            director: director.value,
            año: Number(año.value)
        });
    }else{
        const pelicula = peliculas.find(p => p.id == id.value);
        pelicula.titulo = titulo.value;
        pelicula.director = director.value;
        pelicula.año = Number(año.value);
    }
    formulario.reset(); //reinicia valores de los inputs
    id.value = "";
    console.log(peliculas);
    mostrarPeliculas();
});

function editar(idPelicula){
    const pelicula = peliculas.find(p => p.id == idPelicula);
    id.value = pelicula.id;
    titulo.value = pelicula.titulo;
    director.value = pelicula.director;
    año.value = pelicula.año;
};

function eliminar(idPelicula){
    peliculas = peliculas.filter(p => p.id != idPelicula);
    mostrarPeliculas();
};

