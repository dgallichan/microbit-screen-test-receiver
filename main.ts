radio.onReceivedString(function (receivedString) {
	
})
let thisPixelValue = 0
radio.setGroup(1)
let imageList = [
16,
12,
8,
4,
3
]
for (let index_rows = 0; index_rows <= 4; index_rows++) {
    for (let index_cols = 0; index_cols <= 4; index_cols++) {
        thisPixelValue = imageList[index_rows] % 2 ** index_cols
        if (thisPixelValue == 1) {
            led.plot(4 - index_cols, index_rows)
        } else {
            led.unplot(4 - index_cols, index_rows)
        }
    }
}
basic.forever(function () {
	
})
