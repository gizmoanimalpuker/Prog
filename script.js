
function Food(name, calories) {
  this.name = name;
  this.calories = parseInt(calories);
}


const foodArray = [];


foodArray.push(new Food("Granola", 100));
foodArray.push(new Food("Yogurt", 300));


const form = document.querySelector("form");
const foodInput = document.getElementById("foodName");
const calorieInput = document.getElementById("calories");
const caloriesDisplay = document.getElementById("caloriesDisplay");


function handleFormSubmit(event) {
 
  event.preventDefault();

 
  const food = new Food(foodInput.value, calorieInput.value);
  foodArray.push(food);

  
  console.log(foodArray);

  
  let totalCalories = 0;
  for (let i = 0; i < foodArray.length; i++) {
    totalCalories += foodArray[i].calories;
  }
  caloriesDisplay.textContent = `Total calories: ${totalCalories}`;

  
  foodInput.value = "";
  calorieInput.value = "";
}


form.addEventListener("submit", handleFormSubmit);
