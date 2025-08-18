

function Tabellina (num) {
    if (num <= 0) {
        console.log(`metti un numero diverso da 0`)
    } else {
        for (let i = 1; i < 11; i++) {
            let risultato = num * i
            console.log(`il risultato è ${risultato}`)

        }
    }
}

Tabellina(22)