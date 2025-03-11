import { Link } from 'react-router-dom'
import logoImage from '../../public/logo.png'
import aboutImage from '../../public/about.png'
import Image2 from '../../public/about_2.jpg'
import { useRef } from 'react'
import './About.css'
import { Footer } from './Footer'

export function About({ cartItems }) {

    const navRef = useRef(null)

    function handleNav() {
        navRef.current.classList.toggle("navLinks_hide")
    }

    return (
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

            <section id='about' className='about'>
                <div className="heading">
                    <h2 className='text-light'>About <span>Us</span></h2>
                    <p>Want to know about us more</p>
                </div>
                <div className="about_container">
                    <div className="card mb-3">
                        <div className="row g-0 bg-dark">
                            <div className="col-md-4">
                                <img src={aboutImage} style={{ height: "379px" }} alt="" className='img-fluid rounded-start' />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title text-white">What Makes Our Food Special?</h5>
                                    <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut maiores soluta aspernatur facilis accusantium, doloribus modi velit exercitationem quae quam nemo quos ipsam suscipit ducimus. facilis accusantium, doloribus modi velit exercitationem quae quam nemo quos ipsam suscipit ducimus.</p>
                                    <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas inventore quaerat sequi earum deleniti excepturi cum quia pariatur consequatur? Quaerat.</p>
                                    <p className='card-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, neque! Numquam cupiditate molestias amet esse eius asperiores nostrum. Cupiditate, sed?</p>
                                    <p className="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                    <button className='btn btn-warning btn-sm px-3'>Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about_container mt-2">

                <div className="card mb-3">
                        <div className="row g-0 bg-dark">
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title text-white">What Makes Our Food Special?</h5>
                                    <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut maiores soluta aspernatur facilis accusantium, doloribus modi velit exercitationem quae quam nemo quos ipsam suscipit ducimus. facilis accusantium, doloribus modi velit exercitationem quae quam nemo quos ipsam suscipit ducimus.</p>
                                    <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas inventore quaerat sequi earum deleniti excepturi cum quia pariatur consequatur? Quaerat.</p>
                                    <p className='card-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, neque! Numquam cupiditate molestias amet esse eius asperiores nostrum. Cupiditate, sed?</p>
                                    <p className="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                    <button className='btn btn-warning btn-sm px-3'>Learn More</button>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <img src={Image2} style={{ height: "378px" }} alt="" className='img-fluid rounded-start' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}