import { toast } from "react-toastify"


export const notificationError = (error) => {
    toast.error(error)
}