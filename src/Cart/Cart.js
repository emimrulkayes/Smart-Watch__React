import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashCan} from '@fortawesome/free-solid-svg-icons'

const Cart = ({ cart,randomProduct,chosseAgain,clearSpecific }) => {
      
    return (
        <div className='cart-container'>
            <h4 className='text-info d-flex justify-content-center align-items-center'>Shopping Cart</h4>
            {
                cart?.map(Product=><CartData data={Product} key={Product.id}clearSpecific={clearSpecific}></CartData>)
            }
            <div className='button-container'>
            <button className='cart-button px-2 bg-warning' onClick={() => { randomProduct() }}>Choose One</button>
            <button className='cart-button2 px-2 bg-danger' onClick={()=>{chosseAgain()}}>Chose Again</button>
           </div>
        </div>
    );
};
const CartData = ({ data,clearSpecific }) => {
    const {picture,name}=data
    return (
        <div>
            <div className='cart-info'>
            <img src={picture} className="img-fluid" alt="" />
                <h6 >{name}</h6>
                <FontAwesomeIcon className='text-black fs-4 ms-1 custom-icon' onClick={()=>{clearSpecific(data)}} icon={faTrashCan} />
            </div>
        </div>
        
    )
}

export default Cart;