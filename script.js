var champ1 = {
  nome: "Akali",
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPx0x73d__sPjKKebjEEjzul_TrlstjuGgFzWKzacqj-DkZvuQCRKvUYmLG8ArW4iPX28&usqp=CAU",
  atributos: {
   ataque: 65,
   defesa: 7,
   magia: 9
 }
};

var champ2 = {
  nome: "Sett",
  imagem: "https://www.mobafire.com/images/avatars/sett-classic.png",
  atributos: {
   ataque: 80,
   defesa: 32,
   magia: 9
 }
};

var champ3 = {
  nome: "Lillia",
  imagem: "http://pm1.narvii.com/7640/632cdc915e2134c07d05518e796b29a3cb440538r1-554-554v2_00.jpg",
  atributos: {
   ataque: 18,
   defesa: 10,
   magia: 56
 }
};

var champ4 = {
  nome: "Ezreal",
  imagem: "https://www.mobafire.com/images/avatars/ezreal-classic.png",
  atributos: {
   ataque: 35,
   defesa: 27,
   magia: 38
 }
};

var champ5 = {
  nome: "Rammus",
  imagem:"https://lolstatic-a.akamaihd.net/frontpage/apps/prod/shurima-2016/pt_BR/c9086fcc7c767c891424c11682e31d1a7635f569/assets/img/champions/rammus/rammus-hero-mobile.jpg",
  atributos: {
   ataque: 62,
   defesa: 85,
   magia: 30
 }
};
var champ6 = {
  nome: "Yummi",
  imagem: "https://pbs.twimg.com/media/EXB69uKXkAgGBZT.png",
  atributos: {
   ataque: 32,
   defesa: 27,
   magia: 74
 }
};
var campeaoMaquina;
var campeaoJogador;
var campeoes = [champ1, champ2, champ3, champ4, champ5, champ6];
//     0        1        2

function sortearCarta() {
  var numeroCampeaoMaquina = parseInt(Math.random() * 6);
  campeaoMaquina = campeoes[numeroCampeaoMaquina];
  
  var numeroCampeaoJogador = parseInt(Math.random() * 6);
  while (numeroCampeaoJogador == numeroCampeaoMaquina) {
    numeroCampeaoJogador = parseInt(Math.random() * 6);
  }
  campeaoJogador = campeoes[numeroCampeaoJogador];
  console.log(campeaoJogador);
  
  document.getElementById("btnSortear").disabled =true;
  document.getElementById("btnJogar").disabled =false;
  exibirCampeaoJogador();
}

function obtemCampeaoSelecionado() {
  var radioCampeao = document.getElementsByName("campeao");
  for(var i = 0; i < radioCampeao.length; i++) {
    if (radioCampeao[i].checked) {
      return radioCampeao[i].value;
    }
  }
}

function jogar() {
  console.log("chamou");
  var campeaoSelecionado = obtemCampeaoSelecionado();
  var divResultado =  document.getElementById("resultado");
  
  if (
    campeaoJogador.atributos[campeaoSelecionado] >
    campeaoMaquina.atributos[campeaoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Você é mais forte que esse campeão, parabêns invocador</p>";
  } else if (
    campeaoJogador.atributos[campeaoSelecionado] <
    campeaoMaquina.atributos[campeaoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Foi de base!, o bot era mais forte que você!</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>A quantidade do poder são idêndicos! Temos um empate!</p>";
  }
  divResultado.innerHTML = htmlResultado;
  
  document.getElementById("btnJogar").disabled = true;
  exibirCampeaoMaquina();
}

function exibirCampeaoJogador() {
  var divCampeaoJogador = document.getElementById("carta-jogador");
  divCampeaoJogador.style.backgroundImage = `url(${campeaoJogador.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura = 
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  
  var opcoesTexto = "";
  for (var atributo in campeaoJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='campeao' value='" + 
      atributo +
      "'>" +
      atributo +
        " " +
        campeaoJogador.atributos[atributo] +
        "<br>";
  }
  var nome = `<p class= "carta-subtitle">${campeaoJogador.nome}</p>`;
  
  divCampeaoJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCampeaoMaquina() {
  var divCampeaoMaquina = document.getElementById("carta-maquina");
  divCampeaoMaquina.style.backgroundImage = `url(${campeaoMaquina.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura = 
  '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  
  var opcoesTexto = "";
  for (var atributo in campeaoMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='campeao' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      campeaoMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${campeaoMaquina.nome}</p>`;
  
  divCampeaoMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}