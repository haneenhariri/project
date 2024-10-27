import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Project from "./Project";
import './SliderCom.css'
import { useEffect, useState } from "react";
import axios from "axios";
const SliderCom = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://internships.focal-x.com/api/internfeedback');
          setData(response.data.data);
          console.log(data)
        } catch (error) {
          console.error('Error fetching data: ', error);
        }
      };
  
      fetchData();
    }, []);

    

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", }}
                onClick={onClick}
            />
        );
    }
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", }}
                onClick={onClick}
            />
        );
    }

    var settings = {
        className: "center",
        centerMode: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="px-10 Eq-INTERNslider">
            <Slider {...settings}>
                {data.map((e , index) => (
                    <Project img={e.image} />
                ))
                }
                {data.map((e , index) => (
                    <Project img={e.image} />
                ))
                }
                {data.map((e , index) => (
                    <Project img={e.image} />
                ))
                }
            </Slider>
        </div>
    )
}

export default SliderCom