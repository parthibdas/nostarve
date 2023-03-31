import Navbare from "./navbar";
import Rating from 'react-simple-star-rating'
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import firebaseDB from "./firebase";
 import "./feedback.css";
//  import bgImg from "../assets/help.gif";
import ReactStars from "react-rating-stars-component";
import { Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
 

function Feedback(props) {
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, email, subject, message } = state;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const [rating, setRating] = useState(0) // initial rating value

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
   const Navigate = useNavigate();
   function click2(){
    Navigate("/Home")
   }
 
  return (
    <div> 
        {/* <Navbare Pic={props.user.picture} /> */}
       <div className="ayush"> <Navbare Pic="https://tse1.mm.bing.net/th?id=OIP.Z5BlhFYs_ga1fZnBWkcKjQHaHz&pid=Api&rs=1&c=1&qlt=95&w=110&h=116" /></div>
    <section className="contact-section23">
      <div className="container1234">
        <ToastContainer position="top-center" />
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="wrapper21">
              <div className="row no-gutters">
                <div className="col-md-6">
                  <div className="contact-wrap w-100 p-lg-5 p-4">
                    <h3 className="mbb-4">Feedback</h3>
                    <form
                    //    action="https://formspree.io/f/mayzpqee"
                    //     method="POST"
                      id="contactForm"
                      className="contactForm"
                    >
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              placeholder="Name"
                              onChange={handleInputChange}
                              value={name}
                            />
                          </div>
                        </div>
                        
                        
                        {/* <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="subject"
                              placeholder="Rating"
                              onChange={handleInputChange}
                              value={subject}
                            />
                          </div>
                        </div> */}
                        <div className="col-md-12">
                          <div className="form-group">
                            <textarea
                              type="text"
                              className="form-control"
                              name="message"
                              placeholder="Give Your Feedback"
                              cols="30"
                              rows="6"
                              onChange={handleInputChange}
                              value={message}
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                            <h3>Rating</h3>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                activeColor="#ffd700"
                            />
                            
                            </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="submit"
                              value="Submit"
                              className="btn btn-primary123 a11"
                              onClick={click2}
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                
                <div className="col-2">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwprqJWs17JroHsvt__2KITKGA2d2CL7lJuQ&usqp=CAU" width={1000} height={1000} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
export default Feedback;