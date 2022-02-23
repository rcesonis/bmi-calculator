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



function bmiCalculator() {
    // User input 
    const weightInKg = parseInt(process.argv[2]);
    const heightInM = parseFloat(process.argv[3]);
    const userAge = parseInt(process.argv[4]);
    const isExcercising = process.argv[5];
    const gender = process.argv[6];
    
    // Testing user input
    // console.log(`Weight: ${weightInKg}`);
    // console.log(`Height: ${heightInM}`);
    // console.log(`Age: ${userAge}`);
    // console.log(`Daily exercise: ${isExcercising}`);
    // console.log(`Gender: ${gender}`);

    const bmi = calculateBmi(weightInKg, heightInM);
    const BMR = calculateBMR(weightInKg, heightInM, userAge, gender);
    
    calculateBMR(82, 1.79, 32, 'm')
    
}




bmiCalculator();