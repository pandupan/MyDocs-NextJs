import { retreiveData, retreiveDataById } from "@/lib/firebase/service";
import type { NextApiRequest, NextApiResponse } from "next";

export type Data ={
  status: boolean,
  statusCode : number,
  data : any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
){
  if (req.query.product![1]){
    const data = await retreiveDataById("products", req.query.product![1])
    res.status(200).json({status:true, statusCode:200, data});
  }else{
    const data = await retreiveData("products")
    res.status(200).json({status:true, statusCode:200, data});
  }
}