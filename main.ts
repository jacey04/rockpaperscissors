input.onGesture(Gesture.Shake, function () {
    pickshape()
})
function pickshape () {
    myhand = randint(1, 3)
    if (myhand == rockindex) {
        rockimage.showImage(0)
    }
    if (myhand == paperindex) {
        paperimage.showImage(0)
    }
    if (myhand == scissorsindex) {
        scissorsimage.showImage(0)
    }
}
let myhand = 0
let scissorsimage: Image = null
let paperimage: Image = null
let rockimage: Image = null
let scissorsindex = 0
let paperindex = 0
let rockindex = 0
rockindex = 1
paperindex = 2
scissorsindex = 3
rockimage = images.createImage(`
    . . . . .
    . # # # .
    # # # # #
    # # # # #
    . . . . .
    `)
paperimage = images.createImage(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
scissorsimage = images.createImage(`
    # # . . #
    # # . # .
    . . # . .
    # # . # .
    # # . . #
    `)
