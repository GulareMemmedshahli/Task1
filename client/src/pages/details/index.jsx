import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate, useParams } from 'react-router-dom'
import "./index.scss"
const Details = () => {
    const {_id}=useParams()
    const navigate=useNavigate()
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get(`http://localhost:8000/customer/${_id}`).then((response)=>{
            setData(response.data)
        })
    })
    const delet=()=>{
        axios.delete(`http://localhost:8000/customer/${_id}`)
        navigate("/")
    }
  return (
    <div className='details'>
           <Helmet>
                <meta charSet="utf-8" />
                <title> Details</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
<img src={data.img} alt="" />
<div>
    <p> {data.description}</p>
    <p>{data.title}</p>
    <p>Price : {data.price}</p>
    <button onClick={()=>delet()}>Delete</button>
</div>
    </div>
  )
}

export default Details