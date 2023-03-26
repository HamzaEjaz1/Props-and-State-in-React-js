import React from 'react'

const Card = (props) => {
  return (
<>
<div class="card">
  <div class="container">
    <img src={props.src} width="100%" ></img>
    <h4><b>{props.title}</b></h4> 
    <p>{props.post}</p> 
  </div>
</div>

</>
  )
}

export default Card