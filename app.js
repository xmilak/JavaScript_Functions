console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
// printOdds(-100);
// function printOdds(count){

//     if (count < 0){
//         console.log(`${count} is less than 0`);
//     }

//     for (let i = 0; i <= count; i++){

//          if (i % 2 == 0){
//             continue;
//         }
//         else {
//             console.log(i);
//         }
//     }
// }

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
// function checkAge(userName, age) {
//     if (userName == null){
//     console.log('No name entered');
// }
// if (age <= 0 || age == null){
//     console.log('Incorrect age entered');
// }

// var congrats = `Congrats ${userName}, you can drive!`;
//   var sorryJunior = `Sorry ${userName}, but you need to wait until you're 16.`;

//   if (age >= 16) {
//     console.log(congrats);
// } else {
//     console.log(sorryJunior);
// }
// }
// checkAge(null, 38);

// checkAge('ale', 3);
// checkAge('Ale', 20)

console.log("EXERCISE 3:\n==========\n");

// whichPlane(20, -10);
// function whichPlane(x, y) {
//   if (x == 0 && y == 0) {
//     console.log(`The coordinate pair (${x}, ${y}) is on the origin.`);
//   } else if (x == 0) {
//     console.log(`The coordinate pair (${x}, ${y}) is on the y-axis.`);
//   } else if (y == 0) {
//     console.log(`The coordinate pair (${x}, ${y}) is on the x-axis.`);
//   } else if (x > 0 && y > 0) {
//     console.log(`The coordinate pair (${x}, ${y}) is in quadrant I.`);
//   } else if (x < 0 && y > 0) {
//     console.log(`The coordinate pair (${x}, ${y}) is in quadrant II.`);
//   } else if (x < 0 && y < 0) {
//     console.log(`The coordinate pair (${x}, ${y}) is in quadrant III.`);
//   } else {
//     console.log(`The coordinate pair (${x}, ${y}) is in quadrant IV.`);
//   }
// }

console.log("EXERCISE 4:\n==========\n");

// triangleMagic(3, 6, 4);

// function triangleMagic(a, b, c) {
//   if (a + b < c || a + c < b || b + c < a) {
//     console.log("This is not a triangle.");
//     return;
//   }
//   if (a == b && a == c && b == c) {
//     console.log(`Sides ${a}, ${b}, ${c} make an equilateral triangle.`);
//   } else if (a == b || a == c || b == c) {
//     console.log(`Sides ${a}, ${b}, ${c} make an isosceles triangle.`);
//   } else {
//     console.log(`Sides ${a}, ${b}, ${c} make a scalene triangle.`);
//   }
// }

console.log("EXERCISE 5:\n==========\n");

function dataPlan(planLimit, day, usage) {
  let dailyUseLimit = (planLimit / 30).toFixed(2);
  let currentDailyUsage = (usage / day).toFixed(2);
  let daysRemaining = 30 - day;
  let overage = (30 * currentDailyUsage - planLimit).toFixed(2);
  let dataRemaining = ((planLimit - usage) / daysRemaining).toFixed(2);

  console.log(`${day} days used, ${daysRemaining} days remaining`);
  console.log(`Average daily use: ${dailyUseLimit} GB/Days`);

  if (currentDailyUsage > dailyUseLimit) {
    console.log(`You are EXCEEDING your daily average daily use (${currentDailyUsage} GB/day),
  continuing this high usage, you'll exceed GB in your data plan by ${overage} GB.`);

    console.log(`To stay below your data plan, use no more than ${dataRemaining} GB/day.`
    );
  } else if (currentDailyUsage < dailyUseLimit) {
    console.log(`You are UNDER your daily average daily use (${currentDailyUsage} GB/day),
  continuing this lower usage, you'll have excess GB in your data plan by ${overage * -1} GB.`
  );

    console.log(`To stay below your data plan, use no more than ${dataRemaining} GB/day.`
    );
  } else {
    console.log(`You are BREAKING EVEN in your average daily use (${currentDailyUsage} GB/day),
  continuing this usage, you'll have excess in your data plan by ${overage * -1} GB.`
  );

    console.log(`To stay below your data plan, use no more than ${dataRemaining} GB/day.`
    );
  }
}

//cosole.log("Data over");
dataPlan(100, 15, 56);

//console.log('Data even');
dataPlan(100, 15, 50);

//concole.log('Data under');
dataPlan(100, 15, 40);
