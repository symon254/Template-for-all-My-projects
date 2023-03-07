import React, { useEffect, useState } from 'react'
import axiosClient from '../../Utils/api'
import { Table } from 'react-bootstrap'

const Books = () => {
  const [data, setData] = useState({})
  const [page, setPage] = useState(1)
   useEffect(()=>{
    const fetchData= async () =>{
      try {
        const res = await axiosClient.get("posts",{params: {page, limit:5}})
     
        console.log(res)
      } catch (error) {
        console.log(error)
      }    }
    fetchData()
  },[])
  
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>no</th>
            <th>id</th>
            <th>title</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
        
           
        </tbody>
      </Table>
    </div>
  )
}

export default Books
