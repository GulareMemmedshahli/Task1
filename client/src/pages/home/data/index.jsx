import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"
const Data = () => {
    const[data,setData]=useState([])
    useEffect(()=>{
axios.get("http://localhost:8000/customer").then((reponse)=>{
    setData(reponse.data)
})
},[])

    const handleSearch=(value)=>{
        axios.get("http://localhost:8000/customer").then(response=>{
            let search=response.data.filter((data)=>data.name.includes(value))
            setData(search)
        })
    }
   const handleSort=()=>{
    axios.get("http://localhost:8000/customer").then(response=>{
        let sort=response.data.sort((a,b)=>(b.price-a.price))
        setData(sort)
    })
    }
const handleSorting=()=>{
    axios.get("http://localhost:8000/customer").then((reponse)=>{
    setData(reponse.data)
})
}
  return (
    <div className='data'>
        <div className='datatext'>
        <h1>Popular Courses</h1>
        </div>
        <div className='searchsort'>
        <input type="text" onChange={(e)=>handleSearch(e.target.value)} placeholder='Search...' />
        <button onClick={()=>handleSort()}>Sort by Price</button>
        <button onClick={()=>handleSorting()}>Sort by Price</button>

        </div>
       
       
        <div className='datacard'>
{data.map((element)=>{
    return(
        <div className='cards'>
            <div className='card1'>
                <Link to={`${element._id}`}> 
                <img src={element.img} alt="" />
                </Link>
           
<h2>{element.description}</h2>
<p>{element.title}</p>
            </div>

<div className='dataalt'>
    <img src={element.img2} alt="" />
    <div className='dataalt1'>
    <p>{element.name} Author</p>
    <div className='price'>
        <p>${element.price}</p>
    </div>
    </div>
    
</div>
</div>
    )
})}
        </div>
    </div>
  )
}

export default Data