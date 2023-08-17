import { useRouter } from "next/router"
import { useState, useEffect } from "react"

type productType ={
  data : {
    id : number,
    name : string,
    price : number,
    size : string
  }[]
}

const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [product, setProduct] = useState<productType["data"]>([])
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
        setProduct(response.data)
      })
  },[])

  useEffect(() => {
    console.log(product)
  }, [product])



  return (
    <div>
      <h1>  
        Product Page 
      </h1>
      {product.map((item)=>(
        <div key={item.id}>
        <p>{item.name}</p>
        <p>{item.price}</p>
        <p>{item.size}</p>
        </div>
      ))}
    </div>
  )
}

export default ProductPage