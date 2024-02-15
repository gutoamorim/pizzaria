import Card from "../../components/Card";
import styles from "./menu.module.css";
import pizzas from "../../services/data.json";

export default function Menu() {
  return (
    <>
      <h1 className={styles.title}>Pizzas</h1>
      <div className={`container ${styles.menu}`}>
        {pizzas.map((pizza) => {
          return (
            <Card
              key={pizza.id}
              img={pizza.img}
              flavor={pizza.name}
              price={pizza.price[2]}
              ingredients={pizza.description}
            />
          );
        })}
      </div>
    </>
  );
}
