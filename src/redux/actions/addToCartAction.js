import {ADD_TO_CART} from './types'

export default function addToCart (name) {
    
  
    return (
        {
            type: ADD_TO_CART,
            payload: {name}
        }
    )
}