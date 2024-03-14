"use client"
import React,{useState, useEffect} from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useRouter } from 'next/navigation'
import { ReloadIcon } from "@radix-ui/react-icons";

const page = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const router = useRouter()


    const handleClick = async () => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                const accessToken = user.accessToken
                localStorage.setItem("accessToken", accessToken)
                router.push('/admin/gallery', { scroll: true })
                setLoading(false)    
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
                setLoading(false)
                setError(true)
            });
    }

  return (
    <div
      className="flex justify-center items-center px-5 min-h-[100dvh] min-w-full bg-cover"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/hookah-still-life-arrangement_23-2149213283.jpg?size=626&ext=jpg&ga=GA1.1.1210486595.1710366378&semt=sph)",
      }}
    >
      <div className="bg-white p-10 rounded-3xl w-full max-w-[500px]">
        <Label>Email</Label>
        <Input className="bg-gray-200" placeholder="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <br />
        <Label>Password</Label>
        <Input className="bg-gray-200" placeholder="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
        <br />
        <Button className="w-full" variant="secondary" onClick={()=> handleClick()}>
          {!loading ? "Login" : <ReloadIcon className='upload-icon2' />}
        </Button>
        {error && <p className="text-center">Wrong Email Or Password</p>}
      </div>
    </div>
  );
};

export default page;
