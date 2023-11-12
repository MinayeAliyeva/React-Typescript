import React from 'react'
import { uid } from 'uid';

type list={
    array:{
        firsName: string;
        lastName: string;
    }[]
}
const InstructorList = ({array}:list) => {
    console.log(array);
    
  return (
    <div>{array.map((obj)=>{
       return <p key={uid()} >{obj.firsName}</p>
    })}</div>
  )
}

export default InstructorList