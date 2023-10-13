import { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching products in", category);
    switch (category) {
      case "Clothing":
        setProducts(["Shirt", "Pants"]);
        break;
      case "Household":
        setProducts(["Broom", "Dusting Pan"]);
        break;
      case "":
        setProducts([]);
      default:
        break;
    }
  }, [category]);

  return (
    <div>
      Product List
      <ul>
        {products.map((prod) => (
          <li>{prod}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
