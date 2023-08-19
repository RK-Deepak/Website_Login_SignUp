import React from 'react'
import logoimage from "../assets/Logo.svg"
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast';

export default function Navbar(props) {

          let loggedin=props.loggedin;
          let setloggedin=props.setloggedin;
  return (
    <div className='flex justify-between text-white font-semibold items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
       <Link to="/">
          <img src={logoimage} alt='logo' width={160} height={32} loading='lazy'/>
       </Link>

       <ul className='flex gap-x-4 items-center'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/">Contact</Link></li>
         
       </ul>
       <div className='flex gap-2'>
          {/* //login will display when first condition true hogi we can also use if and else*/}
          {!loggedin&&

                <Link to="/login"><button className='bg-richblack-800 py-[8px]  px-[12px] rounded-[8px] border-richblack-700'>Login</button></Link>
          }
          {/* //when user is not logged in signup button dikhega */}
          {!loggedin &&
                <Link to="/signup"><button
                className='bg-richblack-800 py-[8px]  px-[12px] rounded-[8px] border-richblack-700'>SignUp</button></Link>
          }
          {/* //when user is logged in than logout fikhega */}
          {loggedin && 
                <Link to="/"><button className='bg-richblack-800 py-[8px]  px-[12px] rounded-[8px] border-richblack-700'
                onClick={()=>
          {
                    setloggedin(false);
                    toast.success("Logged Out");
          }}>Logout</button></Link>
          }
          {/* //when user is logged in than dashboard dikhega */}
          {loggedin &&
                <Link to="/dashboard"><button className='bg-richblack-800 py-[8px]  px-[12px] rounded-[8px] border-richblack-700'>Dashboard</button></Link>
          }
       </div>
    </div>
  )
}
