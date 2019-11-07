let snapCrackle = function (maxValue) {
    let numbers = ""
    for (let i = 1; i <= maxValue; i++) {
        
        if ((i % 2 !== 0) && (i % 5 == 0)) {
            numbers += 'snapCrackle, '
        }

        else if (i % 2 !== 0) {
            numbers +='snap, '
        }
        else if (i % 5 == 0) {
            numbers += 'crackle, '
        }
        else {
            numbers += (i+', ')
        }

    }
    
    return numbers
}
console.log(snapCrackle(18))