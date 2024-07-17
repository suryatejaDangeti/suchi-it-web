import axios from "axios"
import { toast } from "react-toastify";
import { notification } from "../notification/notification";
import { store } from "../store";


export const customerLogin = async(customerDetails) => {
    const formData = new FormData();
    formData.append('email', customerDetails.email);
    formData.append('password', customerDetails.password);
    try {
        const response = await axios.post('https://suchiit.com/app_apis/auth/login.php', formData)
        return response.data
    } catch(error) {
        toast.error(error?.response?.data?.message);
        notification(error.response.data)
    }
    
}

export const registerCustomer = async(customerDetails) => {
    const formData = new FormData();
        formData.append('firstName', customerDetails.firstName);
        formData.append('lastName', customerDetails.lastName);
        formData.append('email', customerDetails.email);
        formData.append('mobile', customerDetails.mobile);
        formData.append('password', customerDetails.password);
    try {
        const response = await axios.post('https://suchiit.com/app_apis/auth/register.php', formData)
        return response
    } catch(error) {
        console.log(error?.response?.data?.error)
        // debugger
        toast.error(error?.response?.data?.error);
        notification(error.response.data)
    }
    
}

export const customerServices = async() => {
    const authToken = store.getState().customer?.customer?.access_token
    console.log('auth', authToken);
    try {
        const authHeaders = {
            Authorization: authToken
        }
        const response = await axios.get('https://suchiit.com/app_apis/services/all_services.php', { headers: authHeaders });
        console.log('response', response);
        return response
    } catch(error) {
        toast.error(error?.response?.data?.message);
    }
    
}