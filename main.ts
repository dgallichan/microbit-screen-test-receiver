radio.onReceivedString(function (receivedString) {
    for (let index_rows = 0; index_rows <= 4; index_rows++) {
        thisRowCalcVal = parseFloat(receivedString.substr(index_rows * 2, 2))
        for (let index_cols = 0; index_cols <= 4; index_cols++) {
            thisPixelValue = thisRowCalcVal % 2
            thisRowCalcVal = Math.floor(thisRowCalcVal / 2)
            if (thisPixelValue > 0) {
                led.plot(4 - index_cols, index_rows)
            } else {
                led.unplot(4 - index_cols, index_rows)
            }
        }
    }
})
let thisPixelValue = 0
let thisRowCalcVal = 0
basic.showLeds(`
    # # # # .
    . . . # .
    . # . # .
    . # . # .
    . # . # .
    `)
radio.setGroup(1)
