// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  revalidated: boolean
  message?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.query.token !== process.env.REVALIDATE_TOKEN){
    return res.status(401).json({revalidated: false, message:"Insert Right Token"})
  }

  if(req.query.data === 'id'){
    try {
      await res.revalidate('/product/static')
      return res.json({revalidated: true})
    } catch (error) {
      return res.status(500).send({revalidated: false})
    }
  }
  return res.json({ revalidated: false, message : "pilihan data mana yang mau di validate" })
  // try {
  //   await res.revalidate('/product/static')
  //   return res.json({revalidated: true})
  // } catch (error) {
  //   return res.status(500).send({revalidated: false})
  // }
}
