import React from 'react'

import LoginForm from './LoginForm'
import frame from '../assets/frame.png'
import SignCon from './SignCon'
import {FcGoogle} from "react-icons/fc"


export default function Temeplate({title,desc1,desc2,formtype,image,setloggedin}) {


  return (
          <div className='flex justify-evenly text-white font-semibold items-center w-11/12 max-w-[1160px] py-9 mx-auto gap-7 flex-wrap lg:gap-3 '>
    <div  className='flex flex-col gap-3  w-[90%] max-w-[400px] flex-wrap' >
          <div className='flex flex-col gap-2 '>
      <h1 className='text-white font-semibold text-4xl'>{title}</h1>
      <div className='flex flex-col leading-[17px]'>
          <span className='text-white font-light opacity-80'>{desc1}</span>
          <span className=" text-blue-700 font-light  ">{desc2}</span>

      </div>
       {
          (formtype==="signup")?(<SignCon setloggedin={setloggedin}/>):(<LoginForm setloggedin={setloggedin}/>)
       }
      </div>
      <div className='flex items-center gap-x-2 w-[50%]'>
          <div className='h-[1px] w-[50%] bg-gray-400'></div>
          <p className='text-sm text-gray-400'>OR</p>
          <div className='h-[1px] w-[50%] bg-gray-400'></div>
      </div>
      <button className='flex gap-2 bg-richblack-800 py-[8px]  px-[12px] rounded-[8px] border-richblack-700 items-center justify-center  w-[50%]'>
          <FcGoogle/>
         <p> Sign in with Google</p>
         </button>
    </div>
    <div className=' relative max-w-[400px] w-[90%]'>
          <img src={frame} alt='' width={300} height={300} loading='lazy' className=' aspect-square'/>
          <img src={image}  alt='' width={300} height={300} loading='lazy' className='absolute -top-[17px] -left-[19px] aspect-square'/>
    </div>

    </div>
  )
}
