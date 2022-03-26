import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
const Product = ({product,clickHandelar}) => {
       const {picture,name,price} =product
    return (
        <div className='product-info'>
            <img className='img-fluid' src={picture} alt="" />
            <div className='px-2'>
                <h5>Watch Name: {name}</h5>
                <p>Price: {price}</p>
            </div>
            <button className='button'onClick={()=>{clickHandelar(product)}} >Add to Cart <FontAwesomeIcon className='text-black fs-5' icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;