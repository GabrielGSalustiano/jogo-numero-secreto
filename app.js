let listaSorteados = [];
let limiteSorteio = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function textoInicial(){
  exibirTextoNaTela('h1', 'Jogo do número secreto');
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

textoInicial();

function verificarChute() {
  let chute = document.querySelector('input').value;
  if(numeroSecreto == chute){
    exibirTextoNaTela('h1', 'Acertô Mizeravi!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let textoTentativas = `Você acertou com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela('p', textoTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else{
    exibirTextoNaTela('h1', 'Errou Feio! Errou Rude!');
    if(numeroSecreto > chute){
      exibirTextoNaTela('p', 'O número secreto é maior!');
    }else{
      exibirTextoNaTela('p', 'O número secreto é menor!');
    };
    tentativas++;
    limparCampo();
  };
    console.log(numeroSecreto == chute);
  };

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * limiteSorteio + 1);
    let quantosElementos = listaSorteados.length;
    if (quantosElementos == limiteSorteio){
      listaSorteados = [];
    }
    if (listaSorteados.includes(numeroEscolhido)) {
      return gerarNumeroAleatorio()
    } else {
      listaSorteados.push(numeroEscolhido);
      return(numeroEscolhido);
      };
    }

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
};

function recomecarJogo(){
  textoInicial();
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  document.getElementById('reiniciar').setAttribute('disabled', true);
  tentativas = 1;
  console.log(listaSorteados);
}