import React from 'react';
import ImageSlider from './ImageSlider';
import Products from './Products';

const Home = () => {
    const slides = [
        {src: '../assets/E-commerce-Bg.jfif'},
        {src: '/assets/E-commerce-Bg2.jpg'},
        {src: '/assets/E-commerce-Bg5.jfif'},
    ]
    return (
        
        <>
            <ImageSlider slides={slides} />
            <Products />
        </>
    );
}
export default Home;