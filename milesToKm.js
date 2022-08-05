function milesToKm(miles) {
    const km = miles*1.609;
    return km;
}

const myMiles = 99;
const myKilo = milesToKm(myMiles);
console.log('Total:',myKilo);