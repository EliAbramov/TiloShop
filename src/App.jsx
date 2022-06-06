import {useState} from 'react';
import Header from './components/Header';
import Product from './components/Product';
import AddNewProduct from './components/AddNewProduct';
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/App.css';

// get data from server
const list = [
  { id: 1, name: "Snikers", price: 15 },
  { id: 2, name: "Kinder", price: 8 },
  { id: 3, name: "Teami", price: 3 },
  { id: 4, name: "Twix", price: 13 }
]


// app function is "rfc" - react function component
function App() {
  
  // Counter 
  const [counter, setCounter] = useState(0)

  // On air button
  const [onAir, setOnAir] = useState(false)
  const [onAirStyle, setOnAirStyle] = useState({
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "70%",
    padding: "15px"
  })

  const changeBackground = () => {
    setOnAirStyle({
      backgroundColor: onAir ? "white" : "tomato",
      border: onAirStyle.border,
      borderRadius: onAirStyle.borderRadius,
      padding: onAirStyle.padding
    })
    setOnAir(!onAir)
  }

  // Add new product
  const [products, setProducts] = useState(list)
  const [idCounter, setIdCounter] = useState(list.length + 1)

  const addProductFn = (n, p) => {
    setProducts([...products, { id: idCounter, name: n, price: p }])
    setIdCounter()
  }

  const deleteProductFn = id => setProducts(products.filter(p => p.id != id))

  
  return (
    <div className="App">

      <Header title={"Hooks"} />
      <button onClick={()=>setCounter(counter+1)}>+</button>
      {counter}
      <button onClick={()=>setCounter(counter-1)}>-</button>
      <br /><br />
      
      <button style={onAirStyle} onClick={()=>{changeBackground()}}>ON AIR</button>
      <br /><br />



      <Header title={"Shop Kilo"} />
      <AddNewProduct addProductFn={addProductFn}/>

      <div className='row'>
        {products.map(p => {
          return <Product product={p} deleteProductFn={deleteProductFn}/>
        })}
      </div> 

    </div>
  );
}

export default App;
