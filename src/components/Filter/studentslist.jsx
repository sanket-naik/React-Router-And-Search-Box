import React from 'react'

function StudentList({studentList}) {
    return(
        <div className="border m-2">
            <ol>
                {studentList.map((student, index)=>(
                    <li key={index}>{student.name} {student.age}</li>
                ))}
            </ol>
        </div>
    )
}

export default StudentList