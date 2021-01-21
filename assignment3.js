//https://github.com/DukulH/assignment3
function kilometerToMeter(km) {
    if (km == null) /*check if input is null or not*/ {
        return console.log("Input cannot be null !!");
    }
    if (km < 0 || typeof km === "string") /*checking if input is valid or not*/ {
        return console.log("Input cannot be negetive or string !!");
    }
    let meter = km * 1000; //calculating km to m
    return meter;
}

let result_1 = kilometerToMeter(1);
if (typeof result_1 === "undefined") /*checking result is defined or undefined */ {
    console.log("Given input is invalid thats why result is undefined!!");
}
else {
    console.log(result_1);
}





function budgetCalculator(watch_quantity, mobile_quantity, laptop_quantity) {
    if (watch_quantity == null || mobile_quantity == null || laptop_quantity == null) /*check if input is null or not*/ {
        return console.log("Input cannot be null!!");
    }

    if (watch_quantity < 0 || mobile_quantity < 0 || laptop_quantity < 0) /*checking if input is valid or not*/ {
        return console.log("Quantity cannot be negetive!!");
    }

    if (watch_quantity % 1 != 0 || mobile_quantity % 1 != 0 || laptop_quantity % 1 != 0) /*checking if input is valid or not*/ {
        return console.log("Quantity cannot be float number!!");
    }

    if (typeof watch_quantity === "string" || typeof mobile_quantity === "string" || typeof laptop_quantity === "string") /*checking if input is valid or not*/ {
        return console.log("Quantity cannot be string!!");
    }

    let total_budget = 0;
    let watch_budget = watch_quantity * 50; //calculating watch budget
    let mobile_budget = mobile_quantity * 100; //calculating mobile budget
    let laptop_budget = laptop_quantity * 500; //calculating laptop budget
    total_budget = watch_budget + mobile_budget + laptop_budget; //calculating total budget
    return total_budget;
}

let result_2 = budgetCalculator(3, 2, 1);
if (typeof result_2 === "undefined") /*checking result is defined or undefined */ {
    console.log("Given input is invalid thats why result is undefined!!");
}
else {
    console.log(result_2);
}





function hotelCost(days) {
    if (days == null) /*check if input is null or not*/ {
        return console.log("Input cannot be null !!");
    }
    if (days < 0 || days % 1 != 0 || typeof days === "string")/*check if input is valid or not*/ {
        return console.log("Input cannot be negetive or string or float number!!");
    }

    let cost = 0;
    if (days <= 10) {
        cost = days * 100; //calculating cost between 1-10 days
    }
    else if (days <= 20) {
        let firstTenDaysCost = 10 * 100; // calculating cost between 1-10 days
        let days_remaining = days - 10; // calculating remaining days
        let restOfTheDaysCost = days_remaining * 80; // calculating cost between 11- remaining days till 20days
        cost = firstTenDaysCost + restOfTheDaysCost;
    }
    else {
        let firstTenDaysCost = 10 * 100; // calculating cost between 1-10 days
        let secondTenDaysCost = 10 * 80; // calculating cost between 11-20 days
        let days_remaining = days - 20; // calculating remaining days
        let restOfTheDaysCost = days_remaining * 50; // calculating cost of remaining days
        cost = firstTenDaysCost + secondTenDaysCost + restOfTheDaysCost; // calculating total cost
    }
    return cost;
}

let result_3 = hotelCost(71);
if (typeof result_3 === "undefined") /*checking result is defined or undefined */ {
    console.log("Given input is invalid thats why result is undefined!!");
}
else {
    console.log(result_3);
}





function megaFriend(friends) {
    let value = Array.isArray(friends);
    if (value == false || friends == "") /*check if input is valid or not*/ {
        return console.log("Invalid input !!");
    }
    let joinAllElemets = friends.join('');// join all elements in the array
    regEx = /^[A-Za-z]+$/; // this expression only allows alphabets
    if (!regEx.test(joinAllElemets)) /* checking the array contain only alphabet or not */{
        return console.log("Check input");
    }
    let maxName = "";
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length > maxName.length) {
            maxName = friends[i]; // saving the maxLength name in the variable
        }
    }
    return maxName;
}

var result_4 = megaFriend(["Jihad", "asdasasdasdsdsadsad"]);
if (typeof result_4 === "undefined") /*checking result is defined or undefined */ {
    console.log("Given input is invalid thats why result is undefined!!");
}
else {
    console.log(result_4);
}