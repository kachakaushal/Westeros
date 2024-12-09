import React, { useState } from 'react'
import "./CSS/loginsignup.css"

const Loginsignup = () => {
  const [state, setstate] = useState("Login");
  const [formData, setformData] = useState({
    username: "",
    password: "",
    email: ""
  })

  const login = async () => {
    console.log("login fun", formData);
    let responseData
    await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    }).then((response) => response.json()).then((data) => responseData = data)
    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token)
      window.location.replace("/");
    }
    else {
      alert(responseData.errors)
    }
  }
  const signup = async () => {
    console.log("sign up", formData);
    let responseData;
    await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    }).then((response) => response.json()).then((data) => responseData = data)
    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token)
      window.location.replace("/");
    }
    else {
      alert(responseData.errors)
    }
  }
  const changeHendler = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value })
  }
  return (
    <div className='loginsignup'>
      <div className="loginsignup-con">
        <h1>{state}</h1>
        <div className="loginsignp-fi">
          {state === "Signup" ? <input type="text" placeholder="Your Name" name='username' value={formData.username} onChange={changeHendler} id="" /> : <></>}
          <input type="email" placeholder="E-mail Address" name='email' value={formData.email} onChange={changeHendler} id="" />
          <input type="password" placeholder="Password" name='password' value={formData.password} onChange={changeHendler} id="" />
        </div>
        <button onClick={() => { state === "Login" ? login() : signup() }}>Continue</button>
        {state === "Signup" ? <p className='loginsignup-login'>Already Have an Account?<span onClick={() => { setstate("Login") }}>Login Here</span></p> : <p className='loginsignup-login'>Create An Account?<span onClick={() => { setstate("Signup") }}>Click Here</span></p>}
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the  terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default Loginsignup