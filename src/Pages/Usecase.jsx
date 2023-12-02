import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FaBriefcase } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
import { IoFastFoodOutline } from "react-icons/io5";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { useEffect } from "react";

export default function UseCase() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <p className="usecase-heading">Choose your usecase:</p>
      <div className="cards-container">
        <div className="cards">
          <div className="card">
            <FaBriefcase className="case" />
            <h3>Portfolio Bot</h3>
            <h5>Create a custom bot trained on your data.</h5>
          </div>
          <div className="card">
            <RiCustomerService2Line className="case" />
            <h3>Customer Service Bot</h3>
            <h5>Create a AI-Driven Chatbot for customer care inquires</h5>
          </div>
          <div className="card">
            <IoFastFoodOutline className="case" />
            <h3>Restaurant Bot</h3>
            <h5>Create a talking menu for your restaurant</h5>
          </div>
          <div className="card">
            <BsFillPatchQuestionFill className="case" />
            <h3>Others</h3>
            <h5>Create your own usecase</h5>
          </div>
        </div>

        {/* <div className="cards">
                    
                </div> */}
      </div>
      <Footer />
    </>
  );
}
