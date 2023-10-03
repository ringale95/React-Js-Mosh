import { useState } from "react";

const App = () => {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const handleClick = () => {
    setCart({
      ...cart,
      items: [
        ...cart.items.map((item) =>
          item.id == 1 ? { ...item, quantity: 2 } : item
        ),
      ],
    });
  };

  return (
    <div>
      Quantity: {cart.items[0].quantity}
      <button onClick={handleClick}>Update Quantity</button>
    </div>
  );
};

export default App;
