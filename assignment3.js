
function kilometerToMeter(km) {
    if (km == null) /*check if input is null or not*/ {
        return console.log("Invalid input!!");
    }
    if (km < 0 || typeof km === "string") /*checking if input is valid or not*/ {
        return console.log("Invalid input!!");
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
        return console.log("Invalid input!!");
    }
    if (days < 0 || days % 1 != 0 || typeof days === "string")

        let cost = 0;
    if (days <= 10) {
        cost = days * 100;
    }
    else if (days <= 20) {
        let firstTenDaysCost = 10 * 100;
        let days_remaining = days - 10;
        let restOfTheDaysCost = days_remaining * 80;
        cost = firstTenDaysCost + restOfTheDaysCost;
    }
    else {
        let firstTenDaysCost = 10 * 100;
        let secondTenDaysCost = 10 * 80;
        let days_remaining = days - 20;
        let restOfTheDaysCost = days_remaining * 50;
        cost = firstTenDaysCost + secondTenDaysCost + restOfTheDaysCost;
    }
    return cost;
}

let result_3 = hotelCost(25);
if (typeof result_3 === "undefined") /*checking result is defined or undefined */ {
    console.log("Given input is invalid thats why result is undefined!!");
}
else {
    console.log(result_3);
}