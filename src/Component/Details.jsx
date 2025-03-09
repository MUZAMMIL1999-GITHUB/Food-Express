import { Link, useParams } from 'react-router-dom'
import logoImage from '../../public/logo.png'
import { useEffect, useRef, useState } from 'react'
import './Details.css'
import axios from 'axios'
import { Footer } from './Footer'


export function Details({cartItems}) {
    const [data, setData] = useState([])
    const { id } = useParams()

    const navRef = useRef(null)
    function handleNav() {
        navRef.current.classList.toggle("navLinks_hide")
    }

    const filterItem = data.filter((item) => {
        return item
    })
    console.log(filterItem);
    


        useEffect(() => {
          
                // axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
                axios.get('https://fakestoreapi.com/products')
                    .then((res) => {
                        console.log(res.data)
                        setData(res.data)
                    })
           

        }, [])
    


    return (
        <>
            <header className="header">
                <div className="logo_area">
                    <img src={logoImage} alt="" />
                    <span className='text-light'>Food <span className='ex_text'>Express</span></span>
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
                    <Link to={'/cart'} className='bi bi-cart cart'></Link>
                    <span>{cartItems.length}</span>
                    <div className='bi bi-list list' onClick={handleNav}></div>
                </div>
            </header>

            <section id='details' className='details'>
                {
                    filterItem.map((item, index) => {
                        return (
                            <div className='card mb-3 bg-dark' key={index}>
                                <div className='row g-0'>
                                    <div className='col-md-4 image_area'>
                                        <img src={item.image} alt="" style={{width: "250px", height: "250px"}} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className='card-body'>
                                            <h5 className='card-title text-light'>{item.title}</h5>
                                            <p className='card-text'>{item.description}</p>
                                            <p className='text-light'>{item.category}</p>
                                           <div className='price_area'>
                                           <p className='card_price fw-bold'>${`${item.price}`}</p>
                                           <p className='fake_price'>$19.33</p>
                                           </div>
                                           <div className="rating_area">
                                           <span class="badge text-bg-success bi bi-star-fill">{item.rating.rate}</span>
                                           </div>
                                            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                            <Link to={`/cart/${item}`} className='btn btn-warning'>Add_To_Cart</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </section>
            <Footer/>
        </>
    )
}