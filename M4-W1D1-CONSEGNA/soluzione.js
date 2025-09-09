/* ESERCIZIO 1:

function fifty(a, b) {
  if (a === 50 || (b === 50) | (a + b === 50)) {
    return true;
  } else {
    return false;
  }
}

console.log(fifty(25,50)) */

/* ESERCIZIO 2:

function removeLetter (Stringa,num) {
      
   solution = Stringa.slice(num,num + 1)
   
   return solution
    
}

console.log(removeLetter("prova",2))
 */

/* ESERCIZIO 3: 

function numInRange (a,b) {

    if ( (a >= 40 && a <= 60) && ( b >= 40 && b <= 60) || (a >= 70 && a <= 100) && (b >= 70 && b <= 100) || (a >= 40 && a <= 60) && (b >= 70 && b <= 100) || ( b >= 40 && b <= 60) && (a >= 70 && a <= 100)) {
        return true
    } else {
        return false
    }


}

console.log(numInRange(88,45)) */

/* ESERCIZIO 4:

function cityName (name) {

    if (name.startsWith("Los") || name.startsWith("New")) {
        return name
    } else {
        return false
    };    
};

console.log(cityName("miami")) */

/* ESERCIZIO 5:


const newArray = [5,25,50,50,100]

function sumArray (array) {

    let total = 0
    for (num in array) {
        
        total += array[num]
    }
    
    return total
}

console.log(sumArray(newArray)) */

/* ESERCIZIO 6:

const newArray = [4,5,88,7,8]

function oneOrThree (array) {

    if (array.includes(1) || array.includes(3) ) {
        return false
    } else {
        return true
    }

}

console.log(oneOrThree(newArray)) */

/* ESERCIZIO 7: */

/* function angleType (gradeNum) {

    if (gradeNum < 90 ) {
        return "acuto"
    } else if (gradeNum > 90 && gradeNum < 180) {
        return "ottuso"
    } else if (gradeNum === 90) {
        return "retto"
    } else if (gradeNum === 180) {
        return "piatto"
    }
}

console.log(angleType(180)) */

/* ESERCIZIO 8: */

/* function acronym (name) {

    
    let splitted = name.split(" ")
    

    let final = ""
    for (word in splitted) {

        final += splitted[word].charAt(0)

    }

    final2 = final.toUpperCase()

    return final2


}

console.log(acronym("banca centrale europea")) */