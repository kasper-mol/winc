
// Maak hier je functie die een succeeding Promise retourneert

const getSucceedingPromise = (message, ms) => {
    const succesPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message)
        }, ms);

    })
    return succesPromise;
};

// Maak hier je functie die een failing Promise retourneert
const getFailingPromise = (errorMessage, ms) => {
    const failedPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(errorMessage)
        }, ms);

    })
    return failedPromise;

};

const getRandomSucceedingOrFailingPromise = id => {
    // This randomly resolves to true or false
    let promiseShouldSucceed = Math.random() >= 0.5;
    // This gets some semi-random amound of seconds under the 5seconds:
    let randomMillisecond = Math.random() * 5000

    if (promiseShouldSucceed) {
        return getSucceedingPromise(
            `Promise ${id} succeeded in ${randomMillisecond} ms.`,
            randomMillisecond
        );
    } else {
        return getFailingPromise(
            `Promise ${id} failed in ${randomMillisecond} ms.`,
            randomMillisecond
        );
    }
};

const createPromiseElement = promise => {
    const div = document.createElement("div");
    div.classList = promise.state;
    div.innerHTML = `Promise: ${promise.id}`;
    return div;
};

const showPromises = promises => {
    console.log("I get called every time a Promise rejects or resolves")
    const promisesDiv = document.querySelector(".promises");
    promisesDiv.innerHTML = "";
    const promisesElements = promises.map(createPromiseElement);
    promisesElements.forEach(element => promisesDiv.appendChild(element));
};

const add50Promises = () => {
    let i = 0;
    const allPromises = [];
    // fill the allPromises array with 50 objects that will soon be Promises. 
    // they all have an ID
    while (i <= 50) {
        let id = i;
        allPromises.push({
            id: id,
            state: "pending"
        });
        consumePromise(allPromises, id);
        i++;
    }
    // Put the inital pending Promises in the DOM:

};

const consumePromise = function (allPromises, id) {
    const promise = getRandomSucceedingOrFailingPromise(id).then((resolved) => {
        allPromises[id].state = "resolved";
        console.log(resolved + "yes");
        showPromises(allPromises);

    }).catch((reject) => {
        allPromises[id].state = "errored";
        console.log(reject + "no");
        showPromises(allPromises);
    })

    //consumeer hier je Promise
};


const registerEventHandlers = () => {
    document.querySelector("button").addEventListener("click", add50Promises);
};

document.addEventListener("DOMContentLoaded", () => {
    registerEventHandlers();
});