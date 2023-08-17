import { retreiveData } from "@/lib/firebase/service";
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
  const data = await retreiveData("products")
  const payload: Data = {
    status : true, 
    statusCode:200, 
    data:data
  }
  res.status(200).json(payload);
}