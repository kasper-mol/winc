let lifeSupply = calculateSupply = (age, amountDay) => {
    let remainingDays = (80 - age) * 365;
    let needed = remainingDays * amountDay;
    return "You will need " + needed + " pieces to last you until the ripe old age of 80";
}

console.log(lifeSupply(25, 2));