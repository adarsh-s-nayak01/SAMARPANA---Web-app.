import React, { useState,useEffect,useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from "../App";

const Login = () => {
  const {state,dispatch} = useContext(UserContext);

  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch('/signin', {

      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email, password
      })
    })
    const data = res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials")
    }
    else {
      dispatch({type:"USER",payload:true})
      window.alert("Login Done")
      history("/Menu")
    }
  }
  return (
    // <div className="login-box">
    //   <h2>Login</h2>
    //   <form method="POST">
        // <div className="user-box">
        //   <input type="text" name="email" required="" value={email} autoComplete="off" onChange={(e) => setEmail(e.target.value)} />
        //   <label>Email</label>
        // </div>
    //     <div className="user-box">
    //       <input type="password" name="password" required="" value={password} autoComplete="off" onChange={(e) => setPassword(e.target.value)} />
    //       <label>Password</label>
    //     </div>
    //     <a href="#" onClick={loginUser}>
    //       <span></span>
    //       <span></span>
    //       <span></span>
    //       <span></span>
    //       Submit
    //     </a>
    //     <p>New User?</p>
    //     <NavLink to="/signup">Register</NavLink>
    //   </form>
    // </div>

    // <div  style="background-image: url('C:\Users\Hp\Desktop\samagic\Test\client\src\images\login_page.jpeg')"  >

    
      
    <div className="Auth-form-container">
    <form className="Auth-form">
      <div className="Auth-form-content">
        <h3 className="Auth-form-title" >Log  In</h3>

        {/* for email */}
        <div className="form-group mt-3">
          <label>Email address</label>
          <input 
              type="email" 
              name="email" 
              required="" 
              className="form-control mt-1"
            placeholder="Enter email"
              value={email}
               autoComplete="off" 
               onChange={(e) => setEmail(e.target.value)} />
        </div>

        {/* for passwords */}
        <div className="form-group mt-3">
          <label>Password</label>
          <input 
          type="password" 
          name="password" 
          className="form-control mt-1"
            placeholder="Enter password"
          required="" 
          value={password} 
          autoComplete="off" 
          onChange={(e) => setPassword(e.target.value)} />
        </div>

        {/* //for submit buttton */}

        {/* <a href="#" onClick={loginUser}>
           <span></span>
           <span></span>
           <span></span>
           <span></span>
           Submit
         </a>
         <p>New User?</p>
        <NavLink to="/signup">Register</NavLink> */}


        <div className="d-grid gap-2 mt-3">

          <button 
          type="submit" 
          className="btn btn-primary"
          href="#" 
          onClick={loginUser}
          
        >
             Submit
          </button>

          <p>New User?</p>
        <NavLink to="/signup">Register</NavLink>

        </div>
        
      </div>
    </form>
  </div>


// </div>

  )
}

export default Login