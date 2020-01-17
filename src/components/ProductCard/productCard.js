import React from 'react';
import productCard from '../ProductCard/productCard.css'
import { Link } from 'react-router-dom'

const ProductCard = ( props) => {
    
        return(
            
                <div className='card'>
                    <p className='image' ><img src={props.img} height='300' width='200' /></p>
                   <h1 onClick={() =>props.getId (props.id)}>  {props.name} </h1>
                    <p className= 'price' >{props.price}$</p>
                    <p className='des'>{props.description}</p>
                    <p><button onClick={() => props.addToCart(props.name,props.id)}>Add To Cart</button></p>
                   
                </div>
                
         
        )
    }


export default ProductCard
