import React from 'react'
import { useState } from 'react'
export default function ImageSlider({slides}) {
    const[currentIndex,setCurrentIndex] = useState(0);
    const goToPrevious = () => {
        const isFirstSlide = currentIndex===0
        const newIndex = isFirstSlide ? slides.length-1 : currentIndex-1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex===slides.length-1;
        const newIndex = isLastSlide ? 0 : currentIndex+1;
        setCurrentIndex(newIndex);
    }
    const goToSlide = (slideIndex) => {
        const newIndex = slideIndex;
        setCurrentIndex(newIndex);
    }
    console.log(slides[currentIndex].src);
    return (
        <div className='hero'>
            <div class="card text-dark bg-dark border-0">
                <div className='left-angel-arrow-pointer' onClick={goToPrevious}>&#10096;</div>
                <div className='right-angel-arrow-pointer' onClick={goToNext}>&#10097;</div>
                <img src={slides[currentIndex].src} class="card-img" alt="background" height="550px" />
                <div class="card-img-overlay d-flex flex-column justify-content-center align-items-center">
                    <div className="container">
                    <h5 class="card-title display-3 fw-bolder mb-0">NEW SEASON</h5>
                    <p class="card-text lead fs-4">CHECK OUT ALL THE TRENDS</p>
                    </div>
                    
                </div>
            </div>
            <div className='dots-list'>
                {slides.map((slide,slideIndex) => (
                    <div key={slideIndex} className='dots' onClick={()=> goToSlide(slideIndex)}>	&#9679;	</div>
                ))
                }
            </div>
        </div>
    )
}
