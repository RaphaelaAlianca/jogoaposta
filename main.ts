function apostaJogador () {
    if (animailJogador == 1) {
        basic.showIcon(IconNames.Giraffe)
    } else if (animailJogador == 2) {
        basic.showIcon(IconNames.Tortoise)
    } else if (animailJogador == 3) {
        basic.showIcon(IconNames.Snake)
    }
    if (animailJogador > 3) {
        animailJogador = 0
    }
}
function melhorde3 () {
    if (pontosJogador == 3) {
        basic.showLeds(`
            . # # # #
            . . . # .
            . . . # .
            . # . # .
            . # # # .
            `)
        basic.pause(1000)
        pontosJogador = 0
        pontosMaquina = 0
    } else if (pontosMaquina == 3) {
        basic.showLeds(`
            # . . . #
            # # . # #
            # . # . #
            # . . . #
            # . . . #
            `)
        basic.pause(1000)
        pontosMaquina = 0
        pontosJogador = 0
    }
}
function apostaMaquina () {
    animalMaquina = randint(1, 3)
    while (animalMaquina == animailJogador) {
        animalMaquina = randint(1, 3)
    }
    if (animalMaquina == 1) {
        basic.showIcon(IconNames.Giraffe)
    } else if (animalMaquina == 2) {
        basic.showIcon(IconNames.Tortoise)
    } else if (animalMaquina == 3) {
        basic.showIcon(IconNames.Snake)
    }
}
input.onButtonPressed(Button.A, function () {
    animailJogador = animailJogador + 1
    apostaJogador()
})
function resultadoAposta () {
    aposta = randint(1, 3)
    if (aposta == 1) {
        basic.showIcon(IconNames.Giraffe)
    } else if (aposta == 2) {
        basic.showIcon(IconNames.Tortoise)
    } else if (aposta == 3) {
        basic.showIcon(IconNames.Snake)
    }
}
input.onButtonPressed(Button.B, function () {
    if (animailJogador >= 1) {
        apostaMaquina()
        basic.pause(5000)
        resultadoAposta()
        vencedor()
        basic.pause(1000)
        animailJogador = 0
        melhorde3()
    }
})
function vencedor () {
    if (aposta == animailJogador) {
        basic.showLeds(`
            . # # # #
            . . . # .
            . . . # .
            . # . # .
            . # # # .
            `)
        basic.pause(2000)
        pontosJogador = pontosJogador + 1
        basic.showNumber(pontosJogador)
    } else if (aposta == animalMaquina) {
        basic.showLeds(`
            # . . . #
            # # . # #
            # . # . #
            # . . . #
            # . . . #
            `)
        basic.pause(2000)
        pontosMaquina = pontosMaquina + 1
        basic.showNumber(pontosMaquina)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
}
let pontosMaquina = 0
let pontosJogador = 0
let aposta = 0
let animalMaquina = 0
let animailJogador = 0
animailJogador = 0
animalMaquina = 0
aposta = 0
pontosJogador = 0
pontosMaquina = 0
