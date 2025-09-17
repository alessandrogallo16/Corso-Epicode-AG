const searchParam = new URLSearchParams(location.search)
const id = searchParam.get("id")
const serverAddress = `https://striveschool-api.herokuapp.com/books/${id}`

const cardTitle = document.querySelector(".card-title")
const cardImg = document.querySelector(".card-img-top")
const listGroup = document.querySelector(".list-group")





fetch(serverAddress)
    .then(response => response.json())
    .then(book => {
        
        
        console.log(book)
        cardImg.setAttribute("src", book.img)
        cardTitle.innerText = book.title
        listGroup.innerHTML = `<li class="list-group-item">Asin: ${book.asin}</li>
                                <li class="list-group-item">Category: ${book.category}</li>
                                <li class="list-group-item">Price: ${book.price}</li>`
        
    })