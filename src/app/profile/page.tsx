'use client'
import axios from "axios"
import Link from "next/link"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import React from "react"

export default function Profile(){
    const router = useRouter();
    const [data,setData] = React.useState("nothing");


    const logout = async() => {
try {
    const res = axios.get('/api/users/logout')
    toast.success('Logged out successfully')
    router.push('/login')
} catch (error:any) {
    toast.error(error.message)
    console.log(error.message)
}


    }
    const getUserDetails = async()=>{
        const res = await axios.get('/api/users/me');
        console.log(res.data);
        setData(res.data.data._id)
    }

    return(
        <div className="flex flex-col items-center justify-center
        min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            
            <p>Profile Page</p>

            <h2 className="p-3 rounded bg-green-500">{data ==='nothing' ?"Nothing" :
            <Link href={`/profile/${data}`}>{data}
            </Link> }</h2>

            
            <button
            onClick={getUserDetails}
            className="bg-blue-500 mt-5 hover:bg-blue-700 text-white
            font-bold py-2 px-4 rounded"
            > Get User Detials</button>


            <button
            onClick={logout}
            className="bg-red-500 mt-5 hover:bg-blue-700 text-white
            font-bold py-2 px-4 rounded"
            > Logout</button>

        </div>
    )
}