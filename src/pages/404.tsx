import React from 'react'
import styles from '@/styles/404.module.scss'
import Image from 'next/image'
const Custom404 = () => {
  return (
    <div className={styles.erorr}>
      {/* <img src="/404.png" alt='404' className={styles.erorr__image}/> */}
      <Image
        src="/404.png"
        alt="404"
        width={600}
        height={600}
      />
      Halaman Tidak Ditemukan
    </div>
  )
}

export default Custom404

