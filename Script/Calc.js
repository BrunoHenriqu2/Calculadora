/* Document */

var button = document.querySelectorAll("button")
var BNumber = document.querySelectorAll("button.BNumber")
var BOperator = document.querySelectorAll("button.BOperator")
var Del = document.querySelector("button#Del")
var Com = document.querySelector("button#Comma")
var Result = document.querySelector("div#Result")

/* Calculator */

/* var Operators = {
    0: Operator == "/",
    1: Operator == "*",
    2: Operator == "-",
    3: Operator == "+",
}
*/

var Expression
var Expression2
var Operator
var Count = 1
var AlreadyPut = false
/* var AlreadyComma = false */

for (let i = 0; i < BNumber.length; i++) {
    const element = BNumber[i]
    function Value() {
        let ButtonValue = Number(element.id)
        if (Count == 1) {
            Result.innerHTML += `${ButtonValue}`
        } else { /* if count == 2 */
            Result.innerHTML += `${ButtonValue}`
            if (typeof Expression2 != "undefined") {
                Expression2 += `${ButtonValue}` 
            } else {
                Expression2 = `${ButtonValue}`
            }
        }
    }

    element.addEventListener("click", Value)
}

for (let i = 0; i < button.length; i++) {
    const elementb = button[i]
    function onMouseOver () {
        elementb.style.backgroundColor = "#a0a0a0"
        elementb.style.borderColor = "#ffffff"
        elementb.style.color = "#ff0000"
    }

    function onMouseLeave () {
        elementb.style.backgroundColor = "#ffffff"
        elementb.style.borderColor = "#a0a0a0"
        elementb.style.color = "#f39090"
    }

    elementb.addEventListener("mouseover", onMouseOver)
    elementb.addEventListener("mouseleave", onMouseLeave)
}

function Delete() {
    Result.innerHTML = null
    Expression = undefined
    Expression2 = undefined
    Count = 1
    AlreadyPut = false
}

/* function Comma() {
    if (AlreadyComma == false) {
        Result.innerHTML += ","
        AlreadyComma = true
    }
} */


function Division () {
    if (AlreadyPut == false) {
        AlreadyPut = true

        Expression = Result.innerHTML
        Operator = "/"
        Result.innerHTML += " ÷ "
        Count = 2

    }
}


function Multiply () {
    if (AlreadyPut == false) {
        AlreadyPut = true

        Expression = Result.innerHTML
        Operator = "*"
        Result.innerHTML += " x "
        Count = 2

    }
}

function Subtract () {
    if (AlreadyPut == false) {
        AlreadyPut = true

        Expression = Result.innerHTML
        Operator = "-"
        Result.innerHTML += " - "
        Count = 2

    }
}

function Plus () {
    if (AlreadyPut == false) {
        AlreadyPut = true

        Expression = Result.innerHTML
        Operator = "+"
        Result.innerHTML += " + "
        Count = 2

    }
}

function Equal () {
    
    if (typeof Result.innerHTML != "null") {   
        Count = 1
        AlreadyPut = false

        if (Operator == "/") {
            Result.innerHTML = Number(Expression) / Number(Expression2)
            Operator = undefined
            Expression2 = undefined
        } else if (Operator == "*") {
            Result.innerHTML = Number(Expression) * Number(Expression2)
            Operator = undefined
            Expression2 = undefined
        } else if (Operator == "-") {
            Result.innerHTML = Number(Expression) - Number(Expression2)
            Operator = undefined
            Expression2 = undefined
        } else if (Operator == "+") {
            Result.innerHTML = Number(Expression) + Number(Expression2)
            Operator = undefined
            Expression2 = undefined
        }

    } else {
        window.alert("Por favor, utilize uma expressão válida!")
    }
}

/* function Equal () {
    
    if (typeof Result.innerHTML != "undefined") {      

        switch (Operators) {
            case 0:
                console.log(Expression / Expression2)
                break
            case 1:
                Expression * Expression2
                break
            case 2:
                Expression - Expression2
                break
            case 3:
                Expression + Expression2
                break
        }

    } else {
        window.alert("Por favor, utilize uma expressão válida!")
    }
} */

Del.addEventListener("click", Delete)
BOperator[0].addEventListener("click", Division)
BOperator[1].addEventListener("click", Multiply)
BOperator[2].addEventListener("click", Subtract)
BOperator[3].addEventListener("click", Plus)
BOperator[4].addEventListener("click", Equal)