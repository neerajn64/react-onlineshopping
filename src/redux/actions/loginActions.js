import {SAVE_LOGIN} from '../actions/types'



export default function savelogin (email,password) {
    console.log(email,password);
    return (
        {
            type: SAVE_LOGIN,
            payload: {email,password}
        }
    )
}


// export const savelogin = (email,password) => dispatch => {
//     console.log(email,password)
//     return dispatch({
//         type: SAVE_LOGIN,
//         payload: {email,password}
//     })

// }