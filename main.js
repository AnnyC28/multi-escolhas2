const caixaPrincipal = document.querySelector('.caixaPrincipal');
const caixaPerguntas = document.querySelector('.caixaPerguntas');
const caixaAlternativas = document.querySelector('.caixaAlternativas');
const caixaResultado = document.querySelector('.caixaResultado');
const textoResultados = document.querySelector('.textoResultados');
const perguntas = [
    {
        enunciado: "Você é um(a) professor(a) de um colégio publico e recebeu uma proposta para trabalhar em uma turma onde possui três alunos atípios: uma autista, uma aluna surda e um aluno com TDAH:",
        alternativas: [
            {
            texto: "Aceitar o emprego.",
            afirmacao: "Pois posso buscar entender o compostamento de cada um e posso trazer uma educação de qualidade para cada aluno com sua necessidade especial, independente de precisar me dedicar mais ao encaixar todos no plano de estudo."},

            {
            texto: "Não vou aceitar.",
            afirmacao: "Pois não posso deixar de entregar uma aula simples e gastar meu tempo com alunos diferentes para agradar o Sistema Educacional e/ou mães que querem deixar seus filhos no colégio público ao invés de bancar um estudo particular para cada um de seus filhos atípicos."}


        ]

    },
    {
        enunciado: "Você é casado(a) e possui 3 filhos, mas após seu filho mais novo completar 2 anos, descobre que ele possui Transtorno do Espectro Autista de grau 2, onde precisa de um suporte moderado para poder estudar e até estar em ambientes desconhecidos, o que faz perante essa situação:",
        alternativas: [
            {
            texto: "Buscar apoio para meu filho.",
            afirmacao: "Para quando ele precisar ir para a escola e posteriormente para o colégio estadual, tenha uma supervisão e um cuidado especial com ele, para quando ele quiser entrar no mercado de trabalho e exercer uma profissão, possa estar acostumado com o comportamento de pessoas de fora"},

            {
            texto: "Não buscar ajuda de especialistas e tentar resolver em casa.",
            afirmacao: "Eu sei que ele pode ter o estilo de vida de crianças normais apenas ignorando as diferenças, e as pessoas também precisam entender que ele é especial e precisam buscar entender o comportamento dele."}

        ]

    },
    {
        enunciado: "Ao fazer 18 anos, seu filho está no último ano do ensino médio e quer entrar no mercado de trabalho, mas não é qualquer ambiente de trabalho que aceite ele, por conta do TEA, mas o sonho dele é ir para as Forças Armadas, o que fazer nessa situação?",
        alternativas: [

            {
            texto: "Buscar algum lugar no qual ele possa realizar o sonho dele e que ele possa fazer algo significativo.",
            afirmacao: "Pois quero fazer o possivel para meu filho se encaixar e também ser aceito em seu meio social."},

            {
            texto: "Fazer ele se convencer que não pode fazer algo desse tipo.",
            afirmacao: "Porque não é normal para um serviço tão complicado igual e alistar nas Força Armadas, então o melhor seria desistir e continuar deixando as pessoas terem um esteriótipo errado de pessoas com TEA."}

        ]

    },
    {
        enunciado: "Após completar 23 anos, você se casou, mas sua esposa é surda(você aprendeu a se comunicar com ela aprendendo o básico de libras e escrevendo em um caderno). Ela sonha em ter filhos, mas a chance de seus filhos nascerem com surdez parcial e/ou total são altas, o que você faria? ",
        alternativas: [

            {
            texto: "Ajudo ela a realizar esse sonho.",
            afirmacao: "Não importa as dificuldades das quais nossos filhos ou nós tenhamos que passar, eu a amo e caso eles tenham problemas de audição, eu irei fazer com que tenham a melhor educação e irei buscar o melhor apoio possível, e também irei ajudar ela em qualquer atividade em relação as crianças."},

            {
            texto:"Não vou ter filhos com ela, mas sim, irei buscar formas de adotar um filho.",
            afirmacao:"Não quero ter a possibilidade de ter filhos surdos para me preocupar em viver procurando um apoio para eles até que se tornem independentes, se for para ter filhos e realizar o sonho dela, uma adoção seria o melhor."},

        ]

    },
    {
        enunciado: "Você foi chamado para ajudar em uma casa de apoio beneficente de pessoas com Transtorno do Espectro Autista, Síndrome de Down e pessoas surdas, sem fins lucrativos, para auxiliar nos estudos, fazer planejamentos e ensinar a outras pessoas sobre como auxiliar esse grupo de pessoas, o que você faz?",
        alternativas: [

            {
            texto:"Aceito o trabalho.",
            afirmacao: "Esse trabalho, apesar de não ser lucrativo, tem um valor significativo para mim, pois sempre quis ajudar de alguma forma as pessoas ao meu redor, principalmente esse grupo específico de pessoas, então não será problema."},


            {
            texto:"Não aceito o trabalho.",
            afirmacao:"Não acho que seja muito gratificante trabalhar com algo que não irá me render dinheiro ou algum reconhecimento importante, "},

        ]

    },
]
let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostreResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent ="";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",function(){
            atual++;
            mostraPergunta();
        })
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostreResultado (){
    caixaPerguntas.textContent = " Em 2049 ...";
    textoResultados.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}








mostraPergunta();