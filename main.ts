input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        # . . . #
        # # # # #
        `)
})
function ongelukkig () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # # # .
        # . . . #
        `)
}
// eten geven
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        # # . # #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        # # # # #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        # # . # #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        # # # # #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        . # # # .
        `)
    maag += 30
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        `)
})
function nietblij () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        `)
}
// aaien
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        . # # # .
        `)
})
function blij () {
	
}
function dood () {
    basic.showIcon(IconNames.Skull)
    basic.pause(5000)
}
let maag = 100
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    # . . . #
    . # # # .
    `)
loops.everyInterval(500, function () {
    maag += -1
})
basic.forever(function () {
    basic.pause(2000)
    if (maag >= 50) {
        blij()
    } else if (maag < 50 && maag > 10) {
        nietblij()
    } else {
        ongelukkig()
    }
})
