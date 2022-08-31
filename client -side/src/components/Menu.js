import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';
const Menu = () => {
  const histor = useNavigate();
  const [userData, setUserData] = useState({});
  const callAboutPage = async () => {
    try {
      const res = await fetch('/about', {

        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      const data = await res.json();
      setUserData(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    }
    catch (err) {
      console.log(err.message);
      histor('/login');
    }
  }
  useEffect(() => {
    callAboutPage();
  }, []);
  return (
    <>

      {/* <span>
        <NavLink to="/Profile">Profile</NavLink>
        <br></br>
        <NavLink to="/New">New Request</NavLink>
        <br></br>
        <NavLink to="/Pending">Previous Requests</NavLink>
      </span> */}

        
      {/* <div className="home-page" >       */}
        {/* <NavLink to="/Login">NGO</NavLink>
        <br></br>
        
        <NavLink to="/Donor">Donor</NavLink> */}
          {/* <h1 className="heading"  >SAMARPANA</h1>  */}
        
        <div class="row_menu" >

        <div className="column_menu">
                <div class="content" >
                  {/* <img src="/1.jpg" style="width:100%"> */}
                  
                  <br></br>
                  <h1><NavLink to="/Profile">Profile</NavLink></h1>
                  {/* <p>Login as NGO if you have any requests to be posted on the website, which the Donor can see.</p> */}
                </div>
          </div>
        <div > <p>-      -</p></div>


        <div className="column_menu">
              <div class="content">
                {/* <img src="/2.jpg" style="width:100%"> */}
                {/* <h1>Donor</h1> */}
                <br></br>
                <h1> <NavLink to="/New">New Request</NavLink>  </h1> 
                {/* <p>Login as Donor to fulfil the needs of various NGOs, and help society be a better place to live.</p> */}
              </div>
          </div>

          <div > <p>-      -</p></div>

          <div className="column_menu">
              <div class="content">
                {/* <img src="/2.jpg" style="width:100%"> */}
                {/* <h1>Donor</h1> */}
                <br></br>
                <h1> <NavLink to="/Pending">Previous Requests</NavLink>  </h1> 
                {/* <p>Login as Donor to fulfil the needs of various NGOs, and help society be a better place to live.</p> */}
              </div>
          </div>
        
    </div>

      {/* </div> */}

         


         

          
    </>
  )
}


export default Menu