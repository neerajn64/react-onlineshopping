import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import {connect} from 'react-redux'
import saveLogin from '../../redux/actions/loginActions'



class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:''
        }
      
    }

    componentDidMount(){
        console.log('Mounted')
    }

   

    // handleCLick = () => {
    //     console.log('Clicked')
        
    // }
    onSubmit = (e) => {
        e.preventDefault()
        let { email , password} = this.state
        console.log(email)
        this.props.saveLogin(email , password)
        this.setState({
            name:'',
            password:''
        })
        this.props.history.push('/')


    }




    render(){
        let { email , password } = this.state

        return(
            <React.Fragment>
                <form name="LoginForm" onSubmit={this.onSubmit}>
                    <h1>Login</h1>
                
                    <input 
                        type="email"
                        name='email'
                        placeholder="Email" 
                        value={email}
                        onChange={e => this.setState({email: e.target.value})}
                        />
                    <input 
                        type="password"
                        name='password'
                        placeholder="Password" 
                        value={password}
                        onChange={e => this.setState({password: e.target.value})}
                        />
                        <input type='submit' value='Login'/>
                </form>                                            
                    
                
            </React.Fragment>

          
                
           
        )
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        saveLogin : (email , password) => dispatch (saveLogin(email , password))
    }
}




export default connect ( null,mapDispatchToProps)(Login)