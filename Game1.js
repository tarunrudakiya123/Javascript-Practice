const RightValue = 5  //step-1  (decide rightvalue Number)

var Chance = 3        //step-4  (create var for chance)

var i = 0             //step-4  (create var for while loop)

while (i < Chance) {      //step-5  (create condition and compare)

    var Tarun = prompt("Enter your Roll Number")   //step-2 (Create prompt box )



    if (Tarun == RightValue) {                               //step-3(Apply Condition... for Equal Value)
        alert("Correct RollNumber  Go to The Next window")
        break
    }

    else if (Chance == (i + 1)) {                              //step-6  (create condition and compare for last allret)
        alert("You loss")
    }

    else if (Tarun > RightValue) {                   //step-3 (Apply Condition... for higher Value)
        alert("Your RollNumber is Higher")
    }

    else {
        alert("Your RollNumber is lower")          //step-3 (Apply Condition... for lower Value)
    }


    i++

}
