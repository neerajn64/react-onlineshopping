import React  from 'react'
import styles from './styles.css'
import { placeholder } from '@babel/types'
import { IoIosCart } from 'react-icons/io'
import Login from '../Login/Login'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import logo from '../../data/image12.jpg'



const NavBar = ({name}) => {
    

console.log(name)

return(
    <div>
                
                <ul className='nav'>
                    <li  className='logo'> <img src={logo} width={80} height={70} mode='fit'/> </li>
                    <li className='ser'><input className='input' placeholder='Search'></input></li>
                    <li><Link to='/login'>{name === '' ? "Login" : name}</Link></li>
                    <li className='cart'><IoIosCart fontSize={30} margin-right ={10}/></li>
                </ul>
            </div>
        )
        
    }
    
    const mapStateToProps =  state => ({
        name: state.login.email,
        password:state.login.password 
    })

    
    



export default connect(mapStateToProps,null) (NavBar);