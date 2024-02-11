import styles from "./signin.module.css";

export default function SignIn() {
  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.formContainer}>
          <form>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" />
            </div>
            <button className="button" type="submit">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
