import React from 'react'
import './box.css'

const Box = () => {
  return(
    <div className="card">
      <div className="header">
      <img src={"https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500"} alt={"Avatar"}/>
      </div>
      <div className="container">
        <h5>product title</h5> 
        <p>10000</p> 
      </div>
    </div>
  
  )
}

export default Box;