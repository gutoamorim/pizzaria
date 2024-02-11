import { Link } from "react-router-dom";
import styles from "./signup.module.css";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  firstName: z.string().nonempty("O campo nome é obrigatório"),
  lastName: z.string().nonempty("O campo sobrenome é obrigatório"),
  email: z
    .string()
    .email("Informe um e-mail válido")
    .nonempty("O campo nome é obrigatório"),
  password: z.string().nonempty("O campo senha é obrigatório"),
  confirmPassword: z.string().nonempty("É necessário confirmar senha"),
  cep: z.string().nonempty("O campo cep é obrigatório"),
  rua: z.string().nonempty("O campo rua é obrigatório"),
  bairro: z.string().nonempty("O campo bairro é obrigatório"),
  city: z.string().nonempty("O campo cidade é obrigatório"),
});

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  function handleSiginUp(data) {
    console.log(data);
  }

  return (
    <div className={styles.bg}>
      <div className="container">
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit(handleSiginUp)}>
            <div className={styles.formGroup}>
              <div className={styles.row}>
                <label htmlFor="firstName">Nome</label>
                <input type="text" id="firstName" {...register("firstName")} />
                {errors.firstName && (
                  <span className="error">{errors.firstName.message}</span>
                )}
              </div>
              <div className={styles.row}>
                <label htmlFor="lastName">Sobrenome</label>
                <input type="text" id="lastName" {...register("lastName")} />
                {errors.lastName && (
                  <span className="error">{errors.lastName.message}</span>
                )}
              </div>
            </div>

            <div className={styles.row}>
              <label htmlFor="email">email</label>
              <input type="email" id="email" {...register("email")} />
              {errors.email && (
                <span className="error">{errors.email.message}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <div className={styles.row}>
                <label htmlFor="password">Senha</label>
                <input
                  type="password"
                  id="password"
                  {...register("password")}
                />
                {errors.password && (
                  <span className="error">{errors.password.message}</span>
                )}
              </div>
              <div className={styles.row}>
                <label htmlFor="confirmPassword">Confirme a senha</label>
                <input
                  type="password"
                  id="confirmPassword"
                  {...register("confirmPassword")}
                />
                {errors.confirmPassword && (
                  <span className="error">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>
            </div>

            <div className={styles.row}>
              <label htmlFor="cep">CEP</label>
              <input type="text" id="cep" {...register("cep")} />
              {errors.cep && (
                <span className="error">{errors.cep.message}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <div className={styles.row}>
                <label htmlFor="rua">Rua</label>
                <input type="text" id="rua" {...register("rua")} />
                {errors.rua && (
                  <span className="error">{errors.rua.message}</span>
                )}
              </div>
              <div className={styles.row}>
                <label htmlFor="number">Numero</label>
                <input type="text" id="number" {...register("number")} />
              </div>
            </div>

            <div className={styles.formGroup}>
              <div className={styles.row}>
                <label htmlFor="bairro">Bairro</label>
                <input type="text" id="bairro" {...register("bairro")} />
                {errors.bairro && (
                  <span className="error">{errors.bairro.message}</span>
                )}
              </div>
              <div className={styles.row}>
                <label htmlFor="city">Cidade</label>
                <input type="text" id="city" {...register("city")} />
                {errors.city && (
                  <span className="error">{errors.city.message}</span>
                )}
              </div>
            </div>

            <button type="submit" className="button">
              Cadastrar
            </button>
          </form>
          <Link className="login" to="/signIn">
            Ja possui conta? Faça login
          </Link>
        </div>
      </div>
    </div>
  );
}
