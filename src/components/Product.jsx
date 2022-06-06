import React, {useState} from 'react'
import InfoProduct from './InfoProduct';
import '../style/common.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Product(props) {

  const [id, setId] = useState(props.product.id)


  return (
    <div className='col-4' style={{marginTop: '20px'}}>
        <InfoProduct title={"Product Name"} data={props.product.name}/>
        <InfoProduct title={"Product Price"} data={props.product.price}/>
        <button onClick={()=>{props.deleteProductFn(id)}}>X</button>
    </div>
  )
}
