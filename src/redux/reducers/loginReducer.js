import {SAVE_LOGIN, PRODUCT_ID, ADD_TO_CART} from '../actions/types'


const initialState = {
    email:'',
    password:'',
    id:'',
    name:''
}

export default function ( state = initialState , action){
    
    switch(action.type){
        case SAVE_LOGIN:
            console.log(action.payload)
            return{
                ...state,
                email: action.payload.email,
                password: action.payload.password
            }
        case PRODUCT_ID:
           console.log(action.payload)
            return{
                ...state,
                id: action.payload.id
            }
        case ADD_TO_CART:
            return{
                ...state,
                name:action.payload.name
            }
        



            
        break
        default:
            return state

    }
}