import { Politico } from "./Politico.js";
export class Senador extends Politico {
    estado;
    anoEleicao;
    constructor(nome, partido, estado, anoEleicao, localTrabalho, enderecoTrabalho, remuneracao, projetos) {
        super(nome, partido, "Federal", "Legislativo", localTrabalho, enderecoTrabalho, remuneracao, projetos);
        this.estado = estado;
        this.anoEleicao = anoEleicao;
    }
    exercerMandato() {
        return "O Senador questiona e aprova autoridades, legisla sobre leis federais e autoriza operações financeiras externas.";
    }
    aprovarAutoridades() {
        return "Aprovar autoridades indicadas para cargos como ministros do STF, PGR e presidente do Banco Central.";
    }
    julgarCrimesResponsabilidade() {
        return "Julgar crimes de responsabilidade.";
    }
    representarInteressesEstado() {
        return "Representar os interesses do seu Estado.";
    }
}
