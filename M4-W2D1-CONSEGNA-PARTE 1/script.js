const API_KEY = "oDLigtFX1aHGmBavtwAswAw2m6N7rMYeym44ZgxZFoibnfpd86JA0X7F"
const resultDiv = document.querySelector('.result-div')
const address = "https://api.pexels.com/v1/search?query=cat"

fetch(address, {
    method: 'GET',
    headers: {

        'Authorization': API_KEY
    }
})
    .then(response => response.json())
    .then(data => {
        let fotoList = data['photos']
        console.log(fotoList)

    

        for (foto of fotoList) {
            console.log(foto.src['original'])
            let fotoUrl = foto.src['original']
            let newDiv = document.createElement('div')
            newDiv.innerHTML = `<div class="card" style="width: 18rem;">
                                    <img src="${fotoUrl}" class="card-img-top" alt="..."
                                    <p>${fotoUrl}</p>
                                </div>`

            
            resultDiv.appendChild(newDiv)
        }

    })
    
