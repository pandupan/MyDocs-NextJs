import React from 'react'
import styles from '@/styles/404.module.scss'
const Custom404 = () => {
  return (
    <div className={styles.erorr}>
      <img src="/404.png" alt='404' className={styles.erorr__image}/>
      Halaman Tidak Ditemukan
    </div>
  )
}

export default Custom404
