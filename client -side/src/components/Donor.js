import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
const Donor = () => {
  const histor = useNavigate();
  const [userData, setUserData] = useState([]);
  const callAboutPage = async () => {
    try {
      const res = await fetch('/data1', {

        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      const data = await res.json();
      console.log(data)
      setUserData(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    }
    catch (err) {
      console.log(err.message);
    }
  }
  useEffect(() => {
    callAboutPage();
  }, []);
  return (
    <>
    <div className="don">
            {userData.map((data) => (
              
                
              <section class="posts" className="donor_page">
								<article>
									
                {data.messages.map((subdata) => (
                     
                  <div className="post"  > 
                  
                        <br></br>
                        <br></br>
                          <span>Name: {data.name}</span>{" "}
                          <br></br>
                          <span>Phone: {subdata.phone}</span> <br></br>
                          <span>Email: {subdata.email}</span> <br></br>
                          <span>Address: {data.address}</span> <br></br>
                          <span>Type: {subdata.type}</span> <br></br>
                          <span>Description: {subdata.description}</span> <br></br>
                          <br></br>
                        <br></br>
                  
                  </div>
                   
                ))}


								</article>
               </section>

                
            
            ))}
    </div>
      


                  {/* extra */}
                
								{/* <article>
									<header>
										<!-- <span class="date">April 24, 2017</span> -->
										<h2><a href="#">After session<br />
										</a></h2>
									</header>
									<a href="#" class="image fit"><img src="images/two.jpg" alt="" /></a>
									<!-- <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p> -->
									<ul class="actions special">
										<li><a href="#" class="button">Link to video</a></li>
									</ul>
								</article> */}
								
								
							
							





    </>
  )
}


export default Donor