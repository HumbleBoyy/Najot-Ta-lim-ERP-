import React,{ useEffect } from "react"
import { instance } from "../hooks/instance"
import { MoreOutlined, QuestionOutlined } from "@ant-design/icons"
import { Link, useNavigate } from "react-router-dom"
import { Switch } from "antd"


export const getStudents = (groupId,  refresh,  setStudents, stackId) => {
  const navigate = useNavigate()

    useEffect(()=> {
        instance().get("/students", {
          params:{groupId, stackId}
        }).then(res => {
            setStudents(res.data.map((item, index) => {
              item.key = index + 1;
              item.name = item.name ? item.name : <QuestionOutlined />
              item.number = <Link to={`tel:${item.number}`} className="!text-black hover:!text-blue-600">{item.number}</Link>
              item.status = item.status ? "Faol" : "Faol emas"
              item.action = <button onClick={()=> navigate(`${item.id}`)} className='flex justify-center items-center text-white text-2xl w-[40px] rounded-md cursor-pointer h-[40px] bg-[#bc8e5b] '>
                <MoreOutlined className='rotate-90'/>
              </button>
              return item
            }))
        })
    },[refresh, groupId, stackId])
}