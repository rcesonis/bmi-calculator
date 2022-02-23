// User input validators
function validateNumberOfInputs(argv) {
  if (argv.length !== 7) {
    console.log(`
        You gave ${argv.length - 2} argument(s) to the program
    
        Please provide 5 arguments for
        
        weight (kg), 
        height (m), 
        age (years), 
        wether you exercise daily (yes or no)
        and your gender (m or f)
        
        Example:
    
        $ node index.js 82 1.79 32 yes m
      `);

    process.exit();
  }
}

function validateWeightHeightAndAge(argv, argv1, argv2) {
  if (isNaN(argv) || isNaN(argv1) || isNaN(argv2)) {
    console.log(`
          Please make sure weight, height and age are numbers:
      
          weight (kg) example: 82 | your input: ${argv}
          height (m) example 1.79 | your input: ${argv1}
          age (years) example 32  | your input: ${argv2} 
      
          $ node index.js 82 1.79 32 yes m
        `);
        process.exit();
  }
}

function validateDailyExercise(argv5) {
  if (argv5 !== "yes" && argv5 !== "no") {
    console.log(`
        Please specify if you exercise daily with "yes" or "no".
        Valid choice example is yes.
        `);
        process.exit();
  }
}

function validateGender(argv6) {
    if (argv6 !== "m" && argv6 !== "f") {
      console.log(`
          Please specify your gender with "f" for female or "m" for male.
          Valid choice example is f.
          `);
          process.exit();
    }
  }

// Function to calculate BMI
function calculateBmi(weight, height) {
  // Bmi calculation using input data
  const BMI = Math.round(weight / (height * height));
  return BMI;
}

// Function to calculate BMR
function calculateBMR(weight, height, age, gender) {
  const basalMetabolicRateBase = 10 * weight + 6.25 * (height * 100) - 5 * age;
  const basalMetabolicRatebyGender =
    gender === "f" ? basalMetabolicRateBase - 150 : basalMetabolicRateBase + 50;
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
  const dietWeeks =
    weightlose > 0 ? weightlose / 0.5 : Math.abs(weightlose / 0.5);
  return dietWeeks;
}

// function to calculate calories
function calculateDietCalories(weightlose, calorienumber) {
  const dietCalories =
    weightlose > 0 ? calorienumber - 500 : calorienumber + 500;
  return dietCalories;
}

// function for printing result
function printResult(user) {
  console.log(`
    **************
    BMI CALCULATOR
    **************

    height: ${user.heightInM}
    weight: ${user.weightInKg}
    age: ${user.userAge}
    do you exercise daily? ${user.isExcercising}

    ****************
    FACING THE FACTS
    ****************


    * Your BMI is ${user.BMI}

    A BMI under 18.5 is considered underweight
    A BMI above 25 is considered overweight

    * Your ideal weight is ${user.idealWeight}
    * With a normal lifestyle you burn ${user.calorieNumber} calories a day

    ****************
    DIET PLAN
    ****************

    If you want to reach your ideal weight of ${user.idealWeight} kg:

    Eat ${user.dietCalories} calories a day
    For ${user.dietWeeks} weeks    
    `);
}

function bmiCalculator() {
  // Validator of user input
  validateNumberOfInputs(process.argv);
  validateWeightHeightAndAge(process.argv[2], process.argv[3], process.argv[4]);
  validateDailyExercise(process.argv[5]);
  validateGender(process.argv[6]);

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

  
  const user = {
    heightInM: heightInM,
    weightInKg: weightInKg,
    userAge: userAge,
    isExcercising: isExcercising,
    BMI: BMI,
    calorieNumber: calorieNumber,
    idealWeight: idealWeight,
    dietCalories: dietCalories,
    weightToLose: weightToLose,
    idealWeight: idealWeight,
    dietWeeks: dietWeeks
  }
  
    printResult(user);
}

bmiCalculator();
