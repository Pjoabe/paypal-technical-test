import { useState, useEffect } from "react";
import PaypalButton from "../Services/PaypalButton";
import { getProduct } from "../Services/GetProduct";
import Header from "./Header";
import Form from "./Form";
interface Product {
  id: string;
  title: string;
  price: number;
}

function Products() {
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    async function fetchData() {
      try {
        const productsData = await getProduct();
        setProduct(productsData); 
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Header />
       <div className="display: flex justify-center">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div key={product?.id} className="display: flex justify-center">
              <h2 className="text-xl font-semibold mb-2 text-red-500">{product?.title}</h2>
              <img
              className="w-full h-auto mb-2"
              src={`http://http2.mlstatic.com/D_630013-MLA50879230016_072022-I.jpg`} 
              alt={product?.title} />
              <span className="text-lg text-red-500">${product?.price}</span>
              <PaypalButton />
            </div>
        </div>
      </div>
      <Form />
    </>
  );
}

export default Products;


