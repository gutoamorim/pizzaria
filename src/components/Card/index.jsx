import styles from "./card.module.css";
import pizza from "../../assets/camarao-c-catupiry.png";

export default function Card({ img, price, flavor, ingredients }) {
  return (
    <div className={styles.card}>
      <img src={img} alt="Pizza de Camarão" />
      <span> R$ {price}</span>
      <h1>{flavor}</h1>
      <p>{ingredients}</p>
    </div>
  );
}
