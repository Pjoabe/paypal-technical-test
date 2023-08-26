import { useState, useEffect } from "react";
import { getProduct } from "../Services/GetProduct";
import Header from "./Header";
import PaypalButton from "../Services/PaypalButton";

interface Product {
  id: string;
  title: string;
  price: number;
}

function Product() {

  const [product, setProduct] = useState<Product>();
  const [cartQuantity, setCartQuantity] = useState<number>(1);

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

  const handleIncreaseQuantity = () => {
    setCartQuantity(cartQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (cartQuantity > 1) {
      setCartQuantity(cartQuantity - 1);
    }
  };

  return (
    <>
      <Header />
      <div className="">
        <div className="">
          <div key={product?.id} className="header1StDiv">
            <h2 className="productTitle">{product?.title}</h2>
            <img
              width={"100rem"}
              className="rounded"
              src={`http://http2.mlstatic.com/D_630013-MLA50879230016_072022-I.jpg`}
              alt={product?.title}
            />
            <span className="price">${Number(product?.price) * cartQuantity}</span>
            <div 
            // style={{  margin: "0 auto", border: "1px solid red", display: "flex", flexDirection: "column", justifyContent: "center"  }}
             className="form-group col-md-6">
              <div
               style={{ display: "flex", flexDirection: "row", justifyContent: "center", margin: "24px" }}
               >
                <button style={{backgroundColor: "red", border: "none", width: "26px" }} className="btn btn-primary btn-sm"  onClick={handleDecreaseQuantity}>-</button>
                <span style={{ margin: "0px 10px"}} >{cartQuantity}</span>
                <button style={{backgroundColor: "green", border: "none", width: "26px"}} className="btn btn-primary btn-sm"  onClick={handleIncreaseQuantity}>+</button>
              </div>
              <PaypalButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;


