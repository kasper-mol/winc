for (score = 40; score <= 100; score++) {
    let assignGrade = function (score) {
        if (score > 90) {
            return 'A';
        } else if (score > 80) {
            return 'B';
        } else if (score > 70) {
            return 'C';
        } else if (score > 65) {
            return 'D';
        } else {
            return 'F';
        }
    };
    console.log("voor" + score + " punten, krijg je een " + assignGrade(score));
};




