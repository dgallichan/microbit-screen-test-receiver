radio.onReceivedValue(function (name, value) {
    if (name == "imAsNumber") {
        basic.showLeds(`
            # # # # #
            . . . . .
            . . # . .
            . . . . .
            # # # # #
            `)
        thisPixelCalcVal = value
        for (let index_rows = 0; index_rows <= 4; index_rows++) {
            for (let index_cols = 0; index_cols <= 4; index_cols++) {
                thisPixelValue = thisPixelCalcVal % 2
                thisPixelCalcVal = Math.floor(thisPixelCalcVal / 2)
                if (thisPixelValue > 0) {
                    led.plot(4 - index_cols, index_rows)
                } else {
                    led.unplot(4 - index_cols, index_rows)
                }
            }
        }
    }
})
let thisPixelValue = 0
let thisPixelCalcVal = 0
radio.setGroup(99)
basic.showLeds(`
    # # # . #
    # . # . #
    # # . . #
    # . # . .
    # . # . #
    `)
