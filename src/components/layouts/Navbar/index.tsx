import { signIn, signOut, useSession } from 'next-auth/react'
import Style from './Navbar.module.css'

const Navbar = () => {
  const {data}: any = useSession()
  console.log(data)
  return (
    <div className={Style.navbar}>
      <div className='big'>Navbar</div>
      <div>
        {data && data.user.fullname}
      </div>
      {data? (
        <button onClick={()=>signOut()}>Sign out</button>
      ) : (
        <button onClick={()=>signIn()}>Sign In</button>
      )}
    </div>
  )
}

export default Navbar