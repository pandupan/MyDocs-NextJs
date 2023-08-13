import Link from "next/link"

const RegisterPage = () => {
  return (
    <div>
      <h1>Register Page</h1>
      Sudah punya akun? Login <Link href={'/auth/login'}>Disinii!!</Link>
    </div>
  )
}

export default RegisterPage
