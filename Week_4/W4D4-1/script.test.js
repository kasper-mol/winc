
const { checkUppercase, checkLowercase, checkNumber } = require("./script.js")


test("Password is korter dan 9", function () {
    const input = "henkie12"
    expect(input.length).toBeLessThan(9);
});

test("Password is niet null", function () {
    const input = "henkie12";
    expect(input).not.toBeNull();
});

test("Password heeft uppercase", function () {
    expect(checkUppercase("henKie12")).not.toBeFalsy();
});

test("Password heeft lowercase", function () {
    expect(checkLowercase("TESsT2")).not.toBeFalsy();
});

test("Password heeft nummer", function () {
    expect(checkNumber("xfsad1")).not.toBeFalsy();
});




