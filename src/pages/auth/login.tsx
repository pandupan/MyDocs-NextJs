import Link from "next/link"
import { useRouter } from "next/router"

const LoginPage = () => {
  const { push } = useRouter() 

  const handleLogin = () =>{
    // router.push('/product')
    push('/product')
  }

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={() => handleLogin()}>Login</button>
      Belum punya akun resgistrasi <Link href={'/auth/register'}>Disinii!!</Link>
    </div>
  )
}

export default LoginPage
