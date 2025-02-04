import React from 'react'
import { StudentData } from '../Data/Student'
import Table from '../custom_components/Table'

const Student = () => {
  return (
    <>
        <h1>Student Table:</h1>
        <Table data={Object.keys(StudentData[0])} value={StudentData}/>
    </>
  )
}

export default Student