import { useState } from 'react'
import logoImage from '../../public/logo.png'
import './Register.css'
import { useNavigate, Link } from 'react-router-dom';

export function Register() {
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    console.log(input);
    
    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value
        setInput({...input, [name]: value}) // here we are adding the new user data into object form
    }

   
        function handleEye() {
            const passInput = document.getElementById('reg_pass_input')
            const ConfPassInput = document.getElementById('reg_confirm_pass_input')
            if(passInput.type === 'password') {
                passInput.type = 'text'
            } else {
                passInput.type = 'password'
            }
        }
        function handleEye2() {
            const confPassInput = document.getElementById('reg_confirm_pass_input')
            if(confPassInput.type === 'password') {
                confPassInput.type = 'text'
            } else {
                confPassInput.type = 'password'
            }
        }
    

    const navigate = useNavigate()
    function handleSubmit(e) {
        e.preventDefault()
        if(input.password !== input.confirmPassword) {
            alert("Password and Confirm Password must be same!")
        } else {
            const getLocalStorageData = JSON.parse(localStorage.getItem("userData") || "[]");
            console.log(getLocalStorageData);
            
            let userArray = [];
            userArray = [...getLocalStorageData]
            console.log(userArray);
            userArray.push(input)
            localStorage.setItem("userData", JSON.stringify(userArray))
            alert("Registration Successfull!")
            navigate('/login')
        }
    }

    return(
        <>
             <header className="header">
                <div className="logo_area">
                    <img src={logoImage} alt="" />
                    <span className='text-light'>Buy <span className='ex_text'>buzz</span></span>
                </div>
            </header>
           <div className="main_container d-flex justify-content-center align-items-center vh-100">
           <div className="register_form_area w-75 p-4">
                <h2 className='text-white'>Registration</h2>
            <form id='register_form' onSubmit={handleSubmit}>
                    <label htmlFor="name_input">Name</label>
                    <input type="text" className='form-control' name='name' id='name_input' onChange={handleChange} required />
                    <label htmlFor="email_input">Email</label>
                    <input type="email" className='form-control' name='email' id='email_input' onChange={handleChange} required  />
                    <label htmlFor="pass_input">password</label>
                    <input type="password" className='form-control' name='password' id='reg_pass_input' onChange={handleChange} required />
                    <i className='bi bi-eye reg_pass_eye' onClick={handleEye}></i>
                    <label htmlFor="confirm_pass_input">Confirm Password</label>
                    <input type="password" className='form-control' name='confirmPassword' id='reg_confirm_pass_input' onChange={handleChange} required />
                    <i className='bi bi-eye reg_conf_pass_eye' onClick={handleEye2}></i>
                    <button className='btn btn-primary mt-3' type='submit'>Submit</button>
                    <div className="already_login_ararea d-flex gap-2">
                        <p className='text-white'>If you have already account</p>
                        <Link to={'/login'}>Login</Link>
                    </div>
                </form>
            </div>
           </div>
        </>
    )
}