
class Food {
    constructor(name, calories) {
      this.name = name;
      this.calories = parseInt(calories);
    }
  }
  
  const foodArray = [
    new Food("Granola", 100),
    new Food("Yogurt", 300),
  ];
  
  const form = document.querySelector("form");
  const foodInput = document.getElementById("foodName");
  const calorieInput = document.getElementById("calories");
  const calorieDisplay = document.getElementById("calorieDisplay");
  
  
  form.addEventListener("submit", (event) => {
   
    event.preventDefault();

    const food = new Food(foodInput.value, calorieInput.value);
    foodArray.push(food);
  
    console.log(foodArray);
    const totalCalories = foodArray.reduce((sum, food) => sum + food.calories, 0);
    caloriesDisplay.textContent = `Total calories: ${totalCalories}`;
    foodInput.value = "";
    calorieInput.value = "";
  });
  