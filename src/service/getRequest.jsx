import React, { useEffect, useState } from 'react'
import { instance } from '../hooks/instance'

const getRequest = (api, isObject) => {
    const [data, setData] = useState(isObject ? {} : [])

    useEffect(()=> {
        instance().get(api).then(res => setData(res.data))
    },[])
  return data
}

export default getRequest