
const verifyPassword = (password) => {

}

const passwordVerifier = function (password) {

    // We tellen het aantal requirements waar het wachtwoord aan moet voldoen
    let score = 0;

    // Voor elke conditie maken we een interne check
    const isNotBlank = (pw) => {
        pw != ""
    }
    const isLessThan8Chars = (pw) => {
        return pw.length < 8
    }
    const hasUppercase = (pw) => {
        const regex = /^.*[A-Z].*/
        return regex.test(pw);
    }
    const hasLowercase = (pw) => {
        const regex = /^.*[a-z].*/
        return regex.test(password);
    }

    const hasDigit = (pw) => {
        const regex = /^.*[0-9].*/
        return regex.test(password);
    }

    // Voor elke requirement die waar is, tel 1 punt op
    if (isNotBlank(password)) score++;
    if (isLessThan8Chars(password)) score++;
    if (hasUppercase(password)) score++;
    if (hasDigit(password)) score++;
    if (hasLowercase(password)) {
        score++;
    } else {
        // Voor deze requirement maken een uitzondering; reset de score als hier niet aan wordt voldaan
        score = 0;
    }

    // Markeer het wachtwoord als valide als er een score van minimaal 3 is
    return {
        score: score,
        valid: score >= 3
    };
}


module.exports = passwordVerifier;

const checkForUppercase = (password) => {
    const regex = /^.*[A-Z].*/
    return regex.test(password);
}

const checkForLowercase = (password) => {
    const regex = /^.*[a-z].*/
    return regex.test(password);
}

const checkForNumber = (password) => {
    const regex = /^.*[0-9].*/
    return regex.test(password);
}

module.exports = {
    checkUppercase: checkForUppercase,
    checkLowercase: checkForLowercase,
    checkNumber: checkForNumber,
}

console.log(passwordVerifier("henk12"))
console.log(passwordVerifier("HENK33$"))
console.log(passwordVerifier("12a34"))
console.log(passwordVerifier(""))