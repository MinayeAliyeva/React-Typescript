import React from 'react'

//interface tanimlanmasi propslarda
type ComingData={
    name:string
    number:number
    isBest:boolean
}
const Home = ({name,number,isBest}:ComingData) => {
    console.log(number);
  return (
    <div>{name} . Kurs sayisi :{number}  ... {isBest? <p>bhhhhh</p>: <p>ghhhh</p>}</div>
  )
}

export default Home