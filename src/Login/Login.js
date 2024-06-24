import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()
    async function loginuser() {
        const newUser={email,password}
        const response=await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/login`,newUser)
        console.log(response)
        if(response.status === 200){
            navigate("/")
            localStorage.setItem("userRole",response.data.role)
            localStorage.setItem("userId",response.data.userId)
        }
    }
  return (
    <div className='login-container'>
        <div className='form-group'>
            <label>email</label>
            <input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className='form-group'>
            <label>password</label>
            <input
            value={password}
            onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button onClick={loginuser}>Login</button>
    </div>
  )
}
