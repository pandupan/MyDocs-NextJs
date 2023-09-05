/* eslint-disable @next/next/no-img-element */
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
      <div>
      {data?.user?.image && 
           <img className='rounded-full w-[25px] h-[20px]' src={data.user.image} alt={data.user.fullname}/>
        }
      </div>
    </div>
  )
}

export default Navbar