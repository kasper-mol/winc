const array = [
    { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
    { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
    { name: "A. Curry", profession: "kikvorsman", age: 32 },
    { name: "F. Vonk", profession: "slangenmelker", age: 36 },
    { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
    { name: "Dr.Evil", profession: "digital overlord", age: 56 },
];

//opdr 1
// for (let person of array) {
//   console.log("Dit is de gehele persoon:", person.name);
// }
//opdr 2
// for (let person of array) {
//   console.log("Dit is het geboorte jaar:", 2020 - person.age);
// }
//opdr 3
// for (let person of array) {
//   console.log(`${person.name} Is een ${person.profession}`);
// }

for (let person of array) {
    if (person.age > 50) {
        console.log(`age ${person.age}`);
    }
}
