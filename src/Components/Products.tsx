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
       <div className="" >
        <div className="">
            <div key={product?.id} className="">
              <h2 className="border border-red-500">{product?.title}</h2>
              <img
              className=""
              src={`http://http2.mlstatic.com/D_630013-MLA50879230016_072022-I.jpg`} 
              alt={product?.title} />
              <span className="">${product?.price}</span>
              <div className="form-group col-md-6">
              <button className="btn btn-primary mb-2">Buy</button>
              </div>
            </div>
        </div>
      </div>
      <Form />
    </>
  );
}

export default Products;


