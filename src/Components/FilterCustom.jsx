import { Select } from 'antd'
import React from 'react'
import getRequest from '../service/getRequest'

const FilterCustom = ({filterId, setFilterId, extraClass, API, placeholder, mode, setFilterName}) => {
    const data = getRequest(API)
    const options = data.map(item => {
        const data = {
            value:item.id,
            label:item.name
        }
        return data
    })

    const handleSelect = (value, data) => {
        setFilterId(value)
        if(setFilterName){
            if(mode === "multiple"){
                setFilterName(data.map(item => item.label))
            }else{
                setFilterName(data.label)
            }
        }
    }

  return (
    <>
        <Select 
            mode={mode}
            showSearch
            value={filterId}
            onChange={handleSelect}
            allowClear
            className={`w-[350px] ${extraClass}`}
            size='large'
            placeholder={placeholder}
            optionFilterProp='label'
            options={options}
        />
    </>
  )
}

export default FilterCustom
