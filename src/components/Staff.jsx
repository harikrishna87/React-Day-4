import React from 'react'
import Table from '../custom_components/Table'
import { StaffData } from '../Data/Staff'

const Staff = () => {
  return (
    <>
        <h1>Staff Table:</h1>
        <Table data={Object.keys(StaffData[0])} value={StaffData} />
    </>
  )
}

export default Staff