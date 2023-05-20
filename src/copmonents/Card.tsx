import { MdDeleteForever } from "react-icons/md";
import { Product } from "../App";
import styles from "../styles/Card.module.css";

type CardType = {
  el: Product;
  DeleteProduct: (id: number) => void;
  handleQuantity: (id: number, val: number) => void;
};

// el is the item passed as props from App while maping
const Card = ({ el, DeleteProduct, handleQuantity }: CardType) => {
  const { discountPercentage, id, images, price, title, quantity } = el;
  return (
    //Main Container
    <div className={styles.cardContainer}>
      {/* Discount Section */}
      <div className={styles.discount}>
        <p>save</p>
        <p>{discountPercentage}%</p>
      </div>
      {/* Image of product */}
      <div className={styles.Image}>
        <img src={images[0]} />
      </div>
      {/* Title of product */}
      <h3 className={styles.title}>{title}</h3>
      {/* Price and Discount  */}
      <div className={styles.price}>
        {" "}
        {/* the MRP price */}
        <p>MRP ${price}</p>
        {/*selling price after discount */}
        <p> ${Math.floor(price - (price * discountPercentage) / 100)}</p>
      </div>
      <div className={styles.btnBox}>
        {/* delete section */}
        <div className={styles.delete}>
          <MdDeleteForever onClick={() => DeleteProduct(id)} />
        </div>
        {/*Quantity Increase decrease section */}
        <div className={styles.IncDec}>
          <button onClick={() => handleQuantity(id, -1)}>Dec</button>
          {/* showing Quantity in span tag*/}
          <span style={{ color: "" }}>Quantity:{quantity}</span>
          <button onClick={() => handleQuantity(id, 1)}>Inc</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
