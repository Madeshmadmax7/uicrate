import React from 'react';
import Gallery from './Gallery';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
function Home(){
    return(
        <div>
            <Navbar/>
            <Header/>
            <Gallery/>
            <Footer/>
        </div>
    );
}
export default Home;