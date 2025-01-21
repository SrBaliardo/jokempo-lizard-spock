const result = document.querySelector(".result");
const resolut = document.querySelector(".resolut");
const rick = document.querySelector(".img-rick");
const iaScore = document.querySelector(".ia-score-n");
const userScore = document.querySelector(".user-score-n");

let iaScoreN = 0;
let userScoreN = 0;
let rounds = 0;

const playUser = (userChoice) => {
  if (rounds < 10) {
    battle(userChoice, playIa());
    rounds++;

    if (rounds === 10) {
      endGame();
    }
  }
};

const playIa = () => {
  const iaChoices = ["rock", "paper", "scissors", "lizard", "spock"];
  const randomIaChoice = Math.floor(Math.random() * 5);

  return iaChoices[randomIaChoice];
};

const battle = (user, ia) => {
  if (user === ia) {
    result.innerHTML = '"Empate! Mas que PO%$#@! Vamos de novo"';
    resolut.innerHTML = "(Escolhas Iguais)";
    rick.src = "src/images/rick-draw.png";
  } else if (user === "rock" && ia === "scissors") {
    result.innerHTML = '"Perdi seu FU#&$ ARROM%$#@ do CAR%!@&$!"';
    resolut.innerHTML = "(Pedra quebra a Tesoura)";
    rick.src = "src/images/rick-lose.png";
    userScoreN++;
    userScore.innerHTML = userScoreN;
  } else if (user === "rock" && ia === "lizard") {
    result.innerHTML = '"Perdi seu FU#&$ ARROM%$#@ do CAR%!@&$!"';
    resolut.innerHTML = "(Pedra esmaga o Lagarto)";
    rick.src = "src/images/rick-lose.png";
    userScoreN++;
    userScore.innerHTML = userScoreN;
  } else if (user === "paper" && ia === "rock") {
    result.innerHTML = '"Perdi seu FU#&$ ARROM%$#@ do CAR%!@&$!"';
    resolut.innerHTML = "(Papel embrulha a Pedra)";
    rick.src = "src/images/rick-lose.png";
    userScoreN++;
    userScore.innerHTML = userScoreN;
  } else if (user === "paper" && ia === "spock") {
    result.innerHTML = '"Perdi seu FU#&$ ARROM%$#@ do CAR%!@&$!"';
    resolut.innerHTML = "(Papel refuta o Spock)";
    rick.src = "src/images/rick-lose.png";
    userScoreN++;
    userScore.innerHTML = userScoreN;
  } else if (user === "scissors" && ia === "paper") {
    result.innerHTML = '"Perdi seu FU#&$ ARROM%$#@ do CAR%!@&$!"';
    resolut.innerHTML = "(Tesoura corta o Papel)";
    rick.src = "src/images/rick-lose.png";
    userScoreN++;
    userScore.innerHTML = userScoreN;
  } else if (user === "scissors" && ia === "lizard") {
    result.innerHTML = '"Perdi seu FU#&$ ARROM%$#@ do CAR%!@&$!"';
    resolut.innerHTML = "(Tesoura decapta o Lagarto)";
    rick.src = "src/images/rick-lose.png";
    userScoreN++;
    userScore.innerHTML = userScoreN;
  } else if (user === "lizard" && ia === "paper") {
    result.innerHTML = '"Perdi seu FU#&$ ARROM%$#@ do CAR%!@&$!"';
    resolut.innerHTML = "(Lagarto come o Papel)";
    rick.src = "src/images/rick-lose.png";
    userScoreN++;
    userScore.innerHTML = userScoreN;
  } else if (user === "lizard" && ia === "spock") {
    result.innerHTML = '"Perdi seu FU#&$ ARROM%$#@ do CAR%!@&$!"';
    resolut.innerHTML = "(Lagarto envenena o Spock)";
    rick.src = "src/images/rick-lose.png";
    userScoreN++;
    userScore.innerHTML = userScoreN;
  } else if (user === "spock" && ia === "rock") {
    result.innerHTML = '"Perdi seu FU#&$ ARROM%$#@ do CAR%!@&$!"';
    resolut.innerHTML = "(Spock vaporiza a Pedra)";
    rick.src = "src/images/rick-lose.png";
    userScoreN++;
    userScore.innerHTML = userScoreN;
  } else if (user === "spock" && ia === "scissors") {
    result.innerHTML = '"Perdi seu FU#&$ ARROM%$#@ do CAR%!@&$!"';
    resolut.innerHTML = "(Spock derrete a Tesoura)";
    rick.src = "src/images/rick-lose.png";
    userScoreN++;
    userScore.innerHTML = userScoreN;
  } else {
    result.innerHTML = '"Ganhei OTÁRIO! Na sua cara seu MERD#$%@!"';
    resolut.innerHTML = "(O meu é maior que o seu)";
    rick.src = "src/images/rick-win.png";
    iaScoreN++;
    iaScore.innerHTML = iaScoreN;
  }
};

const endGame = () => {
  const main = document.querySelector(".container");

  if (userScoreN > iaScoreN) {
    result.innerHTML = '"Mas que MERD#$%@, eu perdi!';
    resolut.innerHTML = "Toma aqui a PO$#@! do seu dólar";
    rick.src = "src/images/rick-finish-loses.jpg";
  } else if (userScoreN < iaScoreN) {
    result.innerHTML = '"kkkkk GANHEI!';
    resolut.innerHTML = "Agora vem me pagar aquelazinha xuxu :3";
    rick.src = "src/images/rick-finish-wins.jpg";
  } else {
    result.innerHTML = '"Mas o que... Empate! Vamos de novo!';
    resolut.innerHTML = 'Dessa vez eu vou te squanchar!"';
    rick.src = "src/images/rick-finish-draws.webp";
  }

  const resetButton = document.createElement("button");
  resetButton.innerHTML = "Reiniciar";
  resetButton.classList.add("btn-reset");
  resetButton.onclick = () => window.location.reload();
  main.appendChild(resetButton);
};
