import React from 'react'
import {useState, useEffect} from 'react'

function ItemDetail({match}) {

    useEffect(()=>{
        fetchItem()
    },[]) // [] means only perform componentDidMount

    const[dataitem, setDataitem]=useState({
        images:'{}'
    });


    const fetchItem= async()=>{
        const rawdata= await fetch(
            `https://fortnite-public-api.theapinetwork.com/item/get?id=${match.params.id}`
            )
        // .then(data=>data.json())
        const data=await rawdata.json();
        console.log(data)
        setDataitem(data)
    }
    return(
        <div className="text-center">
            <h1>{dataitem.name}</h1>
            <img src={dataitem.images.transparent} alt={dataitem.name}/>
        </div>
    )
}

export default ItemDetail