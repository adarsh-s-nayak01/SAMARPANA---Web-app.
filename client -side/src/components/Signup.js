import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Signup = () => {
  const history = useNavigate();
  const [user, setUser] = useState(
    {
      name: "", phone: "", email: "", address: "", password: ""
    }
  );
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  }


  const Postdata = async (e) => {
    e.preventDefault();
    const { name, phone, email, address, password } = user;
    const res = await fetch('/register', {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, phone, email, address, password
      })
    });
    const res1 = await res.json();
    if (res1.status === 422 || !res1) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    }
    else {
      window.alert("Registration Successful");
      console.log("Registration Successful");
      history('/login')
    }
  }
  return (
    // <div className="login-box login-box2">
    //   <h2>SignUp</h2>
    //   <form>
    //     <div className="user-box">
    //       <input type="text" name="name" required="" autoComplete='off' onChange={handleInputs} value={user.name} />
    //       <label>Name</label>
    //     </div>
    //     <div className="user-box">
    //       <input type="text" name="phone" required="" autoComplete='off' onChange={handleInputs} value={user.phone} />
    //       <label>Phone</label>
    //     </div>
    //     <div className="user-box">
    //       <input type="text" name="email" required="" autoComplete='off' onChange={handleInputs} value={user.email} />
    //       <label>Email</label>
    //     </div>
    //     <div className="user-box">
    //       <input type="text" name="address" required="" autoComplete='off' onChange={handleInputs} value={user.address} />
    //       <label>Address</label>
    //     </div>
    //     <div className="user-box">
    //       <input type="password" name="password" required="" autoComplete='off' onChange={handleInputs} value={user.password} />
    //       <label>Password</label>
    //     </div>

    //     <a href="#" onClick={Postdata}>
    //       <span></span>
    //       <span></span>
    //       <span></span>
    //       <span></span>
    //       Submit
    //     </a>
    //   </form>
    // </div>

    // the new one.
    
      
    <div className="Auth-form-container">
    <form className="Auth-form">
      <div className="Auth-form-content">
        <h3 className="Auth-form-title" >Sign In</h3>


         {/* <div className="user-box">
            <input type="text" name="phone" required="" autoComplete='off' onChange={handleInputs} value={user.phone} />
            <label>Phone</label>
         </div> */}


         {/* for name */}
         <div className="form-group mt-3">
          <label>Name </label>
          <input 
              type="text" 
              name="name" required="" autoComplete='off' 
              onChange={handleInputs}
               value={user.name}  
              className="form-control mt-1"
              placeholder="Enter Name"
              
               />
        </div>

      {/* for phone number */}
      <div className="form-group mt-3">
          <label>Phone No : </label>
          <input  type="text" name="phone" required="" autoComplete='off' onChange={handleInputs} value={user.phone}
              
              className="form-control mt-1"
              placeholder="Enter Phone No"
              
               />
        </div>


        {/* for email */}
        <div className="form-group mt-3">
          <label>Email address</label>
          <input   
              type="text" 
              name="email" required="" 
              autoComplete='off' 
              onChange={handleInputs} 
              value={user.email}
              className="form-control mt-1"
              placeholder="Enter email"
              
               />
        </div>


        {/* for address */}
        <div className="form-group mt-3">
          <label> Address</label>
          <input type="text" name="address" required="" autoComplete='off' onChange={handleInputs} value={user.address}  
             
              className="form-control mt-1"
              placeholder="Enter email"
              
               />
        </div>




        {/* for passwords */}
        <div className="form-group mt-3">
          <label>Password</label>
          <input  type="password" name="password" required="" autoComplete='off' onChange={handleInputs} value={user.password}
          className="form-control mt-1"
              placeholder="Enter password"
         
          />
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



          {/* post data
           */}
        <div className="d-grid gap-2 mt-3">

          <button 
              type="submit" 
              className="btn btn-primary"
              href="#" 
              onClick={Postdata}
          >
             Register
          </button>

          {/* <p>New User?</p>
        <NavLink to="/signup">Register</NavLink> */}

        </div>
        
      </div>
    </form>
  </div>

  )
}

export default Signup