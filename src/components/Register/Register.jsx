import { Link } from "react-router-dom";
import { useState } from "react";
import { registerCustomer } from "../../services/customer";
import { useNavigate } from "react-router-dom";
import LoginSideContent from "../LoginSideContent/LoginSideContent";
import ValidatedInput from "../ValidatedInput/ValidatedInput";
import { toast } from "react-toastify";
import { notificationError } from "../../notification/notification";
import Footer from "../Footer/Footer";


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
    const loader = <span className="loading loading-spinner loading-md text-white"></span>
    const [registerFormDetails, setRegisterFormDetails] = useState(defaultRegisterFormDetails);
    const [showLoader, setShowLoader] = useState(false)

    const registerFormOnchange = (registerFormData) => {
        const { name, value} = registerFormData.target;
        setRegisterFormDetails({...registerFormDetails, [name]: value});
    }

    const registerFormOnsubmit = async (event) => {
        event.preventDefault()
        if(registerFormDetails.firstName && registerFormDetails.lastName && registerFormDetails.email && registerFormDetails.mobile && registerFormDetails.password && registerFormDetails.confirmPassword && registerFormDetails.password === registerFormDetails.confirmPassword) {
            try {
                setShowLoader(true);
                const registeredCustomer = await registerCustomer(registerFormDetails);
                if(registeredCustomer.status === 200) {
                    navigate('/Login');
                }
            } catch (error) {

            }
            setShowLoader(false);
            
        } else {
            if(!registerFormDetails.firstName) {
                notificationError("FirstName field is required");
            }
            if(!registerFormDetails.lastName) {
                notificationError("LastName field is required");
            }
            if(!registerFormDetails.email) {
                notificationError("Email field is required");
            }
            if(registerFormDetails.mobile) {
                notificationError("Mobile number field is required");
            }
            if(!registerFormDetails.password) {
                notificationError("Password field is required");
            }
            if(!registerFormDetails.confirmPassword) {
                notificationError("Confirm password field is required");
            }
            if(registerFormDetails.password !== registerFormDetails.confirmPassword) {
                notificationError("password and confirm password should be same");
            }
        }
        
    }

    return (
        <div className="h-screen">
            <div className="flex items-center h-screen">
                <LoginSideContent />
                <div className="flex flex-col w-1/2  max-[680px]:w-full">
                    <form 
                            onChange={registerFormOnchange}
                            onSubmit={registerFormOnsubmit}
                            className="flex flex-col justify-center items-center h-[90vh]"
                        >
                            <h1 className="text-4xl font-normal max-[640px]:text-2xl">Register</h1>
                            <hr className="w-[8%] border border-primary mt-2 mb-6 max-[640px]:w-[15%] max-[640px]:mb-3" />
                            {/* <img className="w-1/4" src="/suchiLogo.png" alt="logo" /> */}
                            <ValidatedInput 
                                type="text" 
                                placeholder="First Name" 
                                className="input input-bordered w-full max-w-xs bg-transparent mt-1 mb-1 text-sm hover:outline-2" 
                                name='firstName'
                                value={registerFormDetails.firstName}
                                label="First Name"
                                required
                            />
                            <ValidatedInput 
                                type="text" 
                                placeholder="Last Name" 
                                className="input input-bordered w-full max-w-xs bg-transparent mt-1 mb-1 text-sm hover:outline-2" 
                                name='lastName'
                                label="Last Name"
                                value={registerFormDetails.lastName}
                                required
                            />
                            <ValidatedInput 
                                type="email" 
                                placeholder="Email" 
                                className="input input-bordered w-full max-w-xs bg-transparent mt-1 mb-1 text-sm hover:outline-2" 
                                name='email'
                                label="Email"
                                value={registerFormDetails.email}
                                required
                            />
                            <ValidatedInput 
                                type="number" 
                                placeholder="Mobile Number" 
                                label="Mobile Number"
                                className="input input-bordered w-full max-w-xs bg-transparent mt-1 mb-1 text-sm" 
                                name='mobile'
                                value={registerFormDetails.mobile}
                                required
                                />
                            <ValidatedInput 
                                type="password" 
                                placeholder="Password"
                                label="Password"
                                className="input input-bordered w-full max-w-xs bg-transparent mt-1 mb-1 text-sm" 
                                name='password'
                                value={registerFormDetails.password}
                                required
                                />
                            <ValidatedInput 
                                type="password" 
                                placeholder="Confirm password" 
                                label="Confirm password"
                                className="input input-bordered w-full max-w-xs bg-transparent mt-1 mb-1 text-sm" 
                                name='confirmPassword'
                                value={registerFormDetails.confirmPassword}
                                required
                                />
                            <button className="btn mt-2 mb-2 bg-primary w-full max-w-xs text-white hover:bg-primary">{showLoader ? loader : "Register"}</button>
                            <p className="text-[#9ca3af] text-sm mt-2">Have an account ? <Link className="text-primary" to="/Login">Login</Link></p>
                        </form>
                    </div>
            </div>
            <Footer />
        </div>
    )
}

export default Register;