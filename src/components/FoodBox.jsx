import React from "react";

function FoodBox({ food, handleDelete }) {
  return (
    <div style={{ border: "1px solid black" }}>
      <p>{food.name}</p>

      <img style={{ height: "100px" }} src={food.image} />

      <p>Calories: {food.calories}</p>
      <p>Servings {food.servings}</p>

      <p>
        <b>Total Calories: {food.servings * food.calories}</b> kcal
      </p>

      <button onClick={() => handleDelete(food.id)}>Delete</button>
    </div>
  );
}

export default FoodBox;
