const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "voce é?",
        alternativas: [
            {
                texto: "mulher !",
                afirmacao: "mulher"
            },
            {
                texto: "sou homem !",
                afirmacao: "sou homem "
            }
        ]
    },
    {
        enunciado: "vai estudar até ser alguém na vida?",
        alternativas: [
            {
                texto: "sim, quero ser alguém!",
                afirmacao: "não, quero trabalhar na roça!"
            },
            {
                texto: "quero trabalhar na roça",
                afirmacao: "quero ser vagabundo"
            }
        ]
    },
    {
        enunciado: "voce vem de uma familia rica?",
        alternativas: [
            {
                texto: "veio de uma familia rica.",
                afirmacao: "sou rico"
            },
            {
                texto: "sou pobre .",
                afirmacao: "vou ser tranqueira"
            }
        ]
    },
    {
        enunciado: "prefere messi ou cr7?",
        alternativas: [
            {
                texto: "messi sou burro .",
                afirmacao: "prefiro messi sou burro"
            },
            {
                texto: "cr7 sou esperto/a.",
                afirmacao: ",prefiro cr7 sou inteligente"
            }
        ]
    },
    {
        enunciado: "voce tem futuro? ",
        alternativas: [
            {
                texto: "não, vou ser pobre .",
                afirmacao: "nao tenho futuro"
            
               
            },
            {
                texto: "vou ser rico.",
                afirmacao: "vou ter futuro na droga"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
