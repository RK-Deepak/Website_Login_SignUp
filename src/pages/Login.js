import React from 'react'
import Temeplate from '../components/Temeplate'
import loginimg from "../assets/login.png"

export default function Login({setloggedin}) {

  return (
    <div>
      <Temeplate 
      title="Welcome Back"
      desc1="Build skills for today,tomorrrow and beyond."
      desc2="Education to future-proof your career."
      formtype="login"
      image={loginimg}
      setloggedin={setloggedin}/>
    </div>
  )
}
