import React, { useState } from 'react'
import './Signin.css'
import Select from 'react-select'
import options from '../constant/Gender'
import { registration } from '../constant/Registrationdata'

const Signin = () => {
  const [showSignin,setShowSignin] = useState(false)
  const [showLogin,setShowLogin] = useState(false)
  const [showMainCard,setShowMainCard]= useState(true)
  const [showMendotary,setShowMendotary] = useState(false)
  const [firstName,setFirstName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [loginEmail,setLoginEmail] = useState("");
  const [loginPassword,setLoginPassword] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [findAccount,setFindAccount] = useState(false);
  const [userData,setUserData] = useState(
    {
        "firstName" : "",
        "email" : "",
        "password" : ""
    }
  )

  const handleSignin = ()=>{
    if(showSignin===false){
      setShowSignin(true);
    }else{
      setShowSignin(false);
    }
    if(showLogin===true){
      setShowLogin(false);
    }
    setShowMainCard(false);
  }

  const handleLogin = ()=>{
    if(showLogin === false){
      setShowLogin(true);
    }else{
      setShowLogin(false);
    }
    if(showSignin === true){
      setShowSignin(false);
    }
    setShowMainCard(false);
  }


  const handleFirstName = (event)=>{
      // console.log(event.target.value);
      setFirstName(event.target.value);
  }
  const handleEmail = (event)=>{
      // console.log(event.target.value);
      setEmail(event.target.value);
  }
  const handlePassword = (event)=>{
      // console.log(event.target.value);
      setPassword(event.target.value);
  }

  const handleLoginEmail = (event)=>{
    // console.log(event.target.value);
    setLoginEmail(event.target.value);
}
const handleLoginPassword = (event)=>{
    // console.log(event.target.value);
    setLoginPassword(event.target.value);
}

const storedemail = registration.map((mail)=>{
  return(
    mail.email
  )
  })
  const storedpassword = registration.map((password)=>{
  return(
    password.password
  )
  })
    
const handleSubmitLogin = ()=>{
  console.log(showSuccess);
  console.log(storedemail , storedpassword);
  setShowMendotary(true)
  setUserData({
      "email" : loginEmail,
      "password" : loginPassword
  })
    setLoginEmail("");
    setLoginPassword("");
    // console.log(storedpassword);
     const isLoginValid = storedemail.indexOf(loginEmail)
     console.log(isLoginValid)
    if(isLoginValid >= 0){
      setShowSuccess(true);
      setFindAccount(false);
    }else{
      setFindAccount(true);
      setShowSuccess(false);
    }
    // if(isLoginValid < 0){
    //   setFindAccount(true);
    // }
}

const handleSubmitSignin = ()=>{
  setShowMendotary(true)
setUserData({
    "firstName" : firstName,
    "email" : email,
    "password" : password
})
  setFirstName("");
  setEmail("");
  setPassword("");

  registration.unshift(
    {
    "firstName" : firstName,
    "email" : email,
    "password" : password
    }
  )
}

  return (
    <>
        {showMainCard &&<div className='reg-card'>
            <h2>REGISTRATION</h2>
            <div className='reg-btn'>
                <button onClick={handleSignin} className='sign-btn'>Sign in</button>
                <button onClick={handleLogin} className='login-btn'>Log in</button>
            </div>
        </div>}
        {showSignin &&<div className='reg-content'>
          <h2 className='poster-signin'>Sign up</h2>
          <input value={firstName} onChange={handleFirstName} type='text' placeholder='Enter First Name'></input>
          {!firstName && showMendotary &&<p className='mendotary-alert'>* Firstname is mendotary</p>}
          <input value={email} onChange={handleEmail} type='email' placeholder='Enter E-Mail'></input>
          {!email && showMendotary&&<p className='mendotary-alert'>* E-mail is mendotary</p>}
          <input value={password} onChange={handlePassword} type='password' placeholder='Enter New Password'></input>
          {!password && showMendotary&&<p className='mendotary-alert'>* Password is mendotary</p>}
          <Select className='gender-box' placeholder='Search gender' options = {options}/>
          <input className='check' type="checkbox"></input><p className='term'>Accept All Term & Condition</p>
          <button onClick={handleSubmitSignin} className='submit-btn'>SUBMIT</button>
          <p className='creat-alert'>Already Have an Account . <span onClick={handleLogin} className='create-link'>Login Account ?</span></p>

          
        </div>}
        {showLogin &&<div className='reg-content'>
          <h2 className='poster-login'>Log in</h2>
          <input value={loginEmail} onChange={handleLoginEmail} type='email' placeholder='Enter E-Mail' ></input>
          {!loginEmail && showMendotary&&<p className='mendotary-alert'>* E-mail is mendotary</p>}
          <input value={loginPassword} onChange={handleLoginPassword} type='password' placeholder='Enter Password'></input>
          {!loginPassword && showMendotary&&<p className='mendotary-alert'>* Password is mendotary</p>}
          <button onClick={()=>handleSubmitLogin(registration.email)} className='submit'>SUBMIT</button>
         { findAccount && <p className='creat-alert'>Can't Find an Account . <span onClick={handleSignin} className='create-link'>Create Account ?</span></p>}
          {showSuccess &&<p className='success'><i class="bi bi-check-circle-fill"></i>  Login Success</p>}
        </div>}
        
    </>
  )
}

export default Signin
