import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className="card_conatiner">
      {props.title}
      <div style={{fontSize:"15px",color:"gray", display:"flex",justifyContent:"center"}}>{props.subTitle} </div>
      
    </div>
  )
}

export default Card
