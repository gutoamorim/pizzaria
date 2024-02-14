import styles from "./card.module.css";
import pizza from "../../assets/camarao-c-catupiry.png";

export default function Card() {
  return (
    <div className={styles.card}>
      <img src={pizza} alt="Pizza de Camarão" />
      <span> R$ 32,99</span>
      <h1>Camarão com catupiry</h1>
      <p>Molho, muçarela, camarões ao molho, catupiry e orégano.</p>
    </div>
  );
}
