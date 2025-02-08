import React,{ useEffect } from "react"
import { instance } from "../hooks/instance"
import { MoreOutlined, QuestionOutlined } from "@ant-design/icons"
import { Link, useNavigate } from "react-router-dom"


export const getTeachers = (stackId, refresh, setTeachers) => {
  const navigate = useNavigate()
    useEffect(()=> {
        instance().get("/teachers", {
          params:{stackId}
        }).then(res => {
            setTeachers( res.data.map((item, index) => {
              item.key = index + 1
              item.name = item.name ? item.name : <QuestionOutlined />
              item.phone = <Link to={`tel:${item.phone}`} className="!text-black hover:!text-blue-600">{item.phone}</Link>
              item.stack = item.stack ? item.stack : <QuestionOutlined />
              item.action = <button onClick={()=> navigate(`${item.id}`)} className='flex justify-center items-center text-white text-2xl w-[40px] rounded-md cursor-pointer h-[40px] bg-[#bc8e5b] '>
                <MoreOutlined className='rotate-90'/>
              </button>
              return item
            }))
        })
    },[refresh, stackId])
}