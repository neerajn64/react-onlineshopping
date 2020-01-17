import React, { Component } from 'react';
import productDisplay from './productDisplay.css'
import ProductCard from '../ProductCard/productCard'
import items from '../../data/items'
import {connect} from 'react-redux'
import productId from '../../redux/actions/productIdAction'
import addToCart from '../../redux/actions/addToCartAction'
import {  withRouter} from 'react-router-dom'
import {ToastsContainer, ToastsStore , ToastsContainerPosition} from 'react-toasts';
 
class ProductDisplay extends Component {
    constructor(){
        super()
        this.state = {
           
        }
        this.handleTitle = this.handleTitle.bind(this)
        this.handleAddToCart = this.handleAddToCart.bind(this)
    }

   handleTitle(id){
       

       this.props.productId(id)
       this.props.history.push('/producttitle')

    }

    handleAddToCart(name){
        console.log(name)
        ToastsStore.success(name+  ' is added to Cart ')
        this.props.addToCart(name)
       
    }

    render() {
       
        return(
            <div className='container'>
                {items.map( i => (  
                    <ProductCard 
                        getId={this.handleTitle} 
                        key={i.id}
                        id={i.id}
                        img={i.img}
                        name={i.name}
                        description={i.description}
                        price={i.priceTotal}
                        addToCart={this.handleAddToCart}
                    />
                    ))
                }
                <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_CENTER} lightBackground/>
               
            </div>
        )
    }
}

const mapDispatchtoProps = (dispatch) => {
    return{
        productId : (id) => dispatch(productId(id)),
        addToCart : (name) => dispatch(addToCart(name))
    }

}

export default connect(null,mapDispatchtoProps) ( withRouter(ProductDisplay))