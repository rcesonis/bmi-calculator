const weightInKg = parseInt(process.argv[2]);
const heightInM = parseFloat(process.argv[3]);
const userAge = parseInt(process.argv[4]);
const bmi = weightInKg / (heightInM * heightInM);
const roundedBMI = Math.round(bmi);
const idealBMI = 22.5;
const idealWeight = Math.round(idealBMI * heightInM * heightInM);
const basalMetabolicRate = (10 * weightInKg) + (6.25 * (heightInM * 100)) - (5 * userAge);
const calorieNumber = Math.round(basalMetabolicRate * 1.4);
const weightToLose = weightInKg - idealWeight;
console.log(weightToLose);
// console.log(calorieNumber);



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

            `);