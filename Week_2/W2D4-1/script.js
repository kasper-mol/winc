

// Get elements and classes
const buttonsGet = document.querySelectorAll(".big-five-button");
const buttonsList = Array.from(buttonsGet);
const spottedList = document.getElementById("spotted-animals-list");
const deleteButton = document.getElementById("remove-first-item-button");
const deleteAll = document.getElementById("remove-all-button");


//Werkende conditionals
const checkIndex = (clickedButton) => {
    if (buttonsList.indexOf(clickedButton.target) === 0) {
        spottedList.appendChild(newLi);
        newLi.innerHTML = clickedButton.target.innerHTML
    } if (buttonsList.indexOf(clickedButton.target) === 1) {
        spottedList.appendChild(newLi1);
        newLi1.innerHTML = clickedButton.target.innerHTML
    } if (buttonsList.indexOf(clickedButton.target) === 2) {
        spottedList.appendChild(newLi2);
        newLi2.innerHTML = clickedButton.target.innerHTML
    } if (buttonsList.indexOf(clickedButton.target) === 3) {
        spottedList.appendChild(newLi3);
        newLi3.innerHTML = clickedButton.target.innerHTML
    } if (buttonsList.indexOf(clickedButton.target) === 4) {
        spottedList.appendChild(newLi4);
        newLi4.innerHTML = clickedButton.target.innerHTML
    }
}

// uitlezen naam op klik
const clickedName = (clickedButton) => {
    let test = (clickedButton.target.innerHTML)
}

// nieuwe list element
let newLi = document.createElement("li");
let newLi1 = document.createElement("li");
let newLi2 = document.createElement("li");
let newLi3 = document.createElement("li");
let newLi4 = document.createElement("li");


// Duck verwijderen
const deleteDuck = () => {
    const child = spottedList.getElementsByTagName("li")[0];

    spottedList.removeChild(child);
}

// clear list
const clearList = () =>
    spottedList.querySelectorAll("li").forEach(n => n.remove());

//Eventlistner voor elke button
buttonsList.forEach(button => {
    button.addEventListener("click", checkIndex);
});

deleteButton.addEventListener("click", deleteDuck)
deleteAll.addEventListener("click", clearList)

//let text = buttonsGet[3].textContent




