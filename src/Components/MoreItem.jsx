import React from 'react'

const MoreItem = ({value,title}) => {
  return (
    <li className='flex flex-col border-b-2'>
       <span className='text-slate-400 text-[15px] py-1'>{title}</span>
       <strong className='text-[20px]'>{value}</strong>
    </li>
  )
}

export default MoreItem
