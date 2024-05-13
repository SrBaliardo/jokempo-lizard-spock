const result = document.querySelector('.result')
const resolut = document.querySelector('.resolut')
const rick = document.querySelector('.img-rick')
const iaScore = document.querySelector('.ia-score-n')
const userScore = document.querySelector('.user-score-n')

let iaScoreN = 0
let userScoreN = 0

const playUser = (userChoice => {
    battle(userChoice, playIa())
})

const playIa = () => {
    const iaChoices = ['rock', 'paper', 'scissors', 'lizard', 'spock']
    const randomIaChoice = Math.floor(Math.random() * 5)

    return iaChoices[randomIaChoice]
}

const battle = (user, ia) => {
    console.log(user + ' - ' + ia);
    if(user === ia) {
        result.innerHTML = '"Empate! Mas que PO%$#@! Vamo de novo"'
        resolut.innerHTML = '(Escolhas Iguais)'
        rick.src = 'src/images/rick-draw.png'

    } else if(user === 'rock' && ia === 'scissors') {
        result.innerHTML = '"Perdi seu FD#&$ ARROM%$#@ do CAR%!@&$!"'
        resolut.innerHTML = '(Pedra quebra a Tesoura)'
        rick.src = 'src/images/rick-lose.png'
        userScoreN++
        userScore.innerHTML = userScoreN
    } else if(user === 'rock' && ia === 'lizard') {
        result.innerHTML = '"Perdi seu FD#&$ ARROM%$#@ do CAR%!@&$!"'
        resolut.innerHTML = '(Pedra esmaga o Lagarto)'
        rick.src = 'src/images/rick-lose.png'
        userScoreN++
        userScore.innerHTML = userScoreN

    } else if(user === 'paper' && ia === 'rock') {
        result.innerHTML = '"Perdi seu FD#&$ ARROM%$#@ do CAR%!@&$!"'
        resolut.innerHTML = '(Papel embrulha a Pedra)'
        rick.src = 'src/images/rick-lose.png'
        userScoreN++
        userScore.innerHTML = userScoreN
    } else if(user === 'paper' && ia === 'spock') {
        result.innerHTML = '"Perdi seu FD#&$ ARROM%$#@ do CAR%!@&$!"'
        resolut.innerHTML = '(Papel refuta o Spock)'
        rick.src = 'src/images/rick-lose.png'
        userScoreN++
        userScore.innerHTML = userScoreN

    } else if(user === 'scissors' && ia === 'paper') {
        result.innerHTML = '"Perdi seu FD#&$ ARROM%$#@ do CAR%!@&$!"'
        resolut.innerHTML = '(Tesoura corta o Papel)'
        rick.src = 'src/images/rick-lose.png'
        userScoreN++
        userScore.innerHTML = userScoreN
    } else if(user === 'scissors' && ia === 'lizard') {
        result.innerHTML = '"Perdi seu FD#&$ ARROM%$#@ do CAR%!@&$!"'
        resolut.innerHTML = '(Tesoura decapta o Lagarto)'
        rick.src = 'src/images/rick-lose.png'
        userScoreN++
        userScore.innerHTML = userScoreN

    } else if(user === 'lizard' && ia === 'paper') {
        result.innerHTML = '"Perdi seu FD#&$ ARROM%$#@ do CAR%!@&$!"'
        resolut.innerHTML = '(Lagarto come o Papel)'
        rick.src = 'src/images/rick-lose.png'
        userScoreN++
        userScore.innerHTML = userScoreN
    } else if(user === 'lizard' && ia === 'spock') {
        result.innerHTML = '"Perdi seu FD#&$ ARROM%$#@ do CAR%!@&$!"'
        resolut.innerHTML = '(Lagarto envenena o Spock)'
        rick.src = 'src/images/rick-lose.png'
        userScoreN++
        userScore.innerHTML = userScoreN

    } else if(user === 'spock' && ia === 'rock') {
        result.innerHTML = '"Perdi seu FD#&$ ARROM%$#@ do CAR%!@&$!"'
        resolut.innerHTML = '(Spock vaporiza a Pedra)'
        rick.src = 'src/images/rick-lose.png'
        userScoreN++
        userScore.innerHTML = userScoreN
    } else if(user === 'spock' && ia === 'scissors') {
        result.innerHTML = '"Perdi seu FD#&$ ARROM%$#@ do CAR%!@&$!"'
        resolut.innerHTML = '(Spock derrete a Tesoura)'
        rick.src = 'src/images/rick-lose.png'
        userScoreN++
        userScore.innerHTML = userScoreN

    } else {
        result.innerHTML = '"Ganhei OTÁRIO! Na sua cara seu MERD#$%@!"'
        resolut.innerHTML = '(O meu é maior que o seu)'
        rick.src = 'src/images/rick-win.png'
        iaScoreN++
        iaScore.innerHTML = iaScoreN
    }
}