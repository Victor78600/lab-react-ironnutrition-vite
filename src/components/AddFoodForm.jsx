import React from "react";
import { useState } from "react";

function AddFoodForm({ addFood }) {
  const [names, setNames] = useState("");
  const [images, setImages] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  // console.log(foodsArray);

  const handleNames = (event) => setNames(event.target.value);
  const handleImages = (event) => setImages(event.target.value);
  const handleCalories = (event) => setCalories(event.target.valueAsNumber);
  const handleServings = (event) => setServings(event.target.valueAsNumber);

  const resetInputs = () => {
    setNames("");
    setImages("");
    setCalories(0);
    setServings(0);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const states = { names, images, calories, servings };
    const response = [];
    for (const key in states) {
      if (!states[key] || states[key] === "default") {
        response.push(<p>Error on {key}</p>);
      }
    }
    const oneFood = {
      names,
      images,
      calories,
      servings,
    };

    addFood(oneFood);
    resetInputs();
  };

  // const [formData, setFormData] = useState({
  //   name: "",
  //   image: "",
  //   calories: 0,
  //   servings: 0,
  // });

  // const handleChange = (event) => {
  //   const key = event.target.id;
  //   let value;
  //   // if (event.target.type === 'checkbox' || event.target.type === 'radio') {
  //   if (["radio", "checkbox"].includes(event.target.type)) {
  //     value = event.target.checked;
  //   } else if (event.target.type === "number") {
  //     value = event.target.valueAsNumber;
  //   } else {
  //     value = event.target.value;
  //   }
  //   setFormData({ ...formData, [key]: value });
  // };

  return (
    <div>
      {/* <form> */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            id="name"
            value={names}
            // value={formData.name}
            onChange={handleNames}
          />
        </div>
        <div>
          <label htmlFor="image">Image : </label>
          <input
            type="text"
            id="image"
            value={images}
            // value={formData.image}
            onChange={handleImages}
          />
        </div>
        <div>
          <label htmlFor="calories">Calories : </label>
          <input
            type="number"
            id="calories"
            value={calories}
            // value={formData.calories}
            onChange={handleCalories}
          />
        </div>
        <div>
          <label htmlFor="servings">Servings : </label>
          <input
            type="number"
            id="servings"
            value={servings}
            // value={formData.servings}
            onChange={handleServings}
          />
        </div>
        <button>Create</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
