import { Link } from "react-router-dom";
import { useState } from "react";
import { registerCustomer } from "../../services/customer";
import { useNavigate } from "react-router-dom";


const Register = () => {

    const navigate = useNavigate()
    const defaultRegisterFormDetails = {
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        password: '',
        confirmPassword: ''
    }

    const [registerFormDetails, setRegisterFormDetails] = useState(defaultRegisterFormDetails);

    const registerFormOnchange = (registerFormData) => {
        const { name, value} = registerFormData.target;
        setRegisterFormDetails({...registerFormDetails, [name]: value});
    }

    const registerFormOnsubmit = async (event) => {
        event.preventDefault()
        if(registerFormDetails.password === registerFormDetails.confirmPassword) {
            const registeredCustomer = await registerCustomer(registerFormDetails);
            if(registeredCustomer.status === 200) {
                navigate('/login');
            }
        }
        
    }

    return (
        <div className="flex items-center h-screen">
             <div className="bg-[#0154A5] w-1/2 max-[640px]:hidden h-screen flex flex-col justify-center items-center">
                <img className="w-1/2 h-1/2 mb-2 max-[680px]:w-1/2" src = "/loginbg.png" alt="logo" />
            </div>
            <div className="flex flex-col w-1/2  max-[680px]:w-full">
                <form 
                        onChange={registerFormOnchange}
                        onSubmit={registerFormOnsubmit}
                        className="flex flex-col justify-center items-center h-[90vh]"
                    >
                        <img className="w-1/4" src="/suchiLogo.png" alt="logo" />
                        <label className="text-[#000] w-full max-w-xs text-left mt-1 mb-1 ml-2 text-sm font-bold">First Name</label>
                        <input 
                            type="text" 
                            placeholder="First Name" 
                            className="input input-bordered w-full max-w-xs bg-transparent mt-1 mb-1 text-sm hover:outline-2" 
                            name='firstName'
                            value={registerFormDetails.firstName}
                        />
                        <label className="text-[#000] w-full max-w-xs text-left mt-1 mb-1 ml-2 text-sm font-bold">Last Name</label>
                        <input 
                            type="text" 
                            placeholder="Last Name" 
                            className="input input-bordered w-full max-w-xs bg-transparent mt-1 mb-1 text-sm hover:outline-2" 
                            name='lastName'
                            value={registerFormDetails.lastName}
                        />
                        <label className="text-[#000] w-full max-w-xs text-left mt-1 mb-1 ml-2 text-sm font-bold">Email</label>
                        <input 
                            type="text" 
                            placeholder="Email" 
                            className="input input-bordered w-full max-w-xs bg-transparent mt-1 mb-1 text-sm hover:outline-2" 
                            name='email'
                            value={registerFormDetails.email}
                        />
                        <label className="text-[#000] w-full max-w-xs text-left mt-1 mb-1 ml-2 text-sm font-bold">Mobile Number</label>
                        <input 
                            type="number" 
                            placeholder="Mobile Number" 
                            className="input input-bordered w-full max-w-xs bg-transparent mt-1 mb-1 text-sm" 
                            name='mobile'
                            value={registerFormDetails.mobile}
                            />
                        <label className="text-[#000] w-full max-w-xs text-left mt-1 mb-1 ml-2 text-sm font-bold">Password</label>
                        <input 
                            type="password" 
                            placeholder="Password" 
                            className="input input-bordered w-full max-w-xs bg-transparent mt-1 mb-1 text-sm" 
                            name='password'
                            value={registerFormDetails.password}
                            />
                        <label className="text-[#000] w-full max-w-xs text-left mt-1 mb-1 ml-2 text-sm font-bold">Confirm Password</label>
                        <input 
                            type="password" 
                            placeholder="Confirm password" 
                            className="input input-bordered w-full max-w-xs bg-transparent mt-1 mb-1 text-sm" 
                            name='confirmPassword'
                            value={registerFormDetails.confirmPassword}
                            />
                        <button className="btn mt-2 mb-2 bg-[#02BDF2] w-full max-w-xs text-white hover:bg-[#02BDF2]">Register</button>
                        <p className="text-[#9ca3af] text-sm mt-2">Have an account ? <Link className="text-[#02BDF2]" to="/login">Login</Link></p>
                    </form>
                </div>
        </div>
    )
}

export default Register;