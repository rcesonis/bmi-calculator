const weightInKg = parseInt(process.argv[2]); //User input
const heightInM = parseFloat(process.argv[3]); //User input
const userAge = parseInt(process.argv[4]); //User input
const isExcercising = process.argv[5]; //User input

// Calculated bmi with formula BMI = weight(kg) / (height(m) * height(m))
const bmi = weightInKg / (heightInM * heightInM);

const roundedBMI = Math.round(bmi);
const idealBMI = 22.5;
const idealWeight = Math.round(idealBMI * heightInM * heightInM);
const basalMetabolicRate = (10 * weightInKg) + (6.25 * (heightInM * 100)) - (5 * userAge);


//const calorieNumber = Math.round(basalMetabolicRate * 1.4);
const calorieNumber = (isExcercising === 'yes') ? 1.6 * basalMetabolicRate : 1.4 * basalMetabolicRate;


const weightToLose = weightInKg - idealWeight;
const timeToIdealWeight = weightToLose / 0.5;
const caloriesToConsume = calorieNumber - 500;



console.log(isExcercising);
console.log(calorieNumber);



console.log(`
**************
BMI CALCULATOR
**************

height: ${heightInM}
weight: ${weightInKg}

****************
FACING THE FACTS
****************


* Your BMI is ${roundedBMI}

A BMI under 18.5 is considered underweight
A BMI above 25 is considered overweight

* Your ideal weight is ${idealWeight}
* With a normal lifestyle you burn ${calorieNumber} calories a day

****************
DIET PLAN
****************

If you want to reach your ideal weight of ${idealWeight} kg:

Eat ${caloriesToConsume} calories a day
For ${timeToIdealWeight} weeks

            `);