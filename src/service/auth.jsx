import { instance } from "../hooks/instance"

export const  Create = (data, api, setIsLoading, navigate, toast) => {
   instance().post(api, data).then(() => {
      setTimeout(()=> {
         toast.success("Ro'yxatga qo'shildi")
      },500)
      setTimeout(()=> {
         setIsLoading(false)
         navigate(-1)
       },1000)
   })
}

export const  Edit = (data, api, setIsLoading, navigate, toast) => {
   instance().put(api, data).then(() => {
      setTimeout(()=> {
         toast.success("Tahrirlandi")
      },500)
      setTimeout(()=> {
         setIsLoading(false)
         navigate(-1)
       },1000)
   })
}