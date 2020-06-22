// Naam van de user krijgen en eerste nummer
let name = prompt("Welkom! Wat is je naam?", []);

//random number generator
const computerNumber = function () {
    return (Math.ceil(Math.random() * 25));
};
let holyNumber = computerNumber();

// beurten loop
for (let turns = 0; turns <= 2; turns++) {
    let askNumber1 = prompt("Welk nummer denk je dat ik heb?", []);
    let number1 = parseInt(askNumber1);
    //check
    if (holyNumber === number1) {
        confirm("Gefeliciteerd je hebt gewonnen. Het spel is nu af.");
        alert("Dag" + name + ". Tot de volgende keer");

    } else {
        let newAskedNumber = confirm("Dat is niet correct, probeer het nog eens" + holyNumber);
    }
};
confirm("Afgelopen");

