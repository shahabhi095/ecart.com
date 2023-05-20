import axios from "axios";

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
}

// get Data function
export const getData = async () => {
  try {
    const product = await axios.get(`https://dummyjson.com/products`);
    const allProduct = product.data.products.map((el: Product) => {
      return { ...el, quantity: 1 };
    });
    return allProduct;
  } catch (err) {
    console.log(err);
  }
};
