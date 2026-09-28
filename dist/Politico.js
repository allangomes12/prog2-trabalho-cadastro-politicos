export class Politico {
    nome;
    partido;
    esfera;
    poder;
    localTrabalho;
    enderecoTrabalho;
    remuneracao;
    projetos;
    constructor(nome, partido, esfera, poder, localTrabalho, enderecoTrabalho, remuneracao, projetos) {
        this.nome = nome;
        this.partido = partido;
        this.esfera = esfera;
        this.poder = poder;
        this.localTrabalho = localTrabalho;
        this.enderecoTrabalho = enderecoTrabalho;
        this.remuneracao = remuneracao;
        this.projetos = projetos;
    }
    getNome() {
        return this.nome;
    }
    getPartido() {
        return this.partido;
    }
    getEsfera() {
        return this.esfera;
    }
    getPoder() {
        return this.poder;
    }
    getLocalTrabalho() {
        return this.localTrabalho;
    }
    getEnderecoTrabalho() {
        return this.enderecoTrabalho;
    }
    getRemuneracao() {
        return this.remuneracao;
    }
    getProjetos() {
        return this.projetos;
    }
}
