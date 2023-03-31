
const RightValue = 7                                      //1

var Chance = 5                                            //4
   
var i = 0                                                //4

while (i < Chance) {                                      //5

    var get = prompt("Enter Your Id Here")                    //2

    if (get == RightValue) {                                      //3
        alert("Coreect Id Please go to other Process")

    }

    else if(Chance ==(i+1)){
        alert("You Loss")
    }

    else if (get > RightValue) {
        alert("Higher Id Not Accepted")

    }
    else {
        alert("Lower Id Not Accepetd")
    }

    i++
}

