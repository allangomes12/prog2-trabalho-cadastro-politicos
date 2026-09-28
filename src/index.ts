import { Politico } from "./Politico.js";
import { Presidente } from "./Presidente.js";
import { Governador } from "./Governador.js";
import { DeputadoEstadual } from "./DeputadoEstadual.js";
import { DeputadoFederal } from "./DeputadoFederal.js";
import { Senador } from "./Senador.js";



const presidente = new Presidente(
    "Luiz Inácio Lula da Silva",
    "PT",
    "Palácio do Planalto",
    "Praça dos Três Poderes - Brasília/DF",
    46366.19,
    37,
    [
        "Novo PAC",
        "Plano Plurianual Nacional"
    ]
);



const governadorPE = new Governador(
    "Raquel Lyra",
    "PSD",
    "Pernambuco",
    "Palácio do Campo das Princesas",
    "Praça da República - Recife/PE",
    30000,
    27,
    [
        "Projetos de infraestrutura de Pernambuco",
        "Projetos de desenvolvimento estadual"
    ]
);

const governadorSP = new Governador(
    "Tarcísio de Freitas",
    "Republicanos",
    "São Paulo",
    "Palácio dos Bandeirantes",
    "Av. Morumbi, 4500 - São Paulo/SP",
    30000,
    25,
    [
        "Projetos de infraestrutura de São Paulo",
        "Projetos de desenvolvimento estadual"
    ]
);



const deputadoFederalPE1 = new DeputadoFederal(
    "André Ferreira",
    "PL",
    "Bancada do PL",
    "Câmara dos Deputados",
    "Praça dos Três Poderes - Brasília/DF",
    46366.19,
    [
        "Projeto de desenvolvimento regional"
    ]
);

const deputadoFederalPE2 = new DeputadoFederal(
    "Eduardo da Fonte",
    "PP",
    "Bancada do PP",
    "Câmara dos Deputados",
    "Praça dos Três Poderes - Brasília/DF",
    46366.19,
    [
        "Projeto de infraestrutura nacional"
    ]
);

const deputadoFederalPE3 = new DeputadoFederal(
    "Felipe Carreras",
    "PSB",
    "Bancada do PSB",
    "Câmara dos Deputados",
    "Praça dos Três Poderes - Brasília/DF",
    46366.19,
    [
        "Projeto de desenvolvimento do turismo"
    ]
);



const deputadoFederalSP1 = new DeputadoFederal(
    "Adriana Ventura",
    "NOVO",
    "Bancada do NOVO",
    "Câmara dos Deputados",
    "Praça dos Três Poderes - Brasília/DF",
    46366.19,
    [
        "Projeto de transparência pública"
    ]
);

const deputadoFederalSP2 = new DeputadoFederal(
    "Tabata Amaral",
    "PSB",
    "Bancada do PSB",
    "Câmara dos Deputados",
    "Praça dos Três Poderes - Brasília/DF",
    46366.19,
    [
        "Projeto de educação nacional"
    ]
);



const deputadoEstadualPE1 = new DeputadoEstadual(
    "Cayo Albino",
    "PSB",
    "Pernambuco",
    [
        "Comissão de Desenvolvimento Econômico e Turismo"
    ],
    "Assembleia Legislativa de Pernambuco",
    "Rua da Aurora, 631 - Recife/PE",
    34774.64,
    [
        "Projeto de infraestrutura de Pernambuco"
    ]
);

const deputadoEstadualPE2 = new DeputadoEstadual(
    "Renato Antunes",
    "PL",
    "Pernambuco",
    [
        "Comissão de Educação"
    ],
    "Assembleia Legislativa de Pernambuco",
    "Rua da Aurora, 631 - Recife/PE",
    34774.64,
    [
        "Projeto de educação estadual"
    ]
);

const deputadoEstadualPE3 = new DeputadoEstadual(
    "João Paulo Costa",
    "PCdoB",
    "Pernambuco",
    [
        "Comissão de Desenvolvimento Econômico e Turismo"
    ],
    "Assembleia Legislativa de Pernambuco",
    "Rua da Aurora, 631 - Recife/PE",
    34774.64,
    [
        "Projeto de desenvolvimento econômico"
    ]
);



const deputadoEstadualSP1 = new DeputadoEstadual(
    "Danilo Balas",
    "PL",
    "São Paulo",
    [
        "Comissão de Segurança Pública"
    ],
    "Assembleia Legislativa de São Paulo",
    "Av. Pedro Álvares Cabral, 201 - São Paulo/SP",
    34774.64,
    [
        "Projeto de segurança pública"
    ]
);

const deputadoEstadualSP2 = new DeputadoEstadual(
    "Alex Madureira",
    "PL",
    "São Paulo",
    [
        "Comissão de Saúde"
    ],
    "Assembleia Legislativa de São Paulo",
    "Av. Pedro Álvares Cabral, 201 - São Paulo/SP",
    34774.64,
    [
        "Projeto de saúde estadual"
    ]
);


// ==============================
// SENADORES - PE
// ==============================

const senadorPE1 = new Senador(
    "Fernando Dueire",
    "PSD",
    "Pernambuco",
    2018,
    "Senado Federal",
    "Praça dos Três Poderes - Brasília/DF",
    46366.19,
    [
        "Projeto de desenvolvimento de Pernambuco"
    ]
);

const senadorPE2 = new Senador(
    "Teresa Leitão",
    "PT",
    "Pernambuco",
    2022,
    "Senado Federal",
    "Praça dos Três Poderes - Brasília/DF",
    46366.19,
    [
        "Projeto de educação nacional"
    ]
);



const senadorSP = new Senador(
    "Astronauta Marcos Pontes",
    "PL",
    "São Paulo",
    2022,
    "Senado Federal",
    "Praça dos Três Poderes - Brasília/DF",
    46366.19,
    [
        "Projeto de ciência e tecnologia"
    ]
);


const politicos: Politico[] = [
    presidente,

    governadorPE,
    governadorSP,

    deputadoFederalPE1,
    deputadoFederalPE2,
    deputadoFederalPE3,

    deputadoFederalSP1,
    deputadoFederalSP2,

    deputadoEstadualPE1,
    deputadoEstadualPE2,
    deputadoEstadualPE3,

    deputadoEstadualSP1,
    deputadoEstadualSP2,

    senadorPE1,
    senadorPE2,
    senadorSP
];



for (const politico of politicos) {

    console.log("\n");
    console.log(`Nome: ${politico.getNome()}`);
    console.log(`Partido: ${politico.getPartido()}`);
    console.log(`Esfera: ${politico.getEsfera()}`);
    console.log(`Poder: ${politico.getPoder()}`);
    console.log(`Local de trabalho: ${politico.getLocalTrabalho()}`);
    console.log(`Endereço: ${politico.getEnderecoTrabalho()}`);
    console.log(`Remuneração: R$ ${politico.getRemuneracao()}`);

    console.log(`Projetos: ${politico.getProjetos().join(", ")}`);

    console.log("\nMandato:");
    console.log(politico.exercerMandato());

    console.log("");
}