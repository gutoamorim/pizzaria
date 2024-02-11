import styles from "./signin.module.css";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

const schema = z.object({
  email: z
    .string()
    .email("Digite um e-mail válido.")
    .nonempty("O campo e´mail é obrigatporio"),
  password: z
    .string()
    .nonempty("O campo senha é obrigatório")
    .min(6, "A senha deve ter pelo menos 6 caravteres."),
});

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  function handleSign(data) {
    console.log(data.email);
  }

  return (
    <div className={styles.bg}>
      <div className="container">
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit(handleSign)}>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" {...register("email")} />
              {errors.email && (
                <span className="error">{errors.email.message}</span>
              )}
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" {...register("password")} />
              {errors.password && (
                <span className="error">{errors.password.message}</span>
              )}
            </div>
            <button className="button" type="submit">
              Entrar
            </button>
          </form>
          <Link className="login" to="/signUp">
            Não possui conta? Cadastre-se
          </Link>
        </div>
      </div>
    </div>
  );
}
