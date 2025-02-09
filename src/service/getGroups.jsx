import React,{ useEffect } from "react"
import { instance } from "../hooks/instance"
import { MoreOutlined, QuestionOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"


export const getGroups = (stackId, refresh, setGroups, teacherId) => {
  const navigate = useNavigate()
    useEffect(()=> {
        instance().get(`/groups?stackId=${stackId}`, {
         params:[teacherId]
        }).then(res => {
            setGroups( res.data.map((item, index) => {
              item.key = index + 1
              item.name = item.name ? item.name : <QuestionOutlined />
              item.status = item.status ? "Faol" : "Faol emas"
              item.action = <button onClick={()=> navigate(`${item.id}`)} className='flex justify-center items-center text-white text-2xl w-[40px] rounded-md cursor-pointer h-[40px] bg-[#bc8e5b] '>
                <MoreOutlined className='rotate-90'/>
              </button>
              return item
            }))
        })
    },[refresh, teacherId])
}