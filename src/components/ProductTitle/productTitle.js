import React, { Component } from 'react';
import items from '../../data/items'
import {connect} from 'react-redux'
import productTitle from './productTitle.css'


 
const ProductTitle = ({Id}) =>{
    console.log("passed"+Id)
    console.log(items.id)
   
        const product = items.filter( i => i.id === Id )
    console.log(product)
       
        return(
            <div >

                <ul>
                    {product.map(item => {
                        return(
                            <div className='separate'>


                                <div className='product'>
                                    <img src={item.img} alt='Starship Hooper' height='700' width='500'/>
                                    <h1>{item.name}</h1>

                                    
                                </div>
                                <div className='view'>
                                    <h4 className='text'>Description: &nbsp;{item.description}</h4>
                                    <h4 className='text'>Features: &nbsp;{item.feature}</h4>
                                    <h4>Rating:{item.stars}</h4>
                                    <h4>Items in Stock:{item.inStock}</h4>
                                    <h4><p className='cost'>Price: {item.priceTotal}$</p></h4>
                                    <h4 className='cost' >EMI:{item.priceMonthly}</h4>
                                    <h4>SKU Number:{item.sku}</h4>
                                    <h4 className='text'> Details:{item.details}</h4>



                                </div>
                            </div>
                        )
                        }
                    )}
                </ul>
            </div>
        )
    }


const mapStateToProps = state => ({
  Id : state.login.id

})

export default connect (mapStateToProps,null) (ProductTitle)