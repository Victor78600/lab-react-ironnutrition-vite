import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import { useState } from "react";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  // let foodsArr = [...foodsJson];
  const [foods, setFoods] = useState(foodsJson);
  const handleDelete = (id) => {
    const newFood = foods.filter((food) => {
      return food.id !== id;
    });

    setFoods(newFood);
  };

  const handleAddFood = (food) => {
    const copy = [...foods];
    copy.push(food);
    setFoods(copy);
    console.log(food);
  };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <div>
        <AddFoodForm addFood={handleAddFood} />
        {foods.map((food) => {
          return (
            <FoodBox key={food.id} food={food} handleDelete={handleDelete} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
