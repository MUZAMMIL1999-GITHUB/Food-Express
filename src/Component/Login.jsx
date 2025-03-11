import { Link, useNavigate } from 'react-router-dom'
import logoImage from '../../public/logo.png'
import './Login.css'
import { useState } from 'react';

export function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
   


    function handleChange(e) {
        const value = e.target.value;
        const name = e.target.name;
       

        if("email" === name) {
            setEmail(value)
        }
        if("password" === name) {
            setPassword(value)
        }
    }

    const navigate = useNavigate()
    function handleSubmit(e) {
        e.preventDefault();
        const getData = JSON.parse(localStorage.getItem("userData"))

        const filteredData = getData.find((data) => data.password === password && data.email === email)
        if(filteredData) {
            alert("Login Successfull!")
          navigate("/home")
        } else {
            alert("Email or Password is incorrrect!")
        } 
    }
    function handleEye() {
        const passInput = document.getElementById('pass_input')
        if(passInput.type === 'password') {
            passInput.type = 'text'
        } else {
            passInput.type = 'password'
        }
    }
    

    return (
        <div>
            <header className="header">
                <div className="logo_area">
                    <img src={logoImage} alt="" />
                    <span className='text-light'>Buy <span className='ex_text'>buzz</span></span>
                </div>
            </header>
           <div className="main_login_container w-100 vh-100 d-flex justify-content-center align-items-center">
           <div className="register_form_area w-50 p-4">
                <h2 className='text-white'>Login</h2>
            <form id='login_form' onSubmit={handleSubmit}>
                    <label htmlFor="email_input">Email</label>
                    <input type="email" className='form-control' name='email' onChange={handleChange} required />
                    <label htmlFor="pass_input">password</label>
                    <input type="password" className='form-control' id='pass_input' name='password' onChange={handleChange} required  />
                    <i className='bi bi-eye eye' onClick={handleEye}></i>
                   <button className='btn btn-primary mt-3'>Login</button>
                   <div className="already_login_ararea d-flex gap-2">
                        <p className='text-white'>Don't have an accoun</p>
                        <Link to={'/'}>Sign in</Link>
                    </div>
                </form>
            </div>
           </div>
        </div>
    )
}