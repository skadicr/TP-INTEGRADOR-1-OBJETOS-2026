export class TareaVista {
    #formulario;
    #titulo;
    #responsable;
    #urgente;
    #lista;
    #alAlternar;
    #alEliminar;

    constructor() {
        this.#formulario = document.getElementById("formulario");
        this.#titulo = document.getElementById("titulo");
        this.#responsable = document.getElementById("responsable");
        this.#urgente = document.getElementById("urgente");
        this.#lista = document.getElementById("lista");
    }

    mostrarUsuarios(usuarios) {
        this.#responsable.innerHTML = "";
        usuarios.forEach(u => {
            const opcion = document.createElement("option");
            opcion.value = u.getNombre();
            opcion.textContent = u.getNombre();
            this.#responsable.appendChild(opcion);
        });
    }

    mostrarTareas(tareas) {
        this.#lista.innerHTML = "";
        tareas.forEach(t => {
            const item = document.createElement("li");
            item.className = "tarea " + t.getTipo();
            if (t.estaCompletada()) {
                item.className += " completada";
            }

            const info = document.createElement("div");
            info.className = "info";

            const titulo = document.createElement("span");
            titulo.className = "titulo";
            titulo.textContent = t.describir();

            const responsable = document.createElement("span");
            responsable.className = "responsable";
            responsable.textContent = "Responsable: " + t.getResponsable();

            info.appendChild(titulo);
            info.appendChild(responsable);

            const acciones = document.createElement("div");
            acciones.className = "acciones";

            const alternar = document.createElement("button");
            alternar.className = "boton-secundario";
            alternar.textContent = t.estaCompletada() ? "Reabrir" : "Completar";
            alternar.addEventListener("click", () => this.#alAlternar(t.getId()));

            const eliminar = document.createElement("button");
            eliminar.className = "boton-peligro";
            eliminar.textContent = "Eliminar";
            eliminar.addEventListener("click", () => this.#alEliminar(t.getId()));

            acciones.appendChild(alternar);
            acciones.appendChild(eliminar);
            item.appendChild(info);
            item.appendChild(acciones);
            this.#lista.appendChild(item);
        });
    }

    vincularAgregar(handler) {
        this.#formulario.addEventListener("submit", e => {
            e.preventDefault();
            handler(this.#titulo.value.trim(), this.#responsable.value, this.#urgente.checked);
            this.#formulario.reset();
        });
    }

    vincularAcciones(alternar, eliminar) {
        this.#alAlternar = alternar;
        this.#alEliminar = eliminar;
    }
}
