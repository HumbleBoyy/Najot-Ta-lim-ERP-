import { Select } from 'antd'
import React from 'react'
import getRequest from '../service/getRequest'

const FilterStack = ({setStackId, stackId}) => {
    const stack = getRequest("/stack")
    const options = stack.map(item => {
        const data = {
            value:item.id,
            label:item.name
        }
        return data
    })
  return (
    <>
        <Select 
            showSearch
            value={stackId}
            onChange={(value) => setStackId(value)}
            allowClear
            className='w-[350px]'
            size='large'
            placeholder="Kasbiga ko'ra qidirish"
            optionFilterProp='label'
            options={options}
        />
    </>
  )
}

export default FilterStack
