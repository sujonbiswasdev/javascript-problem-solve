
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Complex from './components/jsonfile/Complex'

function App() {
  const [data,setdata]= useState([])
  useEffect(()=>{
    fetch('/data/complex1.json').then((res)=>{
      return res.json()
    }).then((res)=>setdata(res))
  })
  return (
    <>
     {/* <h1>sujon biswas</h1> */}
     {/* {data.map((item,index)=>{
      return <div key={index}>
        <li>{item.name}</li>
        <li>{item.email}</li>
        <li>{item.address.city}</li>
        <li>{item.address.country}</li>
        <li>{item.title}</li>
        <div>
          {item.address.postalCode}
        </div>
        <div>
          {item.wears.map((item,index)=>{
            return <div key={index}>
              {item}
            </div>
          })}
        </div>
      </div>
     })} */}
     <Complex/>

    </>
  )
}

export default App
