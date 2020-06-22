const age = 20;
if (age >= 18) {
    console.log("welkom");
} else {
    console.log("jammer");
}

const isFemale = true;
if (isFemale) {
    console.log("welkom mevrouw")
} else {
    console.log("welkom meneer");
}

const driverStatus = 'dronken';
if (driverStatus == 'bob') {
    console.log("rijd veilig")
} else {
    console.log("neem een taxi");
}

if (age >= 18 && age <= 25) {
    console.log("gefeliciteerd je krijgt 25% korting!");
} else {
    console.log("helaas pindakaas");
}

const name = 'sarah';

if (name == 'bram' || 'sarah') {
    console.log("free beer");
}

const totalAmount = 80
if (totalAmount > 100) {
    console.log("free champagne");
} else if (totalAmount > 50) {
    console.log("free nachos");
} else if (totalAmount > 25) {
    console.log("free bitterballlen");
}