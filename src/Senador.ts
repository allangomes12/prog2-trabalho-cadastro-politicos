import { Politico } from "./Politico.js";

export class Senador extends Politico {
    private estado: string;
    private anoEleicao: number;

    constructor(
        nome: string,
        partido: string,
        estado: string,
        anoEleicao: number,
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

        this.estado = estado;
        this.anoEleicao = anoEleicao;
    }

    public exercerMandato(): string {
        return "O Senador questiona e aprova autoridades, legisla sobre leis federais e autoriza operações financeiras externas.";
    }

    public aprovarAutoridades(): string {
        return "Aprovar autoridades indicadas para cargos como ministros do STF, PGR e presidente do Banco Central.";
    }

    public julgarCrimesResponsabilidade(): string {
        return "Julgar crimes de responsabilidade.";
    }

    public representarInteressesEstado(): string {
        return "Representar os interesses do seu Estado.";
    }
}