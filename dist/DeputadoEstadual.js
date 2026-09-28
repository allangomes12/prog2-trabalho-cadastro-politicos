import { Politico } from "./Politico.js";
export class DeputadoEstadual extends Politico {
    estado;
    comissoes;
    constructor(nome, partido, estado, comissoes, localTrabalho, enderecoTrabalho, remuneracao, projetos) {
        super(nome, partido, "Estadual", "Legislativo", localTrabalho, enderecoTrabalho, remuneracao, projetos);
        if (comissoes.length === 0) {
            throw new Error("O deputado estadual deve possuir pelo menos uma comissão.");
        }
        this.estado = estado;
        this.comissoes = comissoes;
    }
    exercerMandato() {
        return "O Deputado Estadual legisla sobre assuntos de interesse estadual e fiscaliza o Governador.";
    }
    votarPPA() {
        return "Votar o Plano Plurianual (PPA) estadual.";
    }
    votarLOA() {
        return "Votar a Lei Orçamentária Anual (LOA) estadual.";
    }
    votarLDO() {
        return "Votar a Lei de Diretrizes Orçamentárias (LDO) estadual.";
    }
    proporEmendaConstitucional() {
        return "Propor emenda à Constituição Estadual.";
    }
    criarCPIEstadual() {
        return "Criar uma Comissão Parlamentar de Inquérito (CPI) estadual.";
    }
}
