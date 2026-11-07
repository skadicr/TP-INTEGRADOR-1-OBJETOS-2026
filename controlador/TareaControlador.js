import { Tarea } from "../modelos/Tarea.js";
import { TareaUrgente } from "../modelos/TareaUrgente.js";
import { cargar, guardar } from "../modelos/almacenamiento.js";
import { obtenerUsuarios } from "../Api/usuarioApi.js";
import { TareaVista } from "../vistas/TareaVista.js";

export class TareaControlador {
    #vista;
    #tareas;

    constructor() {
        this.#vista = new TareaVista();
        this.#tareas = cargar();
    }

    async iniciar() {
        this.#vista.vincularAgregar((titulo, responsable, urgente) => this.agregar(titulo, responsable, urgente));
        this.#vista.vincularAcciones(id => this.alternar(id), id => this.eliminar(id));
        this.#vista.mostrarTareas(this.#tareas);
        try {
            const usuarios = await obtenerUsuarios();
            this.#vista.mostrarUsuarios(usuarios);
        } catch (error) {
            console.error("Error al obtener usuarios", error);
        }
    }

    agregar(titulo, responsable, urgente) {
        if (titulo === "") {
            return;
        }
        const id = this.generarId();
        const asignado = responsable || "Sin asignar";
        if (urgente) {
            this.#tareas.push(new TareaUrgente(id, titulo, asignado, false));
        } else {
            this.#tareas.push(new Tarea(id, titulo, asignado, false));
        }
        this.actualizar();
    }

    alternar(id) {
        this.#tareas.forEach(t => {
            if (t.getId() === id) {
                t.alternar();
            }
        });
        this.actualizar();
    }

    eliminar(id) {
        const restantes = [];
        this.#tareas.forEach(t => {
            if (t.getId() !== id) {
                restantes.push(t);
            }
        });
        this.#tareas = restantes;
        this.actualizar();
    }

    generarId() {
        let id = 1;
        this.#tareas.forEach(t => {
            if (t.getId() >= id) {
                id = t.getId() + 1;
            }
        });
        return id;
    }

    actualizar() {
        guardar(this.#tareas);
        this.#vista.mostrarTareas(this.#tareas);
    }
}
