import React, { useEffect, useState } from 'react'
import Logo from '../assets/CElogo1.png'
import { Link } from 'react-router-dom'

function Navbar() {

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const user = localStorage.getItem("user");
  
  const logout = (e) => {
   e.preventDefault();
   localStorage.removeItem("user");
   window.location.reload();
  }
 
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

const toggleMenu = () => {
  setMenuOpen(!isMenuOpen);
}

  return (
    <>
      <div className="App">
        <section className='header'>

          <nav className='d-flex flex-row justify-content-center align-items-center'>
              {
                isMobile ? <>
                  <div className='d-flex flex-column align-items-start'>
                  {
                    isMenuOpen ? <button id='hamburger' onClick={toggleMenu}>&times;</button>
                    : <button id='hamburger' onClick={toggleMenu}>☰</button>
                  }
                  {
                    isMenuOpen ? <>
                      <ul className='nav-menu2 nav-items d-flex flex-column align-items-start justify-content-center mb-0'>
                    <li>
                      <Link to="/usecase">Create</Link>
                    </li>
                    {
                      user ? <li>
                      <Link to="/yourbots">My Chatbots</Link>
                    </li> : ''
                    }
                    <li>
                      <Link to="/">Features</Link>
                    </li>
                    <li>
                      <Link to="/">Contact</Link>
                    </li>
                    <li id='login-link'>
                      {user ? <Link onClick={logout}>Logout</Link> : <Link to="/login">Sign-up / Login</Link>}
                    </li>
                  </ul>
                    </> : ''
                  }
                  </div>
                </>
                  : <ul className='nav-items d-flex flex-row align-items-center justify-content-center mb-0'>
                    <li>
                      <Link to="/usecase">Create</Link>
                    </li>
                    {
                      user ? <li>
                      <Link to="/yourbots">My Chatbots</Link>
                    </li> : ''
                    }
                    <li>
                      <Link to="/">Features</Link>
                    </li>
                    <li>
                      <Link to="/">Contact</Link>
                    </li>
                  </ul>
              }
          </nav>
          <div style={{marginRight:"5vw"}} className='logo'>
            <Link to="/"><img style={{ height: "60px" }} src={Logo} alt='logo' /></Link>
          </div>
          {
            !isMobile ? <div className='signUp'>
            {user ? <Link onClick={logout}>Logout</Link> : <Link to='/login'>Sign Up / Log In</Link>}
          </div> : ''
          }
        </section>
      </div>
    </>
  )
}

export default Navbar