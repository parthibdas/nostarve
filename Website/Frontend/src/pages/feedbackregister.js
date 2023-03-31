import Navbarregister from "./navbarregister";
import Rating from 'react-simple-star-rating'
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import firebaseDB from "./firebase";
 import "./feedbackregister.css";
//  import bgImg from "../assets/help.gif";
import ReactStars from "react-rating-stars-component";
import { Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
 

function Feedbackregister(props) {
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
    Navigate("/")
   }
 
  return (
    <div> 
        {/* <Navbarregister Pic={props.user.picture} /> */}
        {/* <Navbarregister Pic={props.username.pic} /> */}
       <div className="ayushhh"> 
       <Navbarregister pic="https://www.simplifai.ai/wp-content/uploads/2019/06/blank-profile-picture-973460_960_720.png" />
       </div>
    <section className="contact-section23">
      <div className="container1234">
        <ToastContainer position="top-center" />
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="wrapper21">
              <div className="row no-gutters">
                <div className="col-md-6">
                  <div className="contact-wrap w-100 p-lg-5 p-4">
                    <div className="mbb-44">Feedback</div>
                    <form
                    //    action="https://formspree.io/f/mayzpqee"
                    //     method="POST"
                      id="contactForm"
                      className="contactForm"
                    >
                      <div className="row">
                        <div className="col-md-12">
                          <h3>Name</h3>
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
                        <h3>Tell us how we can improve</h3>
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
                            <div >
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                activeColor="#ffd700"
                                className="rate"
                            />
                            </div>
                            </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="submit"
                              value="Submit"
                              className="btnnn btn-primary123 a11"
                              onClick={click2}
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                
                <div className="coll-2">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSomWsrVkLFmxhQ08O6a7VHJWXbePK0bLS7kQ&usqp=CAU" width={500}  alt="" />
            <img src="https://i.gifer.com/7SpK.gif" width={420}   alt="" />
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
export default Feedbackregister;