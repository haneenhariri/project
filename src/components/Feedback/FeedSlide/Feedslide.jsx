import { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import './Feedslide.css'

export default function CenterMode2() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
    };

    const settings1 = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "-250px",
        slidesToShow: 5,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        dots: false,
        responsive: [
            {
                breakpoint: 1360,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: "-70px",
                }
            }
        ]
    };

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://internships.focal-x.com/api/internfeedback');
                setData(response.data.data);
                console.log(data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="FB-slider">
                <Slider {...settings1}>
                    {
                        data.map((e, index) => (
                            <div className="centermodeimg">
                                <img src={e.image} alt="FeedBack" />
                            </div>
                        ))
                    }
                    {
                        data.map((e, index) => (
                            <div className="centermodeimg">
                                <img src={e.image} alt="FeedBack" />
                            </div>
                        ))
                    }
                    {
                        data.map((e, index) => (
                            <div className="centermodeimg">
                                <img src={e.image} alt="FeedBack" />
                            </div>
                        ))
                    }
                    {
                        data.map((e, index) => (
                            <div className="centermodeimg">
                                <img src={e.image} alt="FeedBack" />
                            </div>
                        ))
                    }
                    {
                        data.map((e, index) => (
                            <div className="centermodeimg">
                                <img src={e.image} alt="FeedBack" />
                            </div>
                        ))
                    }
                    {
                        data.map((e, index) => (
                            <div className="centermodeimg">
                                <img src={e.image} alt="FeedBack" />
                            </div>
                        ))
                    }
                    {
                        data.map((e, index) => (
                            <div className="centermodeimg">
                                <img src={e.image} alt="FeedBack" />
                            </div>
                        ))
                    }
                    {
                        data.map((e, index) => (
                            <div className="centermodeimg">
                                <img src={e.image} alt="FeedBack" />
                            </div>
                        ))
                    }
                </Slider>
            </div>
            <div className="slider-container fdsdfdsd12edsawed">
                <Slider {...settings}>
                    {
                        data.map((e, index) => (
                            <div className="centermodeimg">
                                <img src={e.image} alt="FeedBack" />
                            </div>
                        ))
                    }
                    {
                        data.map((e, index) => (
                            <div className="centermodeimg">
                                <img src={e.image} alt="FeedBack" />
                            </div>
                        ))
                    }
                    {
                        data.map((e, index) => (
                            <div className="centermodeimg">
                                <img src={e.image} alt="FeedBack" />
                            </div>
                        ))
                    }
                    {
                        data.map((e, index) => (
                            <div className="centermodeimg">
                                <img src={e.image} alt="FeedBack" />
                            </div>
                        ))
                    }
                    {
                        data.map((e, index) => (
                            <div className="centermodeimg">
                                <img src={e.image} alt="FeedBack" />
                            </div>
                        ))
                    }
                    {
                        data.map((e, index) => (
                            <div className="centermodeimg">
                                <img src={e.image} alt="FeedBack" />
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </>
    );
}

