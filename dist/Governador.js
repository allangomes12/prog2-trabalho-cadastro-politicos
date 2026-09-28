import { Politico } from "./Politico.js";
export class Governador extends Politico {
    quantidadeSecretarios;
    estado;
    constructor(nome, partido, estado, localTrabalho, enderecoTrabalho, remuneracao, quantidadeSecretarios, projetos) {
        super(nome, partido, "Estadual", "Executivo", localTrabalho, enderecoTrabalho, remuneracao, projetos);
        this.quantidadeSecretarios = quantidadeSecretarios;
        this.estado = estado;
    }
    exercerMandato() {
        return "O Governador sanciona e veta leis estaduais, declara estado de calamidade e envia propostas de emenda à Constituição Estadual à Assembleia Legislativa.";
    }
    gerirPoliciaMilitar() {
        return "Gerir a Polícia Militar do Estado.";
    }
    administrarRodovias() {
        return "Administrar as rodovias estaduais.";
    }
    coordenarEducacao() {
        return "Coordenar a educação estadual.";
    }
    coordenarSaude() {
        return "Coordenar a saúde estadual.";
    }
    elaborarPPA() {
        return "Elaborar e enviar o PPA estadual à Assembleia Legislativa.";
    }
    elaborarLDO() {
        return "Elaborar e enviar a LDO estadual à Assembleia Legislativa.";
    }
    elaborarLOA() {
        return "Elaborar e enviar a LOA estadual à Assembleia Legislativa.";
    }
}
