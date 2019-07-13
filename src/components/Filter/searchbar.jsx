import React from 'react'

function SearchBar(props) {

    return(
        <div>
           <span>Input: </span> <input type="text" placeholder="Enter to search" value={props.value} onChange={props.onChange}/>
        </div>
    )
    
}

export default SearchBar