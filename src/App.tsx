import { useEffect, useState } from "react";
import { getData } from "./data/getData.ts";
import "./styles/App.css";
import Card from "./copmonents/Card.tsx";
import Loader from "./copmonents/Loader.tsx";

export interface Product {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
  quantity: number;
}

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [product, setProducts] = useState<Product[]>([]);

  //Get Data from Api
  const showData = async () => {
    setProducts(await getData());
    setIsLoading(false);
  };
  useEffect(() => {
    showData();
  }, []);

  //Delete Function
  const DeleteProduct = (id: number) => {
    const productAfterDelete = product.filter((el: Product) => el.id != id);
    setProducts(productAfterDelete);
  };

  //Quantity Increase Decrease function
  const handleQuantity = (id: number, val: number) => {
    const productAfterQtyIncDec = product.map((el: Product) => {
      const newQuntity = Number(el.quantity + val);
      //if newQuntity becomes equal to stock then the quantity cant be increased further
      if (id === el.id && newQuntity > 0 && newQuntity <= el.stock) {
        return { ...el, quantity: newQuntity };
      } else {
        return el;
      }
    });
    setProducts(productAfterQtyIncDec);
  };
  console.log(product);

  //Loader
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <div>
        <div className="Container">
          {product &&
            product.map((el: Product) => (
              // Card Component for showing Product
              <Card
                key={el.id}
                el={el}
                DeleteProduct={DeleteProduct}
                handleQuantity={handleQuantity}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
