import { Politico } from "./Politico.js";

export class DeputadoEstadual extends Politico {
    private estado: string;
    private comissoes: string[];

    constructor(
        nome: string,
        partido: string,
        estado: string,
        comissoes: string[],
        localTrabalho: string,
        enderecoTrabalho: string,
        remuneracao: number,
        projetos: string[]
    ) {
        super(
            nome,
            partido,
            "Estadual",
            "Legislativo",
            localTrabalho,
            enderecoTrabalho,
            remuneracao,
            projetos
        );

        if (comissoes.length === 0) {
            throw new Error("O deputado estadual deve possuir pelo menos uma comissão.");
        }

        this.estado = estado;
        this.comissoes = comissoes;
    }

    public exercerMandato(): string {
        return "O Deputado Estadual legisla sobre assuntos de interesse estadual e fiscaliza o Governador.";
    }

    public votarPPA(): string {
        return "Votar o Plano Plurianual (PPA) estadual.";
    }

    public votarLOA(): string {
        return "Votar a Lei Orçamentária Anual (LOA) estadual.";
    }

    public votarLDO(): string {
        return "Votar a Lei de Diretrizes Orçamentárias (LDO) estadual.";
    }

    public proporEmendaConstitucional(): string {
        return "Propor emenda à Constituição Estadual.";
    }

    public criarCPIEstadual(): string {
        return "Criar uma Comissão Parlamentar de Inquérito (CPI) estadual.";
    }
}