import { Politico } from "./Politico.js";
export class Presidente extends Politico {
    quantidadeMinistros;
    constructor(nome, partido, localTrabalho, enderecoTrabalho, remuneracao, quantidadeMinistros, projetos) {
        super(nome, partido, "Federal", "Executivo", localTrabalho, enderecoTrabalho, remuneracao, projetos);
        this.quantidadeMinistros = quantidadeMinistros;
    }
    exercerMandato() {
        return "O Presidente propõe, sanciona e veta leis e edita medidas provisórias.";
    }
    nomearMinistro() {
        return "Nomear Ministros de Estado.";
    }
    exonerarMinistro() {
        return "Exonerar Ministros de Estado.";
    }
    comandarForcasArmadas() {
        return "Comandar as Forças Armadas.";
    }
    representarPais() {
        return "Representar o Brasil internacionalmente.";
    }
    elaborarPPA() {
        return "Elaborar e enviar o Plano Plurianual (PPA) ao Congresso Nacional.";
    }
    elaborarLDO() {
        return "Elaborar e enviar a Lei de Diretrizes Orçamentárias (LDO) ao Congresso Nacional.";
    }
    elaborarLOA() {
        return "Elaborar e enviar a Lei Orçamentária Anual (LOA) ao Congresso Nacional.";
    }
}
