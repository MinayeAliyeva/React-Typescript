import React from 'react'

//interface tanimlanmasi propslarda
type ComingData={
    name:string
}
const Home = ({name}:ComingData) => {
  return (
    <div>{name}</div>
  )
}

export default Home