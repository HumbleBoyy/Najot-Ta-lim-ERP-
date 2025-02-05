import toast from "react-hot-toast"
import { instance } from "../hooks/instance"

export const  Create = (data, api, setIsLoading, navigate) => {
   instance().post(api, data).then(() => {
      setTimeout(()=> {
         setIsLoading(false)
         toast.success("Ro'yxatga qo'shildi")
         navigate(-1)
       },1000)
   })
}