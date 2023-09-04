'use client'

import Link from 'next/link'
import styles from './Register.module.scss'
import { useState } from 'react'
import { useRouter } from 'next/router'

const RegisterView = () => {
  const [isLoading, setIsLoading] = useState(false)
  const[error, setError] = useState("")
  const {push} = useRouter()
  const handleSubmit = async (event: any) => {
    event.preventDefault()
    setError("")
    setIsLoading(true)
    const data = {
      email : event.target.email.value,
      password : event.target.password.value,
      fullname : event.target.fullname.value,
      role : event.target.fullname.role
    }
    const result = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })

    if(result.status === 200){
      event.target.reset();
      setIsLoading(false)
      push('/auth/login')
    } else {
      setIsLoading(false)
      setError(result.status === 400 ? "Email already exist" : "")

    }
  }

  return (
    <div className={styles.register}>
       <h1 className={styles.register__title}>Register Page</h1>
       {error && <p className={styles.register__error}>{error}</p>}
      <div className={styles.register__form}>
      <form onSubmit={handleSubmit}>
        <div className={styles.register__form__item}>
          <label htmlFor='fullname' className={styles.register__form__item__label}>Fullname</label>
          <input 
            type="fullname" 
            id="fullname" 
            name="fullname"
            placeholder='fullname'
            className={styles.register__form__item__input}
          />
        </div>
        <div className={styles.register__form__item}>
          <label htmlFor='email' className={styles.register__form__item__label}>Email</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            placeholder='email'
            className={styles.register__form__item__input}
          />
        </div>
        <div className={styles.register__form__item}>
          <label htmlFor='password' className={styles.register__form__item__label}>Password</label>
          <input 
            type="password" 
            id="password" 
            name="password"
            placeholder='password'
            className={styles.register__form__item__input}
          />
        </div>
        <button
          className={styles.register__form__item__button}
          type='submit'
          disabled={isLoading}
        >{isLoading?"Loading...":"Register"}</button>
        <p className={styles.register__link}>Sudah Punya akun ? <Link href={'/auth/login'}>Login</Link></p>
      </form>
      </div>
    </div>
  )
}

export default RegisterView
