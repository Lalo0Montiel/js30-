const inputTarea = document.getElementById("tarea");
const inputTiempo = document.getElementById("tiempo");
const agregar = document.getElementById("agregar-tareas");
const boton = document.getElementById("boton");
const contador = document.getElementById("contador");

const agrearNuevaTarea = document.getElementById("tareas-elegidas")


let sumaDeTiempo = inputTiempo.value;

const agregarTareas = () => {
    if (inputTarea.value || inputTiempo.value) {
        
        let tarea = inputTarea.value
        let tiempo = inputTiempo.value

        let nuevaTarea = document.createElement("li")
        nuevaTarea.textContent = tarea

        let nuevoTiempo = document.createElement("p")
        nuevoTiempo.textContent = tiempo + " " + "minutos"
        nuevaTarea.appendChild(nuevoTiempo)
        agregar.appendChild(nuevaTarea)

        let botonAdd = document.createElement("button")
        botonAdd.textContent="añadir"

        nuevaTarea.appendChild(botonAdd)

        botonAdd.addEventListener("click", (e) =>{
            let nuevaTareaClon = nuevaTarea.cloneNode(true);
            agrearNuevaTarea.appendChild(nuevaTareaClon);
        })

        sumaDeTiempo ++
        contador.innerText = sumaDeTiempo
    }
    inputTarea.value = ""
    inputTiempo.value =""
}


boton.addEventListener("click", agregarTareas)