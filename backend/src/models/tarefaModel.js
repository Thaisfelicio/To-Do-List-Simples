export class Tarefa {
    constructor(id, titulo, concluida = false) {
        this.id = id;
        this.titulo = titulo;
        this.concluida = concluida;
    }
}