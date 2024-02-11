import styles from "./home.module.css";
import pizzaIllustration from "../../assets/pizza-illustration.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className={`container ${styles.home}`}>
      <div className={styles.left}>
        <h1>Pizzas 10% OFF</h1>
        <h2>Confira nosso cardápio</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          vitae beatae sint magnam, libero harum quae nobis veritatis iure hic
          provident illo porro.
        </p>
        <Link className="button">Fazer pedido</Link>
      </div>
      <div className={styles.image}>
        <img src={pizzaIllustration} alt="Ilustração de uma pizza" />
      </div>
    </div>
  );
}
