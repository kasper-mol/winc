// Opdracht 1
const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }]

let findSpiderMan = (held) => { return held.name === "Spiderman" };
console.log(superheroes.find(findSpiderMan));
// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

// Opdracht 2
console.log([1, 2, 3].map(getal => getal * 2));
// result should be [2, 4, 6]

// Opdracht 3
let search = (nummer) => nummer > 10;
console.log([1, 4, 3, 6, 9, 7, 11].some(search));

// Opdracht 4
let zoeken = (land) => land == 'Italy';
let landen = ['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States'].filter(zoeken);
console.log(landen);

// Opdracht 5
console.log(([1, 4, 3, 6, 9, 7, 11].map(getal => getal * 10)));