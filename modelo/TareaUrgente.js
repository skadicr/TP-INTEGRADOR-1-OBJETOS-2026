import { Tarea } from "/tarea.js";

export class TareaUrgente extends Tarea {
    getTipo() {
        return "urgente";
    }

    describir() {
        return "URGENTE: " + this.getTitulo();
    }
}
