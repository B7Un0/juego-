input.onButtonPressed(Button.A, function () {
    A_is_pressed += 1
    if (A_is_pressed == 1) {
        datalogger.log(datalogger.createCV("A", 1))
        A_is_pressed += 0
        basic.showNumber(A_is_pressed)
    }
    control.reset()
})
let A_is_pressed = 0
A_is_pressed = 0
