import React, { useState } from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom'
export default function Signup() {

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [mobile,setMobile]=useState('')
    const navigate=useNavigate()
    function signUp(){
        navigate("/Login")
    }
  return (
    <div className='signup-container'>
        <div className='form-group'>
            <label>Name</label>
            <input
            value={name}
            onChange={(e)=>setName(e.target.value)}/>
        </div>
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
        <div className='form-group'>
            <label>mobile number</label>
            <input
            value={mobile}
            onChange={(e)=>setMobile(e.target.value)}/>
        </div>
        <button onClick={signUp}>Signup</button>
    </div>
  )
}
