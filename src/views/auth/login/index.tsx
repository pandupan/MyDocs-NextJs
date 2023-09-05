'use client'

import Link from 'next/link'
import styles from './Login.module.scss'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'
import { redirect } from 'next/dist/server/api-utils'

const LoginView = () => {
  const [isLoading, setIsLoading] = useState(false)
  const[error, setError] = useState("")
  const {push, query} = useRouter()
  const callbackUrl : any = query.callbackUrl || "/";

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    setError("")
    setIsLoading(true)
    const data = {
      email : event.target.email.value,
      password : event.target.password.value,
      // fullname : event.target.fullname.value
    }
    // const result = await fetch("/api/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(data)
    // })

    // if(result.status === 200){
    //   event.target.reset();
    //   setIsLoading(false)
    //   push('/auth/login')
    // } else {
    //   setIsLoading(false)
    //   setError(result.status === 400 ? "Email already exist" : "")

    // }

    try {
      const res = await signIn('credentials', {
        redirect: false,
        email: event.target.email.value,
        password: event.target.password.value,
        callbackUrl
      })

      if(!res?.error){
        push(callbackUrl)
        setIsLoading(false)
      }else {
        setIsLoading(false)
        setError("Email atau Password Salah")
      }

    } catch (error : any) {
        setIsLoading(false)
        setError("Email atau Password Salah")
      
    }
  }

  return (
    <div className={styles.login}>
       <h1 className={styles.login__title}>Login Page</h1>
       {error && <p className={styles.login__error}>{error}</p>}
      <div className={styles.login__form}>
      <form onSubmit={handleSubmit}>
        {/* <div className={styles.login__form__item}>
          <label htmlFor='fullname' className={styles.login__form__item__label}>Fullname</label>
          <input 
            type="fullname" 
            id="fullname" 
            name="fullname"
            placeholder='fullname'
            className={styles.login__form__item__input}
          />
        </div> */}
        <div className={styles.login__form__item}>
          <label htmlFor='email' className={styles.login__form__item__label}>Email</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            placeholder='email'
            className={styles.login__form__item__input}
          />
        </div>
        <div className={styles.login__form__item}>
          <label htmlFor='password' className={styles.login__form__item__label}>Password</label>
          <input 
            type="password" 
            id="password" 
            name="password"
            placeholder='password'
            className={styles.login__form__item__input}
          />
        </div>
        <button
          className={styles.login__form__item__button}
          type='submit'
          disabled={isLoading}
        >{isLoading?"Loading...":"Login"}</button>
        <p className={styles.login__link}>Belum Punya akun ? <Link href={'/auth/login'}>Register</Link></p>
      </form>
          <button 
            onClick={() => signIn("google",{callbackUrl,redirect:false})}
            className='p-3 w-[100%] bg-slate-400 mt-3 text-white'
          >Sign With Google</button>
      </div>
    </div>
  )
}

export default LoginView
