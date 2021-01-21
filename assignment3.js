
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
    if (watch_quantity < 0 || typeof watch_quantity === "string" || mobile_quantity < 0 || typeof mobile_quantity === "string" || laptop_quantity < 0 || typeof laptop_quantity === "string") {
        return console.log("Invalid input!!");
    }
    let total_budget = 0;
    let watch_budget = watch_quantity * 50;
    let mobile_budget = mobile_quantity * 100;
    let laptop_budget = laptop_quantity * 500;
    total_budget = watch_budget + mobile_budget + laptop_budget;
    return total_budget;
}
let result_2 = budgetCalculator(-1, 1, 1);
if (typeof result_2 === "undefined") {
    console.log("Given input is invalid thats why result is undefined!!");
}
else {
    console.log(result_2);
}