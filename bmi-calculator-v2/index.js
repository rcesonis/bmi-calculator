// Function to calculate BMI
function calculateBmi(weight, height) {
    // Bmi calculation using input data
    const bmi = Math.round(weight / (height * height));
    return bmi;
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
function idealWeight(idealbmi, height) {
    const idealWeight = Math.round(idealbmi * height * height);
    return idealWeight; 
}






function bmiCalculator() {
    // User input 
    const weightInKg = parseInt(process.argv[2]);
    const heightInM = parseFloat(process.argv[3]);
    const userAge = parseInt(process.argv[4]);
    const isExcercising = process.argv[5];
    const gender = process.argv[6];
    const idealBMI = 22.5; 
    
    const bmi = calculateBmi(weightInKg, heightInM);
    const BMR = calculateBMR(weightInKg, heightInM, userAge, gender);
    const calorieNumber = dailyCalories(isExcercising, BMR);
    const idealWeight = idealWeight(idealBMI, heightInM);
    
    
}

calorieNumber()


bmiCalculator();