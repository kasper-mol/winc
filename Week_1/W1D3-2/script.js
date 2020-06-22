
// fucntion declaration
makeSandwich = (topping) => {
    console.log("There you go, a sandwich with " + (topping));
}

// function call
makeSandwich('ham');
makeSandwich('chicken');

var discountPrice = calculateDiscountPrice = (totalAmount, discount) => {
    return totalAmount - discount;
}

console.log(Math.round(discountPrice(20, 3.44)));


var discountPrice2 = calculateDiscountPrice = (totalAmount, discount) => {
    if (totalAmount > 25) {
        return totalAmount - discount;
    } else {
        return totalAmount;
    }
}

console.log(Math.round(discountPrice2(22, 3.44)));