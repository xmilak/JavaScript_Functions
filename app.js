console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
    if (count < 0){
        console.log(`${count} is less then 0`)
        return;
    }

    for (let i = 0; i <= count; i++){
        if (i % 2 != 0){
            console.log(i);
        }
    }
}

printOdds(50);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, Age) {
    if (userName == null) {
        console.log(`No userName entered`);
        return;
    }

    if (age <= 0 || age == null) {
        console.log(`Incorrect age entered`);
        return;
    }

    let aboveSixteen = `Congrats ${userName} you can drive!`;
    let belowSixteen = ` Sorry ${userName} but you need  to wait until you are 16`;

    if (age >= 16) {
        console.log(aboveSixteen);
    } else {
        console.log(belowSixteen);
    }
}

checkAge(`Jeremy`, 50);

checkAge(`Wyatt`, 5);

checkAge(null, 16);

checkAge ('Tyler', -34)


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function quadrant(x, y) {
 if (x == 0 && y == 0) {
    console.log(`(${x}, ${y}) is in the center`);
} else if (x == 0) {
    console.log(`(${x}, ${y}) is in the x axis`);
} else if (y == 0) {
    console.log(`(${x}, ${y}) is in the x axis`);
} else if (x > 0 && y >0) {
    console.log(`(${x}, ${y}) is in Quadrant 1`);
} else if (x < 0 && y > 0) {
    console.log(`(${x}, ${y}) is in Quadrant 2`);
} else if (x < 0 && y < 0) {
    console.log(`(${x}, ${y}) is in Quadrant 3`);
} else if (x > 0 && y < 0) {
    console.log(`(${x}, ${y}) is in Quadrant 4`);
}
}


quadrant(5, 8);





// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function triangle (a, b, c){
    if (!(a + b > c) || !(a + c > b) || !(b + c > a)){
            console.log(`This is not  triangle`);
            return;
    }

    //Equilateral check
    if (a == b && a == c && b == c) {
            console.log(`Triangle is Equilateral`);
    } else if (a == b || a==c || b ==c) { //iisoceles check
            console.log(`Triangle is isosceles`);
    } else {
            console.log(`Triangle is scalene`);
    }
}















// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function dataPlan(planLimit, day, usage){

    let dailyUseLimt = (planLimit / 30).toFixed(2);
    let currentDailyUsage = (usage / day).toFixed(2);
    let daysRemaining = 30 - day;
    let overage = ((30 * currentDailyUsage) - planLimit).toFixed(2);
    let dataRemaining = ((planLimit-Usage) / daysRemaining).toFixed(2);

    console.log(`${day} days used, ${daysRemaining} days remaining`);
    console.log(`Average daily use: ${dailyUseLimit} GB/days`);

    if (currentDailyUsage > dailyUseLimit) {
        console.log(`You are EXCEEDING YOUR average daily use (${currentDailyUsage}) GB/day,
        continuing this high useage, you'll exceed your data plan by 
        ${overage} GB.`);

        console.log(`To stay below your data plan, use no more then ${dataRemaining} GB/day`);
    }else if (currentDailyUsage < dailyUseLimt) {
        console.log(`You are under your average daily use (${currentDailyUsage} GB/day),
        continuing this high useage, you'll have excess in your data plan by 
        ${overage} GB.`);

        console.log(`To stay below your data plan, use no more then ${dataRemaining} GB/day`);
    } else {
        console.log(`You are BREAKING EVEN in your average daily use 
        (${currentDailyUsage}) GB/day,
        continuing this useage, you'll have excess in your data plan by 
        ${overage*-1} GB.`);

        console.log(`To stay below your data plan, use no more then ${dataRemaining} GB/day`);
    }
}

dataPlan(100,15,56)