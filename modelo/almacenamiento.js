import { Tarea } from "./tarea.js";
import { TareaUrgente } from "./TareaUrgente.js";

const CLAVE = "tareas";

export function guardar(tareas) {
    const datos = tareas.map(t => ({
        id: t.getId(),
        titulo: t.getTitulo(),
        responsable: t.getResponsable(),
        completada: t.estaCompletada(),
        tipo: t.getTipo()
    }));
    localStorage.setItem(CLAVE, JSON.stringify(datos));
}

export function cargar() {
    const data = localStorage.getItem(CLAVE);
    if (!data) {
        return [];
    }
    try {
        return JSON.parse(data).map(t => {
            if (t.tipo === "urgente") {
                return new TareaUrgente(t.id, t.titulo, t.responsable, t.completada);
            }
            return new Tarea(t.id, t.titulo, t.responsable, t.completada);
        });
    } catch (error) {
        console.error("JSON inválido", error);
        return [];
    }
}
