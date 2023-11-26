import React from 'react'
import Logo from '../assets/CElogo1.png'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <>
        <div className="App">
          <section className='header'>
          <div className='name'>
              website name
            </div>
            <div className='logo'>
              <img style={{ height:"60px", paddingTop:"10px"}} src={Logo} alt='logo'/>
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