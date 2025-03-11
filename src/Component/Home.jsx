import './Home.css'
import logoImage from '../../public/logo.png'
import { useEffect, useRef, useState } from 'react'
import { Footer } from './Footer'
import { Link } from 'react-router-dom'
import axios from 'axios'

export function Home({handleAddToCart, cartItems}) {
    const [data, setData] = useState([])
    const [query, setQuery] = useState('')
    // console.log(cartItems);
    
  
   

    const navRef = useRef(null)
    function handleNav() {
        navRef.current.classList.toggle("navLinks_hide")
    }

    function handleChange(e) {
        e.preventDefault()
        setQuery(e.target.value)
    }
    const filterData = data.filter((item) => {
        return item.title.toLowerCase().includes(query.toLowerCase())
    })


    useEffect(() => {
        try {
            // axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            axios.get('https://fakestoreapi.com/products')
                .then((res) => {
                    console.log(res.data)
                    setData(res.data)
                })
        } catch (error) {
            if (error.response.status === 404) {
                console.log("Data not found")
            }
        }
    }, [query])


    return (
        <>
            <header className="header">
                <div className="logo_area">
                    <img src={logoImage} alt="" />
                    <span className='text-light'>Buy <span className='ex_text'>buzz</span></span>
                </div>
                <div className="navLinks" ref={navRef}>
                    <Link to={'/home'}>Home</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/details/:id'}>Details</Link>
                    <Link to={'/contact'}>Contact</Link>
                    <div className='search_area'>
                        <input className='form-control p-1' type="text" placeholder='Search recipe..' onChange={handleChange} />
                        <i className='bi bi-search search_icon'></i>
                    </div>
                </div>

                <div className="cart_area">
                  
                    <Link to={'/cart'} className='bi bi-cart cart'></Link>
                    <span className='cart_count'>{cartItems.length}</span>
                    <div className='bi bi-list list' onClick={handleNav}></div>
                </div>
            </header>

            <section className='home d-flex gap-3 justify-content-center align-items-center flex-wrap'>
                {
                    filterData?.map((item, index) => {
                        return (
                            <div className='card' key={index} style={{ width: "19rem", height: "22rem" }}>
                                <img src={item.image} className='card-img-top' style={{height: "150px"}} alt="" />
                                <div className="card-body">
                                    <h5 className='card-title'>{item.title.substring(0, 24)}</h5>
                                    <div className='price_areaa'>
                                        <p className='card_pricee'>${`${item.price}`}</p>
                                        <p className='fake_pricee'>$19.33</p>
                                    </div>
                                    <div className="rating_area">
                                    <span class="badge text-bg-success bi bi-star-fill mb-2">{item.rating.rate}</span>
                                    </div>
                                    
                                    <Link to={`/details/${item.id}`} className='btn btn-primary btn-sm'>View Moew</Link>
                                    <button className='btn btn-warning btn-sm ms-2' onClick={() => handleAddToCart(item)}>Add_To_Cart</button>
                                </div>

                            </div>
                        )
                    })
                }
            </section>
            <Footer />
            

           
        </>
    )
}