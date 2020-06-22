let fortuneTeller = tellFortune = (numberOfChildren, partnerName, location, job) => {
    return "You will be a " + job + " in " + location + ", and married to " + partnerName + " with " + numberOfChildren + " kids."
}

console.log(fortuneTeller(2, 'someone', 'utrecht', 'developer'));