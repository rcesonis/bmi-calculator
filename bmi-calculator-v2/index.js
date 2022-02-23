// Function to calculate BMI
function calculateBmi(weight, height) {
    // Bmi calculation using input data
    const bmi = Math.round(weight / (height * height));
    return bmi;
}

// Function to calculate BMR
function calculateBMR(weight, height, userAge, gender) {
    console.log(`input to function ok? ${weight}, ${height}, ${userAge}, ${gender}`);
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
    
    calculateBMR(82, 1.77, 32, 'm')
    
}




bmiCalculator();