import React from 'react'
import Navbar from '../Components/Navbar'
import demo1 from '../assets/demo1.svg'
import { Link } from 'react-router-dom'
function LandingPage() {
  return (
    <>
        <Navbar />

        <section style={{ paddingTop: "4vh" }} className='section-1 d-flex justify-content-center align-items-center flex-column'>
        <h1 className='text-center mb-4' style={{ fontSize: "2.5rem",position:"absolute",left:"1%", right:"1%", zIndex:"10", }}>AI at your service!</h1>
        <div className="position-relative">
          <img style={{ height: "48vh", width: "auto", paddingTop: "30px" }} src={demo1} alt='illustration1' className="img-fluid" />
        </div>
        <div className='text-center mb-4' style={{ width: "70%", margin: "auto" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad ipsa aliquid exercitationem enim molestias quisquam voluptatum at nihil recusandae, voluptate rerum sed minima obcaecati, ab quam ratione distinctio ullam aut.
        </div>
        <Link to="/">
          <button
            className='btn-primary'
            style={{
              marginTop: "20px",
              padding: "20px",
              fontSize: "1.2rem",
              borderRadius: "12px",
              backgroundColor: "#223c4b",
              border: "2px solid black",
              color: "var(--customGreen)",
              transition: "background-color 0.3s, color 0.3s",
            }}
          >
            Get Started
          </button>
        </Link>
      </section>
    </>
  )
}

export default LandingPage