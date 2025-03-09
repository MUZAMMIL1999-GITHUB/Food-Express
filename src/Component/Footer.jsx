import './Footer.css'
import { Link, useNavigate } from 'react-router-dom'

export function Footer() {

   

    return(
        <>
        <div className="footer_container">
            <div className="first cardd">
                <h6>Food <span>Express</span></h6>
                <li className='bi bi-envelope'> info@foodexpress.com</li>
                <li className='bi bi-phone'> +919023458768</li>
                <li className='bi bi-globe'> Avenue 6th floor, Mumbai</li>
                  <Link to={'/login'}>Logout</Link>
            </div>
            <div className="second cardd">
                <h6>Our Menu</h6>
                <li>Breakfast</li>
                <li>Lunch</li>
                <li>Dinner</li>
            </div>
            <div className="third cardd">
                <h6>Information</h6>
                <li>About Us</li>
                <li>Testimonials</li>
                <li>Blog</li>
            </div>
            <div className="fourth cardd">
                <h6>Useful Links</h6>
                <li>Services</li>
                <li>Help & Support</li>
                <li>Terms & Conditions</li>
            </div>
            <div className="five cardd">
                <h6>Social</h6>
                <li className='bi bi-facebook'> Facebook</li>
                <li className='bi bi-instagram'> Instagram</li>
                <li className='bi bi-youtube'> Youtube</li>
            </div>
        </div>
        </>
    )
}