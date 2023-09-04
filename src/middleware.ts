import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth from "./middlewares/withAuth";



export function mainMiddleware(request: NextRequest) {
  const res = NextResponse.next();
  return res;

  // const isLogin = true;

  // if (isLogin) {
  //   return NextResponse.next();
  // } else{
  //   return NextResponse.redirect(new URL('/auth/login', request.url));
  // }
  // return NextResponse.next()
}

// export const config = {
//   matcher : '/product'
// }


export default withAuth(mainMiddleware,["/profile","/admin"])