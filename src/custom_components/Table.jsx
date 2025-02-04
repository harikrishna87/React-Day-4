import React from 'react'

const Table = ({data, value}) => {
  return (
    <>
        <table border={1} cellSpacing={0} cellPadding={10}>
            <thead>
                <tr>
                    {data.map((val,ind) => {
                        return (
                            <th key={ind}>{val}</th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {value.map((row, ind) => {
                    return(
                        <tr key={ind}>
                            {data.map((val, ind) => {
                                return (
                                    <td key={ind}>{row[val]}</td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </>
  )
}

export default Table