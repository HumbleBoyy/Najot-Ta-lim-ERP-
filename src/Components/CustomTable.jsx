import { Table } from 'antd'
import React from 'react'

const CustomTable = ({columns, dataSource, isLoading}) => {
  return (
    <div>
      <Table loading={isLoading} dataSource={dataSource} columns={columns} pagination={{ pageSize: 5 }}/>
    </div>
  )
}

export default CustomTable
