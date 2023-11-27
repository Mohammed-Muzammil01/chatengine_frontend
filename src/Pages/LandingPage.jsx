import React from 'react'
import Navbar from '../Components/Navbar'
import demo1 from '../assets/demo1.svg'
import { Link } from 'react-router-dom'
import { TbHandClick } from "react-icons/tb";
import { TbMessageLanguage } from "react-icons/tb";
import { GrLanguage } from "react-icons/gr";
import { MdLanguage } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
function LandingPage() {
  return (
    <>
      <Navbar />

      <section style={{ paddingTop: "4vh" }} className='section-1 d-flex flex-column align-items-center'>
        <h1 className='text-center' style={{ fontSize: "2.5rem", position: "absolute", left: "1%", right: "1%", zIndex: "10", }}>AI at your service</h1>
        <div className="position-relative">
          <img style={{ height: "52vh", width: "auto", paddingTop: "30px" }} src={demo1} alt='illustration1' className="img-fluid" />
        </div>
        <div className='text-center m-4' style={{ width: "70%", marginRight: "auto", marginLeft: "auto" }}>
          Create commercial or personal chatbots, such as chatGPT, to optimize your workload, increase efficiency and cut costs.
        </div>
        <Link to="/">
          <button
            className='btn-primary'
            style={{
              marginTop: "10px",
              padding: "10px",
              fontSize: "1.2rem",
              borderRadius: "12px",
              backgroundColor: "#223c4b",
              border:"none",
              // border: "2px solid black",
              color: "var(--customGreen)",
              transition: "background-color 0.3s, color 0.3s",
            }}
          >
            Create ChatBot
          </button>
        </Link>
      </section>
      <section className='section-2'>
        <h1 className='features text-center mb-4'>Features</h1>
        <div className='container card-container'>
          <div className='row justify-content-around'>
            {[
              { icon: <TbHandClick className='icon' />, title: 'Easy To Use', description: 'User friendly interface' },
              { icon: <MdLanguage className='icon' />, title: 'Multi Language', description: 'Supports multiple languages' },
              { icon: <MdOutlineSupportAgent className='icon' />, title: 'Customer Support', description: '24/7 customer support' },
              { icon: <VscSettings className='icon' />, title: 'Customizable', description: 'Customize your chatbot to your needs' },
            ].map((feature, index) => (
              <div key={index} className="feature-card col-lg-3 col-md-3 col-sm-6">
                {feature.icon}
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default LandingPage