import React from 'react';
import NavBar from '../NavBar/NavBar';
import ProductDisplay from '../ProductDisplay/productDisplay';
import Footer from '../Footer/footer';


function Home () {
    return(
        <div>
            <NavBar/>
            <ProductDisplay/>
            <Footer/>
        </div>
    )
}

export default Home