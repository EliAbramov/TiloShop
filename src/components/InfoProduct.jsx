import React from 'react'
import '../style/common.css'

export default function InfoProduct(props) {
  return (
    <div>
        <div><span className="bold" style={{color: 'red', fontFamily: "cursive"}}>{props.title}:</span> {props.data}</div>
    </div>
  )
}