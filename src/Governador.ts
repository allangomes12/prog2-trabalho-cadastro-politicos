import { Politico } from "./Politico.js";

export class Governador extends Politico {
    private quantidadeSecretarios: number;
    private estado: string;

    constructor(
        nome: string,
        partido: string,
        estado: string,
        localTrabalho: string,
        enderecoTrabalho: string,
        remuneracao: number,
        quantidadeSecretarios: number,
        projetos: string[]
    ) {
        super(
            nome,
            partido,
            "Estadual",
            "Executivo",
            localTrabalho,
            enderecoTrabalho,
            remuneracao,
            projetos
        );

        this.quantidadeSecretarios = quantidadeSecretarios;
        this.estado = estado;
    }

    public exercerMandato(): string {
        return "O Governador sanciona e veta leis estaduais, declara estado de calamidade e envia propostas de emenda à Constituição Estadual à Assembleia Legislativa.";
    }

    public gerirPoliciaMilitar(): string {
        return "Gerir a Polícia Militar do Estado.";
    }

    public administrarRodovias(): string {
        return "Administrar as rodovias estaduais.";
    }

    public coordenarEducacao(): string {
        return "Coordenar a educação estadual.";
    }

    public coordenarSaude(): string {
        return "Coordenar a saúde estadual.";
    }

    public elaborarPPA(): string {
        return "Elaborar e enviar o PPA estadual à Assembleia Legislativa.";
    }

    public elaborarLDO(): string {
        return "Elaborar e enviar a LDO estadual à Assembleia Legislativa.";
    }

    public elaborarLOA(): string {
        return "Elaborar e enviar a LOA estadual à Assembleia Legislativa.";
    }
}