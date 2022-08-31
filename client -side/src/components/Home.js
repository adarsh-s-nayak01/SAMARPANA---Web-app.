import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';

const Home = () => {

  return (
    
    // <>
      <div className="home-page" >      
        {/* <NavLink to="/Login">NGO</NavLink>
        <br></br>
        
        <NavLink to="/Donor">Donor</NavLink> */}
          <h1 className="heading"  >SAMARPANA</h1> 
        
        <div class="row" >

            <div className="column">
                  <div class="content" >
                    {/* <img src="/1.jpg" style="width:100%"> */}
                    
                    <br></br>
                    <h1><NavLink to="/Login">NGO</NavLink></h1>
                    <p>Login as NGO if you have any requests to be posted on the website, which the Donor can see.</p>
                  </div>
            </div>

        <div > <p>-      -</p></div>

          <div class="column">
                <div class="content">
                  {/* <img src="/2.jpg" style="width:100%"> */}
                  {/* <h1>Donor</h1> */}
                  <br></br>
                  <h1>  <NavLink to="/Donor">Donor</NavLink>  </h1> 
                  <p>Login as Donor to fulfil the needs of various NGOs, and help society be a better place to live.</p>
                </div>
          </div>
        
    </div>

      </div>
    // </>
    
  )
}

export default Home