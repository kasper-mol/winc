const huiswerkMaken = (vak, callback) => {
    console.log("Ik ga nu mijn " + vak + " huiswerk maken");
    setTimeout(callback, 2000);
};

const klaarMetHuiswerk = () => {
    console.log("kijk ik ben klaar");
}

huiswerkMaken("Wiskunde", klaarMetHuiswerk);