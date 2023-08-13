import Link from "next/link"
import { useRouter } from "next/router"
import Style from './Login.module.scss'

const LoginViews = () => {
  const { push } = useRouter() 

  const handleLogin = () =>{
    // router.push('/product')
    push('/product')
  }

  return (
    <div className={Style.login}>
      <h1 style={{ color: 'red' }} className="text-7xl font-bold">Login Page</h1>
      <button onClick={() => handleLogin()}>Login</button>
      Belum punya akun resgistrasi <Link href={'/auth/register'}>Disinii!!</Link>
    </div>
  )
}

export default LoginViews
