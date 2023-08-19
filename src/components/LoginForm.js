import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"

import { Link, useNavigate } from 'react-router-dom';


export default function LoginForm({ setloggedin}) {
          const [formdata,setformdata]=useState({email:"",password:""})
          const [password,setpassword]=useState(false);
          const navigate=useNavigate();

          function changeHandler(event)
          {
                    event.preventDefault();
                    setformdata((prev)=>
                    {
                              return (
                                        {
                                                  ...prev,
                                                  [event.target.name]:event.target.value
                                        }
                              )
                    })
          }
          function submitHandler(e)
          {
             e.preventDefault();
             setloggedin(true);
             toast.success("Logged In");
             navigate("/dashboard");
             
          }
  return (
    <div>
      <div className='w-[100%]'>
      <form onSubmit={submitHandler} className='flex flex-col gap-2'>
          <label >
                    <p className='text-sm relative'>Email Address<sup className=' text-red-800 text-base absolute left-[90px] -top-[3px]'>*</sup></p>
                    <input type='text' required placeholder='Enter email address:' name='email' value={formdata.email} onChange={changeHandler} className='w-full py-1 rounded-md bg-transparent border-2 border-slate-600 placeholder:text-sm opacity-40'/>
          </label>
          <label className='relative'>
                    <p className='text-sm relative'>Password<sup className=' text-red-800 text-base absolute left-[61px] -top-[10px]'>*</sup></p>
                    <input type={password?"text":"password"} required placeholder='Enter password:' name='password' value={formdata.password} onChange={changeHandler}
                    className='w-full py-1 rounded-md bg-transparent border-2 border-slate-600 placeholder:text-sm opacity-40'/>
                    
                              <span onClick={()=>setpassword((prev)=>!prev)} className='absolute right-[10px] top-[25px] ' style={{fontSize:"23px"}}>
                             {password?(<AiOutlineEyeInvisible />):(<AiOutlineEye/>)}
                              </span>
                    
          </label>
          <Link to="/" className='text-sm text-blue-500 font-light self-end'>
                    <p>
                    Forgot Password
                              </p></Link>

          <button className='w-full bg-yellow-300 px-2 text-black py-2 rounded-md'>
                    Sign in
          </button>

          
      </form>
      </div>
    </div>
  )
}
