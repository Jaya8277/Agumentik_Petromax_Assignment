import React, { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react'

const AdminPanel = () => {
    const[data,setData] = useState({})

    useEffect(() => {
        getData()
    }, [])
    

    const getData=()=>{
        axios.get("http://localhost:8080/content").then((res)=>{
            setData(res.data)
            console.log(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div>AdminPanel</div>
  )
}

export default AdminPanel