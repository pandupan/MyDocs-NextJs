import { signIn } from "@/lib/firebase/service";
import { compare } from "bcrypt";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"

const authOptions: NextAuthOptions = {
    session : {
      strategy : "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
      CredentialsProvider({
        type: "credentials",
        name: "Credentials",
          credentials: {
            email:{ label:"Email", type:"email" },
            // fullname:{ label:"Fullname", type:"text" },
            password:{ label:"Password", type:"password" }
          },
        async authorize(credentials){
          const { email, password,  } = credentials as {
            email:string, 
            password:string,
            // fullname:string
          };
          // const user : any = {
          //   id: 1,
          //   email: email,
          //   password: password,
          //   fullname: fullname
          // }

          const user :any = await signIn({email});
          if(user){
            // console.log(user)
            const passwordConfirm = await compare(password, user.password);
            if(passwordConfirm){
              return user;
            } else {
              return null
            }
          } else {
            return null;
          }
        }
      }),
    ],
    callbacks : {
      jwt({token,account,user,role}: any){
        if(account?.provider === "credentials"){
          token.email = user.email;
          token.fullname = user.fullname;
          token.role = user.role;
        }
        console.log({token, account, user, role})
        return token;
      },
      async session({session,token} : any){
        if ("email" in token){
          session.user.email = token.email;
        }
        if ("fullname" in token){
          session.user.fullname = token.fullname;
        }
        if ("role" in token){
          session.user.role = token.role;
        }
        console.log({session, token})
        return session
      }
    },
    pages:{
      signIn:"/auth/login"
    }

}

export default NextAuth(authOptions)