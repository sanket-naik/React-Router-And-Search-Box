import React from 'react'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

function Shop() {

    useEffect(()=>{
        fetchItems()
    },[]) // [] means only perform componentDidMount

    const[dataitems, setDataitems]=useState([]);


    const fetchItems= async()=>{
        const rawdata= await fetch(
            'https://fortnite-public-api.theapinetwork.com/upcoming/get'
            )
        // .then(data=>data.json())
        const data=await rawdata.json();
        setDataitems(data.items)
    }
    return(
        <div className='text-center'>
            <h1 className="text-center m-5">Shop page</h1>
            {dataitems.map(item=>(
                <h5 key={item.itemid}>
                  <Link to={`/shop/${item.itemid}`}>{item.name}</Link>  
                </h5>
            ))}
        </div>
    )
}

export default Shop