const RightValue = 10

var Chance = 4

var i = 0

while (i < Chance) {

    var Tarun = prompt("Enter your Id Number")

    if (Tarun == RightValue) {
        alert("Correct Id")
        break
    }
    

    else if (Chance == (i + 1)) {
        alert("You Loss")
    }
    else if (Tarun > RightValue) {
        alert("Higher Id No. Not Match")
    }
    else {
        alert("Lower Id No. Not Match")
    }

    i++
}
