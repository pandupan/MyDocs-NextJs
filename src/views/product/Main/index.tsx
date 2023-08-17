/* eslint-disable @next/next/no-img-element */
import styles from "./Product.module.scss"


type productsType = {
  id :string,
  name:string,
  price: number,
  image:string,
  category:string
}


const ProductView = ({products}:{products:productsType[]}) => {
  return (
    
    <div className={styles.product}>
      <h1 className={styles.product__title}>  
        Product
      </h1>
      <div className={styles.product__content}>
        { products.map((product:productsType)=>(
            <div 
              key={product.id}
              className={styles.product__content__item}  
            >
              <div className={styles.product__content__item__image}>
                <img src={product.image} alt={product.name} />
              </div>
              <h4 className={styles.product__content__item__name}>{product.name}</h4>
              <p className={styles.product__content__item__category}>{product.category}</p>
              <p className={styles.product__content__item__price}>{product.price}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ProductView

