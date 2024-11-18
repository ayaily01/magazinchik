import React, {useState} from 'react'
import { FaOpencart } from "react-icons/fa";
import Order from './Order'


const showOrders = (props) => {
    return (
        <div>
            {props.orders.map(el => (
               <Order key = {el.id} item = {el} onDelete = {props.onDelete} onCount = {props.onCount}/> 
            ))}
        </div>
    )
}

const showNothing = () => {
    return (
        <div>
            <h2>Empty box</h2>
        </div>
    )
}


export default function Header(props) {

    let [cartOpen,setCartOpen] = useState(false)
  
    return(
        <header >
            <div className = "logo"> Shop
            <iframe src="https://lottie.host/embed/55822f22-4f51-4311-947d-3f3754757aeb/zD3KnT22zf.json"></iframe>
            </div>
            <ul className = "nav">  
            <li> <a href ="https://www.google.kz/?hl=ru"> About us</a></li>
            <li><a href ="https://www.youtube.com/watch?v=MggAuUUbbJ4">Streamlit</a> </li>
            <li><a href ="https://www.arizona.edu">Arizona</a></li>
            <li className = {`shopcart ${cartOpen && 'active'}`}>< FaOpencart onClick = {() => setCartOpen(cartOpen=!cartOpen)}/></li>
            </ul>
             
                {cartOpen && (  
                    <div className="basket">
                        {props.orders.length >0 ? showOrders(props) :showNothing()}
                        
                        
                    </div>
                )}
        
            <div className = "presentation"></div>
        </header>
        
        
    )

}