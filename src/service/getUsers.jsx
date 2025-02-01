import React, { useEffect, useState } from 'react'
import { instance } from '../hooks/instance'

const getUsers = () => {
    const [data, setData] = useState([])

    useEffect(()=> {
        instance().get("/users").then(res => setData(res.data))
    },[])
  return data
}

export default getUsers
