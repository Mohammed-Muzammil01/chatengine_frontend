import React from 'react'
import Navbar from '../Components/Navbar'
import demo1 from '../assets/demo1.svg'
import illustration2 from '../assets/illustration-2.svg'
import { Link } from 'react-router-dom'
import { TbHandClick } from "react-icons/tb";
import { MdLanguage } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
function LandingPage() {
  const scrollToCreateChatBot = () => {
    const createChatBotSection = document.getElementById('CreateChatBot');
    if (createChatBotSection) {
      createChatBotSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar />

      <section style={{ paddingTop: "4vh" }} className='section-1 d-flex flex-column align-items-center'>
        <h1 className='text-center' style={{ fontSize: "2.5rem", position: "absolute", left: "1%", right: "1%", zIndex: "10", }}>AI at your service</h1>
        <div className="position-relative">
          <img id='CreateChatBot' style={{ height: "52vh", width: "auto", paddingTop: "30px" }} src={demo1} alt='illustration1' className="img-fluid" />
        </div>
        <div className='text-center m-4' style={{ width: "70%", marginRight: "auto", marginLeft: "auto" }}>
          Create commercial or personal chatbots, such as chatGPT, to optimize your workload, increase efficiency and cut costs.
        </div>
        <Link to="/" >
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
      <section className='sec3'>
        <h1  style={{fontSize:"70px"}}>How to use</h1>
        <div className='section-3'>
        <img src={illustration2} alt='illustration-2' className=" illustration2"/>
        <div className='d-flex flex-column align-items-center'>
          
          <ul className='steps'>
            <li>Click on <Link onClick={scrollToCreateChatBot}>Create ChatBot</Link></li> {/* give the link for the button */}
            <li>Select your domain</li>
            <li>Customise your ChatBot</li>
            <li>Deploy your ChatBot</li>
          </ul>
        </div>
        </div>
      </section>
      <section className="section-4">
        <div className="priceCard">
          <h1>₹0</h1>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quisquam sed doloremque ipsam praesentium dolor qui quia sapiente veritatis nam.</h3>
        </div>
        <div className="priceCard">
          <h1>₹100</h1>
          <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse aperiam nobis, rem nihil itaque totam dolore reprehenderit id maxime perferendis.</h3>
        </div>
        <div className="priceCard">
          <h1>₹500</h1>
          <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut nemo dolorum non est veritatis sunt ducimus asperiores sint quod labore.</h3>
        </div>
  
      </section>
    </>
  )
}

export default LandingPage