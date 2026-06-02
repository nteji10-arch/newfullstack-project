import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [data,setData]=useState({})

  useEffect(()=>{
    axios.get('/api/')
      .then(res=>setData(res.data))
  },[])

  return (
    <>
      <h1>{data.message}</h1>
    </>
  )
}

export default App