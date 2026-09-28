import { Politico } from "./Politico.js";
export class DeputadoFederal extends Politico {
    bancada;
    constructor(nome, partido, bancada, localTrabalho, enderecoTrabalho, remuneracao, projetos) {
        super(nome, partido, "Federal", "Legislativo", localTrabalho, enderecoTrabalho, remuneracao, projetos);
        this.bancada = bancada;
    }
    exercerMandato() {
        return "O Deputado Federal legisla sobre assuntos de competência da União e fiscaliza o Presidente da República.";
    }
    votarPEC() {
        return "Votar propostas de emenda à Constituição Federal (PECs).";
    }
    criarCPINacional() {
        return "Criar uma Comissão Parlamentar de Inquérito (CPI) nacional.";
    }
    votarPPA() {
        return "Votar o Plano Plurianual (PPA) nacional.";
    }
    votarLDO() {
        return "Votar a Lei de Diretrizes Orçamentárias (LDO) nacional.";
    }
    votarLOA() {
        return "Votar a Lei Orçamentária Anual (LOA) nacional.";
    }
    proporLeiComplementar() {
        return "Propor leis complementares.";
    }
}
