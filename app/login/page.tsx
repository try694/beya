
import { getSession } from "@/app/api/auths/getSession"; 
import LoginClient from "@/components/loginclient/page";
import Link from "next/link";
import { redirect } from "next/navigation";


const Login = async () => {

   const session = await getSession();
   const user = session?.user;
   if(user) redirect("/")
    
  return (
    <div>
       <LoginClient />
    </div>
  );
};

export default Login;