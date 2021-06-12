import React, { useState } from 'react'
import { Link } from 'react-scroll'
import '../styles/Navbar.css'

function Navbar() {

    const [header, setHeader] = useState(false)

    const stickyBackground = ()=>{
        if(window.scrollY >= 80){
            setHeader(true)
        }else{
            setHeader(false)
        }
    }

    window.addEventListener('scroll', stickyBackground)

    return (
       <div className={header ? 'header active': 'header'}>
            <header className='header-container bd-container'>
            <Link to='hero' activeClass='active'  smooth='true' duration={500}><img src="" alt="" />LOGO</Link>
            <div className='header-wrapper'>

                    <ul className='nav-menu'>
                        <li className='nav-item'><Link to='hero' activeClass='active' spy='true' smooth='true' duration={500}>Home</Link></li>
                        <li className='nav-item'><Link to='features' activeClass='active' spy='true' smooth='true' duration={500}>Features</Link></li>
                        <li className='nav-item'><Link to='services' activeClass='active' spy='true' smooth='true' duration={500}>Services</Link></li>
                        <li className='nav-item'><Link to='project' activeClass='active' spy='true' smooth='true' duration={500}>Projects</Link></li>
                        <li className='nav-item'><Link to='' activeClass='active' spy='true'  smooth='true' duration={500}>Shop</Link></li>
                        <li className='nav-item'><Link to='' activeClass='active' spy='true' smooth='true' duration={500}>Contact us</Link></li>
                        <li className='nav-item'><Link to='' activeClass='active' spy='true' smooth='true' duration={500}>Prices</Link></li>
                    </ul>

            </div>

            <div className='social-media-wrapper'>
                <div className='menu-toggle'></div>
                <li className='social-media'><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                <li className='social-media'><a href="/"><i className="fab fa-twitter"></i></a></li>
                <li className='social-media'><a href="/"><i className="fab fa-google-plus-g"></i></a></li>
            </div>

        </header>
       </div>
    )
}

export default Navbar
