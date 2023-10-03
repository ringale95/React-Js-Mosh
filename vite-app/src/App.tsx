import { useState } from "react";

const App = () => {
  const [pizza, setPizza] = useState({
    name: " Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
  };
  return (
    <div>
      Toppings:
      <ul>
        {pizza.toppings.map((topping) => (
          <li>{topping}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Add Cheese</button>
    </div>
  );
};

export default App;
