let risultato = 0

for (let i = 0; i < 11; i++ ) {
  risultato += 5
  if (i === 3) {
    continue
  } else if (i === 8) {
    continue
  }
  console.log(risultato)
}
