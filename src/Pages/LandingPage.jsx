import React from 'react'
import Navbar from '../Components/Navbar'
import demo1 from '../assets/demo1.svg'

function LandingPage() {
  return (
    <>
        <Navbar />

        <section style={{paddingTop:"5vh"}} className='section-1 d-flex justify-content-center align-items-center flex-column'>
            <h1 className='d-flex align-self-center' style={{ position:"absolute",left:"1%", right:"1%", zIndex:"10", fontSize:"50px"}}>AI at your service</h1>
          <div style={{position:"relative", zIndex:"1"}}>
            <img style={{height:"50vh", width:"auto", paddingTop:"30px"}} src={demo1} alt='illustration1'/>
          </div>
        </section>
    </>
  )
}

export default LandingPage