export class Tarea {
    #id;
    #titulo;
    #responsable;
    #completada;

    constructor(id, titulo, responsable, completada) {
        this.#id = id;
        this.#titulo = titulo;
        this.#responsable = responsable;
        this.#completada = completada;
    }

    getId() {
        return this.#id;
    }

    getTitulo() {
        return this.#titulo;
    }

    getResponsable() {
        return this.#responsable;
    }

    estaCompletada() {
        return this.#completada;
    }

    alternar() {
        this.#completada = !this.#completada;
    }

    getTipo() {
        return "normal";
    }

    describir() {
        return this.getTitulo();
    }
}
