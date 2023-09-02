import { fetcher } from "@/lib/swr/fetcher";
import DetailProduct from "@/views/DetailProduct";
import { useRouter } from "next/router";
import useSWR  from "swr";
import style from "../../views/DetailProduct/DetailProduct.module.scss"
import { productsType } from "@/types/product.type";

const DetailProductPage = ({product}:{product : productsType}) => {
  const {query}= useRouter()

  //Client Side
  // const { data, error, isLoading } = useSWR(
  //   `/api/product/${query.id}`,
  //    fetcher
  //   )


  return (
    <div >
      {/* Client Side */}
      {/* <h1 className={style.title}>
        Detail Product Page
      </h1>
      <DetailProduct product={isLoading ? [] : data.data}/> */}


      {/* Server Side & static */}
      <DetailProduct product={product}/>

    </div>
  )
}

export default DetailProductPage;

// export async function getServerSideProps({
//   params,
// }:{params:{id:string}}){
//   //fetch data
//   const res = await fetch(
//     `http://localhost:3000/api/product/${params.id}`
//     )
//   const response = await res.json()

//   return{
//   props:{
//     product: response.data}}
// }


//Static Side Generations
export async function getStaticPaths(){
  //fetch data
  const res = await fetch('http://localhost:3000/api/product')
  const response = await res.json()

    const paths = response.data.map((product: productsType) => ({
      params : {
      id : product.id,
    }
  }))

  console.log(paths)

  return{paths,fallback:false}
}

 export async function getStaticProps({
  params,
  }:{params:{id:any}}){
  //fetch data
  const res = await fetch(
    `http://localhost:3000/api/product/${params.id}`
    )
  const response = await res.json()
  
  return {
    props: {
      product: response.data
    }
  }
}