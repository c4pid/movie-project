import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

const Home = () => {
    const images = [
        "https://movieapi.cyberlearn.vn/hinhanh/ban-tay-diet-quy.png",
        "https://movieapi.cyberlearn.vn/hinhanh/lat-mat-48h.png",
        "http://movieapi.cyberlearn.vn/hinhanh/cuoc-chien-sinh-tu.png",
    ];

    return (
        <div className="mv-home-container">
            <Slide>
                <img src={images[0]} />
                <img src={images[1]} />
                <img src={images[2]} />
            </Slide>
        </div>
    );
};

export default Home;
