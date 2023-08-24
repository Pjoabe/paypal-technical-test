import { useState, useEffect } from "react";
import PaypalButton from "../Services/PaypalButton";
import { getProducts } from "../Services/GetProducts";
import Header from "./Header";

interface Product {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
}

function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const productsData = await getProducts();
        setProducts(productsData.results);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <><Header /><div>
      {products.map(({ id, title, thumbnail, price }) => (
        <div key={id}>
          <h2>{title}</h2>
          <img src={thumbnail} alt={title} />
          <span>{price}</span>
          <PaypalButton />
        </div>
      ))}
    </div></>
  );
}

export default Products;

