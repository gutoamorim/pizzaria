import styles from "./signup.module.css";

export default function SignUp() {
  return (
    <div className={styles.bg}>
      <div className="container">
        <div className={styles.formContainer}>
          <form>
            <div className={styles.formGroup}>
              <div className={styles.row}>
                <label htmlFor="first-name">Nome</label>
                <input type="text" id="first-name" />
              </div>
              <div className={styles.row}>
                <label htmlFor="last-name">Sobrenome</label>
                <input type="text" id="last-name" />
              </div>
            </div>

            <div className={styles.row}>
              <label htmlFor="email">email</label>
              <input type="email" id="email" />
            </div>

            <div className={styles.formGroup}>
              <div className={styles.row}>
                <label htmlFor="password">Senha</label>
                <input type="password" />
              </div>
              <div className={styles.row}>
                <label htmlFor="confirm-password">Confirme a senha</label>
                <input type="password" />
              </div>
            </div>

            <div className={styles.row}>
              <label htmlFor="cep">CEP</label>
              <input type="text" id="cep" />
            </div>

            <div className={styles.formGroup}>
              <div className={styles.row}>
                <label htmlFor="rua">Rua</label>
                <input type="text" id="rua" />
              </div>
              <div className={styles.row}>
                <label htmlFor="number">Numero</label>
                <input type="text" id="numero" />
              </div>
            </div>

            <div className={styles.formGroup}>
              <div className={styles.row}>
                <label htmlFor="bairro">Bairro</label>
                <input type="text" id="bairro" />
              </div>
              <div className={styles.row}>
                <label htmlFor="city">Cidade</label>
                <input type="text" id="city" />
              </div>
            </div>

            <button type="submit" className="button">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
