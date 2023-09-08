// Función para agregar una nueva tarea
function agregarTarea() {

    const nuevaTareaInput = document.getElementById("nuevaTarea");
    const nuevaTareaStatus = document.getElementById("status");
    const listaTareas = document.getElementById("listaTareas");
    const nuevaTareaTexto = nuevaTareaInput.value.trim();
    console.log(nuevaTareaTexto);

    if (nuevaTareaTexto !== "") {
        const nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = nuevaTareaTexto;

        
        const botonCompletar = document.createElement("button");
        botonCompletar.textContent = "Completar Tarea";
        botonCompletar.className = "completedbtn";
        botonCompletar.onclick = function() {
            marcarCompletada(nuevaTarea);
        }

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.className = "delete";
        botonEliminar.onclick = function() {
            listaTareas.removeChild(nuevaTarea);
        };

        const divBtn = document.createElement("div");
        if (nuevaTareaStatus.value == 'pending'){
            divBtn.appendChild(botonCompletar);
        }
        divBtn.appendChild(botonEliminar);

        if (nuevaTareaStatus.value === "completed") {
            nuevaTarea.classList.add("completed");
        } else {
            nuevaTarea.classList.add("pending");
        }
        nuevaTarea.appendChild(divBtn);
        listaTareas.appendChild(nuevaTarea);
        nuevaTareaInput.value = "";

    }
}
// Función para marcar una tarea como completada
function marcarCompletada(tarea) {
    if (tarea.classList.contains('pending')) {
        tarea.classList.remove('pending');
    }
    tarea.classList.toggle("completed");
}

// Agregar evento de clic a las tareas para marcarlas como
// completadas
document.getElementById("listaTareas").addEventListener("click",
    function(event) {
        if (event.target.tagName === "LI") {
            marcarCompletada(event.target);
            }
        });

// Agregar evento de clic al botón "Agregar"
document.getElementById("agregar").addEventListener("click",
agregarTarea);


// Función para mostrar tareas completadas
function mostrarCompletadas() {

    const tareas = document.querySelectorAll("li");

    tareas.forEach(tarea => {
        if (tarea.classList.contains("completed")) {
        tarea.style.display = "flex";
        } else {
        tarea.style.display = "none";
    }
    });
    }

    // Función para mostrar tareas pendientes
    function mostrarPendientes() {
        const tareas = document.querySelectorAll("li");
        tareas.forEach(tarea => {
        if (tarea.classList.contains("pending")) {
            tarea.style.display = "flex";
        } else {
            tarea.style.display = "none";
        }
    });
    }

    // Agregar evento de clic al botón "Mostrar Completadas"
    document.getElementById("mostrarCompletadas").addEventListener("click", mostrarCompletadas);

    // Agregar evento de clic al botón "Mostrar Pendientes"
    document.getElementById("mostrarPendientes").addEventListener("click", mostrarPendientes);
