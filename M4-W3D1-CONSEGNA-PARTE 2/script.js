const resultDiv = document.querySelector('.result-div')
const address2 = "https://striveschool-api.herokuapp.com/books/"
const detailsPage = 




fetch(address2)
    .then(response => response.json())
    .then(data => {
        
        console.log(data[0])

    

        for (book of data) {
            
            console.log(book.asin)
            
            
            let newDiv = document.createElement('div')
            newDiv.setAttribute('class', 'card text-center my-5 col-12 col-md-2')
            newDiv.innerHTML = `<img src="${book.img}" class="card-img-top" alt="..."
                                <p>${book.title}</p>
                                <button id="btn${book.asin}" >Salta</button>
                                <button> <a href="./dettagli.html?id=${book.asin}">Dettagli libro</a></button>`

                                 
            resultDiv.appendChild(newDiv)
            
            const btnId = `btn${book.asin}`
            const btn = document.getElementById(btnId)
            btn.addEventListener("click", ()=> {
                newDiv.setAttribute("class", "d-none")
            
            
            
            
            
            
            
            
            })
            
        }

    })