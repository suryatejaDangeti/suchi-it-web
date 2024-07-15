
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { customerUpdate } from "../../modules/customer/customer";
import { customerLogin } from "../../services/customer";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const defaultFormDetails = {
        email: '',
        password: ''
    };
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [formDetails, setFormDetails] = useState(defaultFormDetails);

    const formOnchange = (formData) => {
        const { name, value} = formData.target;
        setFormDetails({...formDetails, [name]: value});
    }

    const formOnsubmit = async (event) => {
        event.preventDefault()
        if(formDetails.email !== "" && formDetails.password !== "") {
            const customerData = await customerLogin(formDetails);
            dispatch(customerUpdate(customerData));
            navigate('/services')
        }
    }

    return (
        <div className="flex items-center h-screen">
            <div className="bg-[#0154A5] w-1/2 max-[640px]:hidden h-screen flex flex-col justify-center items-center">
                <img className="w-1/2 h-1/2 mb-2 max-[680px]:w-1/2" src = "/loginbg.png" alt="logo" />
            </div>
            <div className="flex flex-col w-1/2  max-[680px]:w-full">
                <form 
                    onChange={formOnchange}
                    onSubmit={formOnsubmit}
                    className="flex flex-col justify-center items-center h-[90vh]"
                >
                   <img className="w-1/4 rounded-md" src="/suchiLogo.png" alt="logo" />
                    <label className="text-[#000] w-full max-w-xs text-left mt-1 mb-1 ml-2 text-sm font-bold">Email</label>
                    <input 
                        type="text" 
                        placeholder="Enter your email" 
                        className="input input-bordered w-full max-w-xs bg-transparent mt-1 mb-1 text-sm hover:outline-2" 
                        name='email'
                        value={formDetails.email}
                    />
                    <label className="text-[#000] w-full max-w-xs text-left mt-1 mb-1 ml-2 text-sm font-bold">Password</label>
                    <input 
                        type="password" 
                        placeholder="Enter your password" 
                        className="input input-bordered w-full max-w-xs bg-transparent mt-1 mb-1 text-sm" 
                        name='password'
                        value={formDetails.password}
                    />
                    <Link className="text-[#02BDF2] w-full max-w-xs text-right mt-1 mb-1 text-sm" to="">Forgot password</Link>
                    <button className="btn mt-2 mb-2 bg-[#02BDF2] w-full max-w-xs text-white hover:bg-[#02BDF2]">Login</button>
                    <p className="text-[#9ca3af] text-sm mt-2">Don't have an account yet? <Link className="text-[#02BDF2]" to="/register">sign up</Link></p>
                </form>
            </div> 
        </div>
    )
}

export default Login;