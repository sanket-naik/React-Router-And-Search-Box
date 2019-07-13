import React, {useState} from 'react'
import SearchBar from './searchbar'
import StudentList from './studentslist'

function Main() {

    const [initialString, setinitialString] = useState('')

    const [students, setStudents] = useState([
        {name:'Sanket', age:23},
        {name:'abhin', age:22},
        {name:'Kiran', age:23},
        {name:'divkr', age:26},
        {name:'vinay', age:25},
        {name:'sankii', age:25},
    ]
    )

    let filterDogs=students.filter((data)=>{
        return(
            data.name.toLowerCase().includes(initialString.toLowerCase())
        )
    })

    const handleChange=(e)=>{
        setinitialString(e.target.value)
        console.log(initialString)
    }


    return(
        <div className="border m-2">
            <h5>Main.jsx</h5>
            <SearchBar onChange={handleChange} value={initialString}/>
            <StudentList studentList={filterDogs}/>       
        </div>
    )
    
}

export default Main