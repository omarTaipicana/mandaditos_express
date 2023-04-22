import React from 'react';
import Slider from "../components/Slider"

const Home = () => {
    return (
        <div>
            <div className='home'>
                <div className='video-home-content'>
                <iframe src="https://drive.google.com/file/d/1-AYOebq_JutD8RzHCPoPKKg6NuBzlHP5/preview" width="100%" height="100%" allow="autoplay"></iframe>
                </div>
                <Slider ></Slider>
            </div>
        </div>
    );
};

export default Home;