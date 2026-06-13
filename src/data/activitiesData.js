import pdfIpes from "../assets/atividades/1ano-ipes-colorir.pdf";
import pdfFauna from "../assets/atividades/1ano-animais-pantanal.pdf";
import pdfLigar from "../assets/atividades/1ano-ligando-historia.pdf";
import pdfObelisco from "../assets/atividades/1ano-obelisco-campo-grande.pdf";
import pdfBandeira from "../assets/atividades/2ano-bandeira-de-campogrande.pdf";
import pdfChafariz from "../assets/atividades/2ano-chafariz-ary-coelho.pdf";
import pdfExplorando from "../assets/atividades/2ano-explorando-campo-grande.pdf";
import pdfAraras from "../assets/atividades/2ano-praca-das-araras.pdf";
import pdfBandeira3Ano from "../assets/atividades/3ano-bandeira-de-campo-grande.pdf";
import pdfObelisco3Ano from "../assets/atividades/3ano-obelisco.pdf";
import pdfPraca3Ano from "../assets/atividades/3ano-praca-ary-coelho.pdf";
import pdfFeirona3Ano from "../assets/atividades/3ano-sobra-e-feirona.pdf";

export const seriesData = {
  1: {
    titulo: "1º Ano - Primeiras Descobertas",
    descricao: "Atividades lúdicas focadas em alfabetização e identificação visual dos símbolos de Campo Grande.",
    paraImprimir: [
      { 
        id: "1_ipes", 
        tipo: "Colorir", 
        titulo: "Os Ipês da Nossa Cidade (Amarelo e Rosa)", 
        url: pdfIpes
      },
      { 
        id: "1_fauna", 
        tipo: "Alfabetização", 
        titulo: "Nossa Fauna Pantaneira: Pintar a Capivara e a Onça", 
        url: pdfFauna 
      },
      { 
        id: "1_ligar", 
        tipo: "Associação", 
        titulo: "Ligando os Símbolos da Cidade e Completando as Letras", 
        url: pdfLigar 
      },
      { 
        id: "1_obelisco", 
        tipo: "Caça-Letras", 
        titulo: "Descobrindo os Monumentos: O Obelisco do Centro", 
        url: pdfObelisco 
      }
    ],
    quiz: {
      tema: "Conhecendo nossos bichinhos e plantas",
      perguntas: [
        {
          pergunta: "Qual é o bicho que adora passear pelos lagos de Campo Grande?",
          opcoes: ["Capivara", "Girafa", "Leão"],
          correta: 0
        },
        {
          pergunta: "Qual é a cor do lindo Ipê, a árvore símbolo da nossa cidade que floresce no inverno?",
          opcoes: ["Azul", "Amarelo", "Verde"],
          correta: 1
        },
        {
          pergunta: "Qual ave de pernas longas é o grande símbolo do nosso Pantanal?",
          opcoes: ["Pinguim", "Tuiuiú", "Pelicano"],
          correta: 1
        }
      ]
    }
  },
  2: {
    titulo: "2º Ano - Nossa Comunidade",
    descricao: "Explorando o entorno da escola e os primeiros monumentos históricos da cidade.",
     paraImprimir: [
      { 
        id: "1_bandeira", 
        tipo: "Colorir", 
        titulo: "Colorindo a bandeira de Campo Grande.", 
        url: pdfBandeira
      },
      { 
        id: "2_bandeira", 
        tipo: "Colorir/Alfabetização", 
        titulo: "Colorindo o chafariz e organizando sílabas.", 
        url: pdfChafariz
      },
      { 
        id: "3_explorando", 
        tipo: "Alfabetização", 
        titulo: "Caça palavras dos monumentos de Campo Grande.", 
        url: pdfExplorando
      },
      { 
        id: "4_araras", 
        tipo: "Colorir/Alfabetização", 
        titulo: "Colorindo a praça das Araras e organizando sílabas", 
        url: pdfAraras
      },
    ],
    quiz: {
      tema: "Monumentos da Cidade",
      perguntas: [
        {
          pergunta: "Onde fica o famoso monumento do Obelisco?",
          opcoes: ["No Centro da cidade", "Dentro do Shopping", "No aeroporto"],
          correta: 0
        },
        {
          pergunta: "Qual destas praças centrais de Campo Grande é famosa por ter uma grande estátua de uma Arara?",
          opcoes: ["Praça do Peixe", "Praça das Araras", "Praça Ary Coelho"],
          correta: 1
        },
        {
          pergunta: "Qual é o nome do parque muito famoso que tem um lago enorme cheio de capivaras?",
          opcoes: ["Parque das Nações Indígenas", "Parque do Horto", "Praça do Rádio"],
          correta: 0
        }
      ]
    }
  },
  3: {
    titulo: "3º Ano - Cultura e Tradições",
    descricao: "Patrimônio imaterial, comidas típicas, música e povos que formaram o nosso MS.",
    paraImprimir: [
        { 
            id: "3_bandeira", 
            titulo: "Reescreva o texto: Decifre o código e reescreva o texto, depois desenhe a chegada dos pioneiros", 
            tipo: "Colorir/Alfabetização", 
            url: pdfBandeira3Ano
        },
        { 
            id: "3_obelisco", 
            titulo: "Caça-Palavras: Obelisco de Campo Grande", 
            tipo: "Alfabetização", 
            url: pdfObelisco3Ano 
        },
        { 
            id: "3_cruz", 
            titulo: "Cruzadinha: História da praça Ary Coelho", 
            tipo: "Alfabetização", 
            url: pdfPraca3Ano 
        },
        { 
            id: "3_colorir", 
            titulo: "Decifrando o código e Colorindo: História do monumento do Sobá e da Feira Central", 
            tipo: "Alfabetização", 
            url: pdfFeirona3Ano 
        }
    ],
    quiz: {
      tema: "Cultura Sul-Mato-Grossense",
      perguntas: [
        {
          pergunta: "Qual é a bebida gelada típica do nosso estado?",
          opcoes: ["Suco de uva", "Tereré", "Chá quente"],
          correta: 1
        },
        {
          pergunta: "Qual deliciosa comida feita de peixe, típica da nossa região, foi trazida pelos imigrantes paraguaios?",
          opcoes: ["Sopa Paraguaia", "Chipa", "Pamonha"],
          correta: 1
        },
        {
          pergunta: "Qual lugar famoso de Campo Grande vende o tradicional Sobá, herança cultural de Okinawa?",
          opcoes: ["Feira Central", "Mercadão Municipal", "Estação Ferroviária"],
          correta: 0
        }
      ]
    }
  },
  4: {
    titulo: "4º Ano - História e Ferrovias",
    descricao: "A chegada da ferrovia Noroeste do Brasil (NOB) e o desenvolvimento regional.",
    paraImprimir: [
      { id: "4_trem", titulo: "Texto e Interpretação: A Estrada de Ferro", tipo: "Leitura", url: "#" },
      { id: "4_caca", titulo: "Caça-Palavras Histórico: Imigrantes da NOB", tipo: "Caça-Palavras", url: "#" }
    ],
    quiz: {
      tema: "A Rota da Estrada de Ferro",
      perguntas: [
        {
          pergunta: "Qual o nome da ferrovia que mudou a história de Campo Grande?",
          opcoes: ["Ferrovia Central", "Noroeste do Brasil (NOB)", "Trem do Pantanal"],
          correta: 1
        },
        {
          pergunta: "Qual avenida importante da nossa comunidade nasceu e cresceu como o grande epicentro do comércio local?",
          opcoes: ["Avenida Afonso Pena", "Rua Ana Luiza de Souza", "Rua 14 de Julho"],
          correta: 1
        },
        {
          pergunta: "O que o trem da NOB trazia para a nossa região entre as décadas de 1930 e 1960?",
          opcoes: ["Novos imigrantes, mercadorias e progresso", "Apenas pedras e areia", "Apenas cartas postais"],
          correta: 0
        }
      ]
    }
  },
  5: {
    titulo: "5º Ano - Patrimônio e Cidadania",
    descricao: "Análise do patrimônio histórico e preservação da identidade cultural local.",
    paraImprimir: [
      { id: "5_patrimonio", titulo: "Produção de Texto: Preservando Nossas Memórias", tipo: "Escrita", url: "#" },
      { id: "5_quiz_print", titulo: "Ficha de Atividade: Povos Indígenas e Quilombolas", tipo: "Pesquisa", url: "#" }
    ],
    quiz: {
      tema: "Identidade e Cidadania Regional",
      perguntas: [
        {
          pergunta: "O Quilombo Urbano São João Batista luta para preservar qual importante herança em Campo Grande?",
          opcoes: ["Cultura Afro-brasileira e suas tradições centenárias", "Tradições alemãs", "Gastronomia italiana"],
          correta: 0
        },
        {
          pergunta: "A celebração religiosa do Quilombo São João Batista, que já passa de 100 anos, começou originalmente em qual cidade do estado?",
          opcoes: ["Corumbá", "Coxim", "Bonito"],
          correta: 1
        },
        {
          pergunta: "Por que é importante proteger e documentar lugares como a antiga estação ferroviária e as comunidades quilombolas?",
          opcoes: ["Para esquecer o passado da cidade", "Para preservar o nosso patrimônio, nossa cidadania e história viva", "Para construir novos prédios comerciais no lugar"],
          correta: 1
        }
      ]
    }
  }
};
