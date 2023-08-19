import React, { useState } from 'react'
import Temeplate from '../components/Temeplate'
import signupimg from "../assets/signup.png"


export default function Signup({setloggedin}) {
        
  return (
    <div>
      <Temeplate 
      title="Join the millions learning to code with StudyNotion for free"
      desc1="Build skills for today,tomorrrow and beyond."
      desc2="Education to future-proof your career."
      formtype="signup"
      image={signupimg}
      setloggedin={setloggedin}/>
    </div>
  )
}
