import React from 'react'
import './Slider.css'
import Carousel from 'nuka-carousel';
import Slides from './Slides/Slides'

const Slider = () => {
    return (
        <div className='carousel-container'>
            <div className='Carousel-Title'>
                <h2>TOP 3</h2>
                <h3>PROYECTS</h3>
            </div>
            <Carousel
                defaultControlsConfig={{
                    nextButtonClassName: 'Button__carousel-next',                    
                    nextButtonText: '>',
                    prevButtonClassName: 'Button__carousel-prev',
                    prevButtonText: '<',
                    pagingDotsStyle: {
                        fill: '#0000',
                        margin:'5px'
                    }
                }}
                className='Slider-list'
                wrapAround={true}
                slidesToShow={2}
                zoomScale={.5}
                slides={Slides}
            >
                {Slides} 
            </Carousel>
        </div >

    )
}

export default Slider