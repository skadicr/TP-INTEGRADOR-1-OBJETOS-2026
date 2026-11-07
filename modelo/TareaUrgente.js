import { Tarea } from "./Tarea.js";

export class TareaUrgente extends Tarea {
    getTipo() {
        return "urgente";
    }

    describir() {
        return "URGENTE: " + this.getTitulo();
    }
}
