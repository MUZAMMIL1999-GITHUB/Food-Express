import logoImage from '../../public/logo.png'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import './Cart.css'
import { Footer } from './Footer'


export function Cart({ cartItems, setCartItems, handleDelete,  handleOnChange}) {
   const [qunatity, setQuantity] = useState(1)
   const [totalPrice, setTotalPrice] = useState(0)

  function handlePrice() {
    let ans = 0
    cartItems.map((item) => {
        ans += item.price * qunatity
    })
    setTotalPrice(ans)
  }

  function handleDelete(productId) {
    const dltItem = cartItems.filter((item) => item.id !== productId)
    setCartItems(dltItem)
    const newTotal = dltItem.reduce((total, item) => total + item.price * qunatity, 0)
    setTotalPrice(newTotal)
    cartItems.length--;
   }
//    function handleInc(cartId) {
//   const updatedCart = cartItems.map((item) => {
//     return item.id === cartId? qunatity++ : qunatity
//   })
// setQuantity(updatedCart)
// }

  

  useEffect(() => {
    handlePrice()
  }, [])

   

    // function handlePrice() {
    //     let ans = 0
    //     cartItems.map((item) => {
    //         ans += item.price * quantity
    //     })
    //     setPrice(ans)
    // }


    

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
                <div className="navLinks" ref={navRef}>
                    <Link to={'/home'} className='active'>Home</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/details/:id'}>Details</Link>
                    <Link to={'/contact'}>Contact</Link>
                    <div className='search_area'>
                        <input className='form-control p-1' type="text" placeholder='Search recipe..' />
                        <i className='bi bi-search search_icon'></i>
                    </div>
                </div>

                <div className="cart_area">
                    {/* <button className='btn btn-danger btn-sm'>Logout</button> */}
                    <Link to={'/cart/:id'} className='bi bi-cart cart'></Link>
                    <span className='cart_count'>{cartItems.length}</span>
                    <div className='bi bi-list list' onClick={handleNav}></div>
                </div>
            </header>

            <section id='cart_section' className='cart_section'>
                {
                    cartItems.map((item, index) => {
                        return (
                            <div className='card mb-3 bg-dark' key={index}>
                                <div className='row g-0'>
                                    <div className='col-md-4 img_area'>
                                        {/* <div className="image_area"> */}
                                        <img src={item.image} alt="" style={{width: "200px", height: "200px"}} />
                                        {/* </div> */}
                                    </div>
                                    {<div className="col-md-8">
                                        <div className='card-body'>
                                            <div className="content">
                                                <h5 className='card-text'>{item.title}</h5>
                                                <div className="inc_dec_area py-2 d-flex justify-content-between align-items-center">
                                                    {/* <div className="text mt-2 d-flex gap-2">
                                                        <button className='dec_btn'>-</button>
                                                        <p className='text-light'>{qunatity}</p>
                                                        <button className='inc_btn'>+</button>
                                                    </div> */}
                                                    <p className='price text-light mt-2'>${item.price}</p>
                                                    <button className='btn btn-danger btn-sm' onClick={() => handleDelete(item.id)}>Delete</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>}
                                </div>
                            </div>
                        )
                    })
                }
                <div className="total_price_area w-100 d-flex justify-content-between px-4 display-6 text-light">
                    <span>Total Price</span>
                    <span>RS - ${totalPrice.toFixed(2)}</span>
                </div>

            </section>
            <Footer/>
        </>
    )
}