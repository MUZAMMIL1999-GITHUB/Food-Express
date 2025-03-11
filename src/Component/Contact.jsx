import './Contact.css'
import { Link } from 'react-router-dom'
import logoImage from '../../public/logo.png'
import { useRef } from 'react'
import { Footer } from './Footer'

export function Contact({cartItems}) {
    const navRef = useRef(null)

    function handleNav() {
        navRef.current.classList.toggle("navLinks_hide")
    }
    

    return(
        <>
             <header className="header">
                <div className="logo_area">
                    <img src={logoImage} alt="" />
                    <span className='text-light'>Buy <span className='ex_text'>buzz</span></span>
                </div>
                <div className="navLinks navLinks_hide" ref={navRef}>
                   <Link to={'/home'}>Home</Link>
                   <Link to={'/about'}>About</Link>
                   <Link to={'/details/:id'}>Details</Link>
                   <Link to={'/contact'}>Contact</Link>
                    <div className='search_area'>
                        <input className='form-control p-1' type="text" placeholder='Search recipe..' />
                        <i className='bi bi-search search_icon'></i>
                    </div>
                </div>
                <div className="cart_area">
                    <Link to={'/cart/:id'} className='bi bi-cart cart'></Link>
                    <span>{cartItems.length}</span>
                    <div className='bi bi-list list' onClick={handleNav}></div>
                </div>
            </header>

            <section id='contact' className='contact'>
                <address>
                <div className="left">
                <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28017.34620641734!2d77.37012176675387!3d28.624718313431245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff135b3084b%3A0x19ccb4e95c69306d!2sSector%2063%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1741456347479!5m2!1sen!2sin" width="600" height="350" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                </address>
                <div className="right p-3 shadow shado">
                    <h2>Contact Us</h2>
                    <form id='contact_form'>
                        <label>Name</label>
                        <input type="text" className='form-control' id='name_input' />
                        <label>Email</label>
                        <input type="email" className='form-control' id="email_input" />
                        <label>Phone</label>
                        <input type="tel" className='form-control' id='phone_input' />
                        <button className='btn btn-primary mt-3'>Submit</button>
                    </form>
                </div>
            </section>
            <Footer/>
        </>
    )
}