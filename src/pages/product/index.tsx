import ProductView from "@/views/product/Main"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"



const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [products, setProducts] = useState([])
  const { push } = useRouter()

  useEffect(()=>{
    if(!isLogin){
      push("/auth/login")
    }
  },[isLogin, push])

  useEffect(()=>{
    fetch('api/product')
      .then((res) => res.json())
      .then((response) => {
        setProducts(response.data)
      })
  },[])


  return (
    <div>
      <ProductView products={products} />
    </div>
  )
}

export default ProductPage