// @ts-nocheck
import React from "react"
import { Link } from "react-router-dom"
import useForm from "../../Hooks/userForm"
import { UserContext } from "../../UserContext"
import Button from "../Forms/Button"
import Input from "../Forms/Input"
import Error from "../Helper/Error"
import styles from "./LoginForm.module.css"
import stylesBtn from "../Forms/Button.module.css"

const LoginForm = () => {
  const username = useForm()
  const password = useForm()

  const { userLogin, error, loading } = React.useContext(UserContext)

  async function handleSubmit(event) {
    event.preventDefault()

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <Input type="text" name="username" label="User" {...username} />
        <Input type="password" name="password" label="Password" {...password} />
        {loading ? (
          <Button disabled>Carrgando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <Link className={styles.perdeu} to="/login/lost">
        Perdeu a senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastra - se</h2>
        <p>Ainda não possui conta ? Cadastra -se no site</p>
        <Link className={stylesBtn.button} to="/login/register">Cadastro</Link>
      </div>
    </section>
  )
}

export default LoginForm