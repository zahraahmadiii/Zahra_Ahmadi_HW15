import React from 'react'
import "./Counter.css"
import { useState } from 'react'

export default function Counter() {

  const [number,setNumber]=useState(0)

  return (
    <div className='container'>
        <button id='plus' onClick={()=>setNumber(number+1)}>
        <i className="fa fa-plus"></i>
          </button>
        <div id='num'>
        <p>{number}</p>
        </div>
        <button id='minus' onClick={()=>setNumber(number-1)}>
        <i className="fa fa-minus"></i>
        </button>
    </div>
  )
}
