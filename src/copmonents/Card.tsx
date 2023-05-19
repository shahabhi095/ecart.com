import { MdDeleteForever } from "react-icons/md";
import { Product } from "../App";
import styles from "../styles/Card.module.css";
type CardType = {
  el: Product;
  DeleteProduct: (id: number) => void;
  handleQuantity: (id: number, val: number) => void;
};

const Card = ({ el, DeleteProduct, handleQuantity }: CardType) => {
  const { discountPercentage, id, images, price, title, quantity, stock } = el;
  return (
    <div className={styles.cardContainer}>
      <div className={styles.discount}>
        <p>save</p>
        <p>{discountPercentage}%</p>
      </div>
      <div className={styles.Image}>
        <img src={images[0]} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.price}>
        {" "}
        <p>MRP ${price}</p>
        <p> ${Math.floor(price - (price * discountPercentage) / 100)}</p>
      </div>
      <div className={styles.btnBox}>
        <div className={styles.delete}>
          <MdDeleteForever onClick={() => DeleteProduct(id)} />
        </div>
        <div className={styles.IncDec}>
          <button onClick={() => handleQuantity(id, -1)}>Dec</button>
          <span style={{color:""}}>Quantity:{quantity}</span>
          <button onClick={() => handleQuantity(id, 1)}>Inc</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
