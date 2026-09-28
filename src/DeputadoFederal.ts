import { Politico } from "./Politico.js";

export class DeputadoFederal extends Politico {
    private bancada: string;

    constructor(
        nome: string,
        partido: string,
        bancada: string,
        localTrabalho: string,
        enderecoTrabalho: string,
        remuneracao: number,
        projetos: string[]
    ) {
        super(
            nome,
            partido,
            "Federal",
            "Legislativo",
            localTrabalho,
            enderecoTrabalho,
            remuneracao,
            projetos
        );

        this.bancada = bancada;
    }

    public exercerMandato(): string {
        return "O Deputado Federal legisla sobre assuntos de competência da União e fiscaliza o Presidente da República.";
    }

    public votarPEC(): string {
        return "Votar propostas de emenda à Constituição Federal (PECs).";
    }

    public criarCPINacional(): string {
        return "Criar uma Comissão Parlamentar de Inquérito (CPI) nacional.";
    }

    public votarPPA(): string {
        return "Votar o Plano Plurianual (PPA) nacional.";
    }

    public votarLDO(): string {
        return "Votar a Lei de Diretrizes Orçamentárias (LDO) nacional.";
    }

    public votarLOA(): string {
        return "Votar a Lei Orçamentária Anual (LOA) nacional.";
    }

    public proporLeiComplementar(): string {
        return "Propor leis complementares.";
    }
}