import styles from "./header.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className={`container ${styles.header}`}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} alt="Logomarca da pizzaria" />
          </Link>
        </div>
        <nav>
          <Link to="/signUp">Criar conta</Link>
          <Link className="button" to="/signIn">
            Entrar
          </Link>
        </nav>
      </div>
    </header>
  );
}
