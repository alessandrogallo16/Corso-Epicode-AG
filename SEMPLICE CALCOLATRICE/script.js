const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const btn3 = document.querySelector("#btn3")
const btn4 = document.querySelector("#btn4")
const btn5 = document.querySelector("#btn5")
const btn6 = document.querySelector("#btn6")
const btn7 = document.querySelector("#btn7")
const btn8 = document.querySelector("#btn8")
const btn9 = document.querySelector("#btn9")
const btn0 = document.querySelector("#btn0")
const btnPlus = document.querySelector("#btn-plus")
const btnMinus = document.querySelector("#btn-minus")
const btnDivide = document.querySelector("#btn-divide")
const btnFor = document.querySelector("#btn-for")
const btnTotal = document.querySelector("#btn-total")
const btnCE = document.querySelector("#btn-ce")

const calcScreen = document.querySelector(".calc-screen")
let partial = ""
let total
let totalP




btn1.addEventListener("click", () => {

    

    const totalToDelete = document.querySelector(".screen-result")
    if (totalToDelete !== null) {
        totalToDelete.remove()
    }
    


    const newNumber = document.createElement("p")
    newNumber.innerText = btn1.innerText
    newNumber.setAttribute("class", "screen-number")
    calcScreen.appendChild(newNumber)
    partial += btn1.innerText
    console.log(partial)
})

btn2.addEventListener("click", () => {

    const totalToDelete = document.querySelector(".screen-result")
    if (totalToDelete !== null) {
        totalToDelete.remove()
    }

    const newNumber = document.createElement("p")
    newNumber.innerText = btn2.innerText
    newNumber.setAttribute("class", "screen-number")
    calcScreen.appendChild(newNumber)
    partial += btn2.innerText
    console.log(partial)
})

btn3.addEventListener("click", () => {

    const totalToDelete = document.querySelector(".screen-result")
    if (totalToDelete !== null) {
        totalToDelete.remove()
    }   
    const newNumber = document.createElement("p")
    newNumber.innerText = btn3.innerText
    newNumber.setAttribute("class", "screen-number")
    calcScreen.appendChild(newNumber)
    partial += btn3.innerText
    console.log(partial)
})

btn4.addEventListener("click", () => {
    
    const totalToDelete = document.querySelector(".screen-result")
    if (totalToDelete !== null) {
        totalToDelete.remove()
    }
    const newNumber = document.createElement("p")
    newNumber.innerText = btn4.innerText
    newNumber.setAttribute("class", "screen-number")
    calcScreen.appendChild(newNumber)
    partial += btn4.innerText
    console.log(partial)
})

btn5.addEventListener("click", () => {
 
    const totalToDelete = document.querySelector(".screen-result")
    if (totalToDelete !== null) {
        totalToDelete.remove()
    }
    const newNumber = document.createElement("p")
    newNumber.innerText = btn5.innerText
    newNumber.setAttribute("class", "screen-number")
    calcScreen.appendChild(newNumber)
    partial += btn5.innerText
    console.log(partial)
})

btn6.addEventListener("click", () => {
    
    const totalToDelete = document.querySelector(".screen-result")
    if (totalToDelete !== null) {
        totalToDelete.remove()
    }
    const newNumber = document.createElement("p")
    newNumber.innerText = btn6.innerText
    newNumber.setAttribute("class", "screen-number")
    calcScreen.appendChild(newNumber)
    partial += btn6.innerText
    console.log(partial)
})

btn7.addEventListener("click", () => {
    
    const totalToDelete = document.querySelector(".screen-result")
    if (totalToDelete !== null) {
        totalToDelete.remove()
    }
    const newNumber = document.createElement("p")
    newNumber.innerText = btn7.innerText
    newNumber.setAttribute("class", "screen-number")
    calcScreen.appendChild(newNumber)
    partial += btn7.innerText
    console.log(partial)
})

btn8.addEventListener("click", () => {
    
    const totalToDelete = document.querySelector(".screen-result")
    if (totalToDelete !== null) {
        totalToDelete.remove()
    }
    const newNumber = document.createElement("p")
    newNumber.innerText = btn8.innerText
    newNumber.setAttribute("class", "screen-number")
    calcScreen.appendChild(newNumber)
    partial += btn8.innerText
    console.log(partial)
})

btn9.addEventListener("click", () => {
    
    const totalToDelete = document.querySelector(".screen-result")
    if (totalToDelete !== null) {
        totalToDelete.remove()
    }
    const newNumber = document.createElement("p")
    newNumber.innerText = btn9.innerText
    newNumber.setAttribute("class", "screen-number")
    calcScreen.appendChild(newNumber)
    partial += btn9.innerText
    console.log(partial)
})

btn0.addEventListener("click", () => {
    
    const totalToDelete = document.querySelector(".screen-result")
    if (totalToDelete !== null) {
        totalToDelete.remove()
    }
    const newNumber = document.createElement("p")
    newNumber.innerText = btn0.innerText
    newNumber.setAttribute("class", "screen-number")
    calcScreen.appendChild(newNumber)
    partial += btn0.innerText
    console.log(partial)
})



btnPlus.addEventListener("click", () => {
    
    const totalToDelete = document.querySelector(".screen-result")
    if (totalToDelete !== null) {
        
        let oldTotal = totalToDelete.innerHTML
        totalToDelete.remove()
        console.log(`hai in memoria ${oldTotal}`)

        const newNumber = document.createElement("p")
        newNumber.innerText = oldTotal + btnPlus.innerText
        newNumber.setAttribute("class", "screen-number")
        calcScreen.appendChild(newNumber)

    
        partial += newNumber.innerText
        console.log(partial)
    
    } else if (!partial.includes("+") && !partial.includes("-") && !partial.includes("/") && !partial.includes("x")) {

        const newNumber = document.createElement("p")
        newNumber.innerText = btnPlus.innerText
        newNumber.setAttribute("class", "screen-number")
        calcScreen.appendChild(newNumber)

    
        partial += btnPlus.innerText
        console.log(partial)
    } else { 
        window.alert("hai già selezionato un operatore matematico")
    }

})

btnMinus.addEventListener("click", () => {
    
    const totalToDelete = document.querySelector(".screen-result")
    if (totalToDelete !== null) {
        
        let oldTotal = totalToDelete.innerHTML
        totalToDelete.remove()
        console.log(`hai in memoria ${oldTotal}`)

        const newNumber = document.createElement("p")
        newNumber.innerText = oldTotal + btnMinus.innerText
        newNumber.setAttribute("class", "screen-number")
        calcScreen.appendChild(newNumber)

    
        partial += newNumber.innerText
        console.log(partial)

    } else if (!partial.includes("+") && !partial.includes("-") && !partial.includes("/") && !partial.includes("x")) {

        const newNumber = document.createElement("p")
    newNumber.innerText = btnMinus.innerText
    newNumber.setAttribute("class", "screen-number")
    calcScreen.appendChild(newNumber)

    
    partial += btnMinus.innerText
    console.log(partial)
    } else { 
        window.alert("hai già selezionato un operatore matematico")
    }

})

btnDivide.addEventListener("click", () => {
    
    const totalToDelete = document.querySelector(".screen-result")
    if (totalToDelete !== null) {
        
        let oldTotal = totalToDelete.innerHTML
        totalToDelete.remove()
        console.log(`hai in memoria ${oldTotal}`)

        const newNumber = document.createElement("p")
        newNumber.innerText = oldTotal + btnDivide.innerText
        newNumber.setAttribute("class", "screen-number")
        calcScreen.appendChild(newNumber)

    
        partial += newNumber.innerText
        console.log(partial)

     } else if (!partial.includes("+") && !partial.includes("-") && !partial.includes("/") && !partial.includes("x")) {

        const newNumber = document.createElement("p")
    newNumber.innerText = btnDivide.innerText
    newNumber.setAttribute("class", "screen-number")
    calcScreen.appendChild(newNumber)

    
    partial += btnDivide.innerText
    console.log(partial)
    } else { 
        window.alert("hai già selezionato un operatore matematico")
    }

})

btnFor.addEventListener("click", () => {
    
    const totalToDelete = document.querySelector(".screen-result")
    if (totalToDelete !== null) {
        
        let oldTotal = totalToDelete.innerHTML
        totalToDelete.remove()
        console.log(`hai in memoria ${oldTotal}`)

        const newNumber = document.createElement("p")
        newNumber.innerText = oldTotal + btnFor.innerText
        newNumber.setAttribute("class", "screen-number")
        calcScreen.appendChild(newNumber)

    
        partial += newNumber.innerText
        console.log(partial)

    } else if (!partial.includes("+") && !partial.includes("-") && !partial.includes("/") && !partial.includes("x")) {

        const newNumber = document.createElement("p")
    newNumber.innerText = btnFor.innerText
    newNumber.setAttribute("class", "screen-number")
    calcScreen.appendChild(newNumber)

    
    partial += btnFor.innerText
    console.log(partial)
    } else { 
        window.alert("hai già selezionato un operatore matematico")
    }

})







btnTotal.addEventListener("click", () => {

    let partialArray
    let numToDelete = document.querySelectorAll(".screen-number")

    for (num of numToDelete) {
        calcScreen.removeChild(num)
    }
   
    if (partial.includes("+")) {

        partialArray = partial.split("+")

        total = parseFloat(partialArray[0]) + parseFloat(partialArray[1])
        console.log(total)

        let totalP = document.createElement("p")
        totalP.innerText = total
        totalP.setAttribute("class","screen-result")
        
        if (isNaN(totalP.innerText)) {
            totalP.innerText = "Errore"
            calcScreen.appendChild(totalP)        
        } else {calcScreen.appendChild(totalP)}
        
        

        
    } else if (partial.includes("-")) {
        
        if (partial.startsWith("-")) {

            partialArray = partial.split("-")

            total = -(parseFloat(partialArray[1])) - parseFloat(partialArray[2])
            console.log(total)

            let totalP = document.createElement("p")
            totalP.innerText = total
            totalP.setAttribute("class","screen-result")
            if (isNaN(totalP.innerText)) {
            totalP.innerText = "Errore"
            calcScreen.appendChild(totalP)        
            } else {calcScreen.appendChild(totalP)}
            

        } else {
        partialArray = partial.split("-")

        total = parseFloat(partialArray[0]) - parseFloat(partialArray[1])
        console.log(total)

        let totalP = document.createElement("p")
        totalP.innerText = total
        totalP.setAttribute("class","screen-result")
            if (isNaN(totalP.innerText)) {
            totalP.innerText = "Errore"
            calcScreen.appendChild(totalP)        
            } else {calcScreen.appendChild(totalP)}
        }
        
    
    } else if (partial.includes("/")) {
        partialArray = partial.split("/")

        total = parseFloat(partialArray[0]) / parseFloat(partialArray[1])
        console.log(total)

        let totalP = document.createElement("p")
        totalP.innerText = total
        totalP.setAttribute("class","screen-result")
        if (isNaN(totalP.innerText)) {
            totalP.innerText = "Errore"
            calcScreen.appendChild(totalP)
                    
        } else {calcScreen.appendChild(totalP)}
        

    } else if (partial.includes("x")) {
        partialArray = partial.split("x")

        total = parseFloat(partialArray[0]) * parseFloat(partialArray[1])
        console.log(total)

        let totalP = document.createElement("p")
        totalP.innerText = total
        totalP.setAttribute("class","screen-result")
        if (isNaN(totalP.innerText)) {
            totalP.innerText = "Errore"
            calcScreen.appendChild(totalP)        
        } else {calcScreen.appendChild(totalP)}
        
    }



    partial = ""
    console.log(total)
    

})



btnCE.addEventListener("click", () => {
    
    let numToDelete = document.querySelectorAll(".screen-number")

    for (num of numToDelete) {
        calcScreen.removeChild(num)
    }

    let totalToDelete = document.querySelector(".screen-result")

    console.log(totalToDelete)

    if (totalToDelete.innerText > 0 || totalToDelete.innerText < 0 || totalToDelete.innerText === "Errore") {
    totalToDelete.remove()
    }

    
    
    partial = ""



        
})