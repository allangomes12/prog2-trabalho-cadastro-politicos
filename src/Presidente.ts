import { Politico } from "./Politico.js";

export class Presidente extends Politico {
    private quantidadeMinistros: number;

    constructor(
        nome: string,
        partido: string,
        localTrabalho: string,
        enderecoTrabalho: string,
        remuneracao: number,
        quantidadeMinistros: number,
        projetos: string[]
    ) {
        super(
            nome,
            partido,
            "Federal",
            "Executivo",
            localTrabalho,
            enderecoTrabalho,
            remuneracao,
            projetos
        );

        this.quantidadeMinistros = quantidadeMinistros;
    }

    public exercerMandato(): string {
        return "O Presidente propõe, sanciona e veta leis e edita medidas provisórias.";
    }

    public nomearMinistro(): string {
        return "Nomear Ministros de Estado.";
    }

    public exonerarMinistro(): string {
        return "Exonerar Ministros de Estado.";
    }

    public comandarForcasArmadas(): string {
        return "Comandar as Forças Armadas.";
    }

    public representarPais(): string {
        return "Representar o Brasil internacionalmente.";
    }

    public elaborarPPA(): string {
        return "Elaborar e enviar o Plano Plurianual (PPA) ao Congresso Nacional.";
    }

    public elaborarLDO(): string {
        return "Elaborar e enviar a Lei de Diretrizes Orçamentárias (LDO) ao Congresso Nacional.";
    }

    public elaborarLOA(): string {
        return "Elaborar e enviar a Lei Orçamentária Anual (LOA) ao Congresso Nacional.";
    }
}