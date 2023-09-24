import ProductView from "@/views/product/Main"
import { productsType } from "@/types/product.type"

const ProductPage = (props : {products : productsType[]} ) => {

  const { products } = props
  return (
    <div>
      <ProductView products={products}/>
    </div>
  )
}

export default ProductPage

//dipanggil setiap melakukan request
export async function getServerSideProps(){
  //fetch data
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/product`)
  const response = await res.json()

  return {
    props: {
      products: response.data
    }
  }
}
