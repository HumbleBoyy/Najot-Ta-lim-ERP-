import React, { useEffect, useState } from 'react'
import { instance } from '../hooks/instance'

const getUsers = (api) => {
    const [data, setData] = useState([])

    useEffect(()=> {
        instance().get(api).then(res => setData(res.data))
    },[])
  return data
}

export default getUsers