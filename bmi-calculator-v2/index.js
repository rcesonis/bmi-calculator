// Function to calculate BMI
function calculateBmi(weight, height) {
    // Bmi calculation using input data
    const BMI = Math.round(weight / (height * height));
    return BMI;
}

// Function to calculate BMR
function calculateBMR(weight, height, age, gender) {
    const basalMetabolicRateBase = 10 * weight + 6.25 * (height * 100) - 5 * age;
    const basalMetabolicRatebyGender = gender === "f" ? basalMetabolicRateBase - 150 : basalMetabolicRateBase + 50;
    return basalMetabolicRatebyGender;
}

// Function to calculate daily calorie consumption
function dailyCalories(exercising, bmr) {
    const calorieNumber = exercising === "yes" ? 1.6 * bmr : 1.4 * bmr;
    return calorieNumber;
}

// Function to calculate ideal weight
function calculateIdealWeight(idealbmi, height) {
    const idealWeight = Math.round(idealbmi * height * height);
    return idealWeight; 
}

// Function to calculate weight to lose
function calculateWeightToLose(weight, idealweight) {
    const weightToLose = weight - idealweight;
    return weightToLose;
}

// function to calculate time to ideal weight
function calculateDietWeeks(weightlose) {
    const dietWeeks = weightlose > 0 ? weightlose / 0.5 : Math.abs(weightlose / 0.5);
    return dietWeeks;
}

// function to calculate calories
function calculateDietCalories(weightlose, calorienumber) {
    const dietCalories = weightlose > 0 ? calorienumber - 500 : calorienumber + 500;
    return dietCalories;
}   

// function for printing result
function printResult(height, weight, bmi, idealweight, calorienumber, dietcalories, timetoidealweight) {
    console.log(`
    **************
    BMI CALCULATOR
    **************

    height: ${height}
    weight: ${weight}

    ****************
    FACING THE FACTS
    ****************


    * Your BMI is ${bmi}

    A BMI under 18.5 is considered underweight
    A BMI above 25 is considered overweight

    * Your ideal weight is ${idealweight}
    * With a normal lifestyle you burn ${calorienumber} calories a day

    ****************
    DIET PLAN
    ****************

    If you want to reach your ideal weight of ${idealweight} kg:

    Eat ${dietcalories} calories a day
    For ${timetoidealweight} weeks    
    `)
}





function bmiCalculator() {
    // User input 
    const weightInKg = parseInt(process.argv[2]);
    const heightInM = parseFloat(process.argv[3]);
    const userAge = parseInt(process.argv[4]);
    const isExcercising = process.argv[5];
    const gender = process.argv[6];
    const idealBMI = 22.5; 
    
    const BMI = calculateBmi(weightInKg, heightInM);
    const BMR = calculateBMR(weightInKg, heightInM, userAge, gender);
    const calorieNumber = dailyCalories(isExcercising, BMR);
    const idealWeight = calculateIdealWeight(idealBMI, heightInM);
    const weightToLose = calculateWeightToLose(weightInKg, idealWeight);
    const dietWeeks = calculateDietWeeks(weightToLose);
    const dietCalories = calculateDietCalories(weightToLose, calorieNumber);    
    
    const result = printResult(heightInM,
                               weightInKg,
                               BMI,
                               idealWeight,
                               calorieNumber,
                               dietCalories,
                               dietWeeks);

}

bmiCalculator();