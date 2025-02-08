import toast from "react-hot-toast";
import { instance } from "../hooks/instance";


export const deleteRequest = (api, setDeleteLoading, toast, setDeleteModal, navigate ) => instance().delete(api).then(()=> {
      setTimeout(()=> {
        toast.success("O'chirlidi")
      },500)
    setTimeout(()=> {
    setDeleteLoading(false)
        setDeleteModal(false)
        navigate(-1)
   }, 1000)
})