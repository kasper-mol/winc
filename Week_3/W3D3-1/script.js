const optellen = (...numbers) => {
    return numbers.reduce(function (prev, current) {
        return prev + current;
    });
}

console.log(optellen(1, 2, 3, 10, 10));



const aftrek = (a, b) => {
    return a + b;
}
let nummers = [10, 2, 2]
console.log(aftrek(...nummers));