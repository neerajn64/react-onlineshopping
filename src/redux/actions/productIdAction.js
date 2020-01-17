import {PRODUCT_ID} from './types'

export default function productID (id) {
  
    return (
        {
            type: PRODUCT_ID,
            payload: {id}
        }
    )
}