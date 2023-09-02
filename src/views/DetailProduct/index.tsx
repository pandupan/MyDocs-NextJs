/* eslint-disable @next/next/no-img-element */
import { productsType } from "@/types/product.type";
import styles from "./DetailProduct.module.scss";

const DetailProduct = ({product}:{product:productsType}) => {
  return (
    <div>
      <div 
        className={styles.productDetail}  
      >
        <div className={styles.productDetail__image}>
          <img src={product.image && product.image} alt={product.name} />
        </div>
        <h4 className={styles.productDetail__name}>{product.name}</h4>
        <p className={styles.productDetail__category}>{product.category}</p>
        <p className={styles.productDetail__price}>
          {product.price&&product.price.toLocaleString("id-ID",{
            style:"currency",
            currency:"IDR"
          })}
          </p>
      </div>
    </div>
  )
}

export default DetailProduct
