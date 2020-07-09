
const { isNotBlank,
    isLessThan8Chars,
    hasUppercase,
    hasLowercase,
    hasDigit, } = require("./script.js")


test("Password is korter dan 9", function () {
    expect(isLessThan8Chars("henKie1")).toBeTruthy();
});

test("Password is niet null", function () {
    expect(isNotBlank("henKie12")).toBeTruthy();
});

test("Password heeft uppercase", function () {
    expect(hasUppercase("henKie12")).toBeTruthy();
});

test("Password heeft lowercase", function () {
    expect(hasLowercase("henKie12")).toBeTruthy();
});

test("Password heeft nummer", function () {
    expect(hasDigit("Henkie12")).toBeTruthy();
});




