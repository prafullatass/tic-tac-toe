//debugger
let isItO = "X"
let boxClicked;
let clicksMade = 0;
const clicked = document.querySelectorAll("[class ^= column]")


//arg[0] is letter, arg[1][2][3] are 3 classNames whose textcontent to check
const matchLetter = (...arg) => {
    if (clicked[arg[1]].textContent === arg[0] &&
        clicked[arg[2]].textContent === arg[0] &&
        clicked[arg[3]].textContent === arg[0]) {
            document.querySelector(".result").textContent = `You Win ${arg[0]}!!!`
            return true
    }
}


const checkForWinner = () => {
    if (clicksMade === 9) {
        document.querySelector(".result").textContent = "This is Tie!!!"
    }
    else {
              //horizontal lines
        if (matchLetter("X", 0, 1, 2) || matchLetter("O", 0, 1, 2) ||
            matchLetter("X", 3, 4, 5) || matchLetter("O", 3, 4, 5) ||
            matchLetter("X", 6, 7, 8) || matchLetter("O", 6, 7, 8) ||
            //vertical lines
            matchLetter("X", 0, 3, 6) || matchLetter("O", 0, 3, 6) ||
            matchLetter("X", 1, 4, 7) || matchLetter("O", 1, 4, 7) ||
            matchLetter("X", 2, 5, 8) || matchLetter("O", 2, 5, 8) ||
            //diagonally
            matchLetter("X", 0, 4, 8) || matchLetter("O", 0, 4, 8) ||
            matchLetter("X", 2, 4, 6) || matchLetter("O", 2, 4, 6) 
             === true)
             {
                 //enable the reply button
                 document.getElementById("reply").disabled = false
                 //disable the row class
                 document.querySelector(".row").style.pointerEvents = "none"
                //  console.log("This is tie!!!")
             }
    }
}

//reload page anytime when reply button pressed
document.querySelector("#reply").addEventListener("click",
    () => {
        location.reload()
    })



clicked.forEach((square) => {
    square.addEventListener("click",
        () => {
            let squareNum = square.className.split("_")
            boxClicked = document.querySelector(`.${square.className}`)
            if (boxClicked.textContent === "") {
                boxClicked.textContent = isItO
                clicksMade++
                if (isItO === "X")
                    isItO = "O"
                else
                    isItO = "X"
                checkForWinner()
            }
            boxClicked.setAttribute("style", "background-color: gray;")
            //boxClicked.className = "columnDisabled_"+squareNum;
        })
})


