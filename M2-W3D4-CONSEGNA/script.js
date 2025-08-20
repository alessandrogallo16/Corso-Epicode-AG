
let titleH1 = document.getElementById("title-h1")
let body = document.getElementById("body")
let addressH3 = document.getElementById("address")
let links = document.getElementsByClassName("link")
let images = document.getElementsByClassName("product-img")
let prices = document.getElementsByClassName("price")
let colors = ["red","blue","green","black","white"]
let colorsIndex = 0

function changeTitle () {

    if (titleH1.innerText === "Negozio di Alex") {
        titleH1.innerText = "Alex Shop"
    } else {
        titleH1.innerText = "Negozio di Alex"
    }
}

function changeBackColor () {
    if (body.classList.contains("colore2")) {
        body.classList.remove("colore2")
        body.classList.add("colore1")
        console.log("primostep")
    } else if (body.classList.contains("colore1")){
        body.classList.remove("colore1")
        body.classList.add("colore2")
    }
}

function changeAddress () {
    if (addressH3.innerText === "Alex Shop - Via Roma 5, Milano, Italy") {
        addressH3.innerText = "Alex Shop - Via Leopardi 10, Roma, Italy"
    } else {
        addressH3.innerText = "Alex Shop - Via Roma 5, Milano, Italy"
    }
}

function changeLinks () {
    for (link of links) {
        if (link.classList.contains("amazon-link")) {
            link.classList.remove("amazon-link")
        } else {
            link.classList.add("amazon-link")
        }
    }
}

function imgDelete () {
    for (image of images) {
        if (image.classList.contains("img-none")) {
            image.classList.remove("img-none")
        } else {
            image.classList.add("img-none")
        }

    }

}

function changePriceColor () {
    for (price of prices) {

        if (colorsIndex === colors.length) {
        price.style.color = colors[colorsIndex]
        colorsIndex = 0
        } else {
        price.style.color = colors[colorsIndex]
        colorsIndex += 1
        }
    }

}