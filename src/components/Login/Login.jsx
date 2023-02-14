// @ts-nocheck
import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { UserContext } from "../../UserContext"
import FormCreate from "./FormCreate"
import LoginForm from "./LoginForm"
import LoginPasswordLost from "./LoginPasswordLost"
import LoginPasswordReset from "./LoginPasswordReset"
import styles from "./Login.module.css"

const Login = () => {
  const { login } = React.useContext(UserContext)

  if (login === true) return <Navigate to="/conta" />
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="register" element={<FormCreate />} />
          <Route path="lost" element={<LoginPasswordLost />} />
          <Route path="reset" element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </section>
  )
}

export default Login