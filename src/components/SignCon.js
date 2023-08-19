import React from 'react'
import { AiOutlineEye,AiOutlineEyeInvisible } from 'react-icons/ai'
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


export default function SignCon({setloggedin}) {
          const [formdata,setformdata]=useState({fname:"",lname:"",email:"",password:"",confirm:""})
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
             navigate("/dashboard");
             
          }
  return (
    <div >
      <div className='flex gap-2 '>
<NavLink to='/signup'><button>
          Student</button></NavLink>
<NavLink to="/signup"><button>Instrutor</button></NavLink>
</div>
<form onSubmit={submitHandler} className='flex flex-col gap-3'>
<div className='flex gap-3'>
 <label  className='pb-2'>
          <p className='text-sm relative'>
                    Firstname:
          </p>
          <input type='text' required onChange={changeHandler} name='fname' value={formdata.fname} placeholder='Enter First Name' className='w-full py-1 rounded-md bg-transparent border-2 border-slate-600 placeholder:text-sm opacity-40'/>
 </label>
 <label>
          <p  className='text-sm relative'>
                    LastName:
          </p>
          <input type='text' required onChange={changeHandler} name='lname' value={formdata.lname} placeholder='Enter Last Name' className='w-full py-1 rounded-md bg-transparent border-2 border-slate-600 placeholder:text-sm opacity-40'/>
 </label>
 </div>
 <div  className='flex gap-3'>
 <label>
          <p className='text-sm relative'>
                    Emailaddress:
          </p>
          <input type='email' required onChange={changeHandler} name='email' value={formdata.email} placeholder='Enter Email..' className='w-full py-1 rounded-md bg-transparent border-2 border-slate-600 placeholder:text-sm opacity-40'/>
 </label>
 </div>
 <div  className='flex gap-3'>
 <label className='relative'>
          <p className='text-sm relative'>
                    Password:
          </p>
          <input type={password?"text":"password"} required onChange={changeHandler} name='password' value={formdata.password} placeholder='Enter Password..' className='w-full py-1 rounded-md bg-transparent border-2 border-slate-600 placeholder:text-sm opacity-40'/>
          
          <span onClick={()=>setpassword((prev)=>!prev)} className='absolute right-[10px] top-[25px] ' style={{fontSize:"23px"}}>
                   {password?(<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
                    </span>
          
         
 </label>
 <label  className='relative'>
          <p className='text-sm relative'>
                    Confirm Password:
          </p>
          <input type={password?"text":"password"} required onChange={changeHandler} name='confirm' value={formdata.confirm} placeholder='Confirm Password..' className='w-full py-1 rounded-md bg-transparent border-2 border-slate-600 placeholder:text-sm opacity-40'/>
          
          <span onClick={()=>setpassword((prev)=>!prev)} className='absolute right-[10px] top-[25px] ' style={{fontSize:"23px"}}>
                   {password?(<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
                    </span>
          
         
 </label>
 </div>
 <button className=' bg-yellow-300 px-2 text-black py-2 rounded-md w-[50%]'>
          Create Account
 </button>
</form>
    </div>
  )
}
