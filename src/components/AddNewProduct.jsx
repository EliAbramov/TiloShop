import React, {useState} from 'react'
import '../style/common.css'

export default function AddNewProduct(props) {

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [nameStyle, setNameStyle] = useState({backgroundColor: 'white'})
    const [priceStyle, setPriceStyle] = useState({backgroundColor: 'white'})
    
    function handleChangeName(event) {
        let input = event.target.value;
        if(input.length >= 2 && isNaN(input)) {
            setName(input)
            setNameStyle({backgroundColor: '#3cc751'})
        } else {
            if(input != '') {
                setNameStyle({backgroundColor: 'pink'})
            } else {
                setNameStyle({backgroundColor: 'white'})
            }
            setName('')
        }
    }

    function handleChangePrice(event) {
        let input = event.target.value;
        if(input > 0 && !isNaN(input)) {
            setPrice(Number(input))
        } else {
            setPrice(0)
        }
    }

    let addProduct = () => {
        if(name != '' && price > 0) {
            props.addProductFn(name, price)
            // we can add function that clear the fields and the state
        } else {
            alert("Invalid info")
        }
    }

  return (
    <div>
        <input type="text" className='marg' style={nameStyle} onChange={handleChangeName} name="productName" id="productName" />
        <input type="text" className='marg'style={priceStyle} onChange={handleChangePrice} name="productPrice" id="productPrice" />
        <input type="button" onClick={addProduct} value="Add" />
    </div>
  )
}
