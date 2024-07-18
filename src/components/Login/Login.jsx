
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { customerUpdate } from "../../modules/customer/customer";
import { customerLogin } from "../../services/customer";
import { useNavigate } from "react-router-dom";
import LoginSideContent from "../LoginSideContent/LoginSideContent";
import ValidatedInput from "../ValidatedInput/ValidatedInput";
import Footer from "../Footer/Footer";

const Login = () => {

    const defaultFormDetails = {
        email: '',
        password: ''
    };
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [formDetails, setFormDetails] = useState(defaultFormDetails);
    const [buttonDisable, setButtonDisable] = useState(true);
    const [showLoader, setShowLoader] = useState(false)

    const loader = <span className="loading loading-spinner loading-md text-white"></span>

    const formOnchange = (formData) => {
        const { name, value} = formData.target;
        setFormDetails({...formDetails, [name]: value});
        if(formDetails.email && formDetails.password) {
            setButtonDisable(false)
        }
    }

    const formOnsubmit = async (event) => {
        event.preventDefault()
        setShowLoader(true)
        if(formDetails.email !== "" && formDetails.password !== "") {
            const customerData = await customerLogin(formDetails);
            if(customerData) {
                dispatch(customerUpdate(customerData));
                navigate('/services')
            }
            setShowLoader(false);
        }
    }

    return (
        <div className="h-scree
        ">
            <div className="flex items-center h-screen">
                <LoginSideContent />
                <div className="flex flex-col w-1/2  max-[680px]:w-full">
                    <form 
                        onChange={formOnchange}
                        onSubmit={formOnsubmit}
                        className="flex flex-col justify-center items-center h-[90vh]"
                    >
                    <img className="w-[70px] h-[70px] mb-5 rounded-md" src="/suchiLogo.png" alt="logo" />
                    <h1 className="text-4xl font-normal max-[640px]:text-2xl">Login</h1>
                            <hr className="w-[8%] border border-primary mt-2 mb-6 max-[640px]:w-[15%] max-[640px]:mb-3" />
                        <ValidatedInput 
                            type="email" 
                            placeholder="Email" 
                            className="input input-bordered w-full max-w-xs bg-transparent mt-1 mb-1 text-sm hover:outline-2" 
                            name='email'
                            label="Email"
                            value={formDetails.email}
                            required
                        />
                        <ValidatedInput 
                            name = "password"
                            type = "password"
                            label = "Password"
                            placeholder="password"
                            value={formDetails.password}
                            required
                        />
                        <Link className="text-primary w-full max-w-xs text-right mt-1 mb-1 text-sm" to="">Forgot password</Link>
                        <button className="btn mt-2 mb-2 bg-primary w-full max-w-xs text-white hover:bg-primary" disabled={buttonDisable}>{showLoader ? loader : "Login"}</button>
                        <p className="text-[#9ca3af] text-sm mt-2">Don't have an account yet? <Link className="text-primary" to="/register">sign up</Link></p>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login;