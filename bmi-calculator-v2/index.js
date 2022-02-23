// Function to calculate BMI
function calculateBmi(weight, height) {
    console.log(`input to function ok? ${weight} and ${height}`);
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

    calculateBmi(82, 1.79);
}






bmiCalculator();