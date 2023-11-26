import React, { useEffect, useState } from 'react'
import Logo from '../assets/CElogo1.png'
import { Link } from 'react-router-dom'

function Navbar() {
  
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="App">
        <section className='header'>

          <nav className='d-flex flex-row justify-content-center align-items-center'>
            {/* <button className='hamburger' onClick={setMenuOpen(!isMenuOpen)}>☰</button> */}
          <ul className='nav-items d-flex flex-row align-items-center justify-content-center mb-0'>
            <li>
              <Link to="/">Create</Link>
            </li>
            <li>
              <Link to="/">Features</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li id='login-link'>
              <Link to="/">Sign-up / Login</Link>
            </li>
          </ul>
          </nav>


          <div className='logo'>
            <img style={{ height: "60px", paddingTop: "10px" }} src={Logo} alt='logo' />
          </div>
          <div className='signUp'>
            <Link href='/'>Sign Up / Log In</Link>
          </div>
        </section>
      </div>
    </>
  )
}

export default Navbar