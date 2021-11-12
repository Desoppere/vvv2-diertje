input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        # . . . #
        # # # # #
        `)
})
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
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.forever(function () {
    basic.pause(5000)
    basic.pause(5000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # # # .
        # . . . #
        `)
})
