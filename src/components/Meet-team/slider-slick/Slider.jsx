import React, { useState } from "react";
import Slider from "react-slick";
import Arrow from "./../Training/Arrow1.svg";
import './Slider.css';
import x from './../Training/greenPoints.png';
import xx from './../../../assets/image/xx.png';
import f1 from './../../../assets/image/Behance1.png';
import f2 from './../../../assets/image/Github1.png';
import f3 from './../../../assets/image/LinkedIn1.png';
import f4 from './../../../assets/image/Dribble1.png';
import f5 from './../../../assets/image/Facebook1.png';
import f6 from './../../../assets/image/X1.png';
import { Link } from "react-router-dom";

export default function CenterMode({ data }) {
  const [index, setIndex] = useState(0);
  const [indexDone, setIndexDone] = useState(false);

  const handleInfo = (index) => {
    setIndexDone(!indexDone);
    setIndex(index);
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "-250px",
    slidesToShow: 5,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1360,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  };

  const socialIcons = [
    { name: 'behance', icon: f1 },
    { name: 'github', icon: f2 },
    { name: 'linkedin', icon: f3 },
    { name: 'site', icon: f4 },
    { name: 'facebook', icon: f5 },
    { name: 'twitter', icon: f6 },
  ];

  return (
    <>
      <div className="MaSlider">
        <Slider {...settings}>
          {data.map((e, idx) => (
            <div className="MaCard" key={idx}>
              <div className="M-backGreen"></div>
              <div className="MTrainingImg">
                <img src={e.image} alt="Training-IMG" />
              </div>
              <h2>{e.name}</h2>
              <p>{e.specialization}</p>
              <a className="MShowMore" onClick={() => handleInfo(idx)}>
                <span>Show More</span>
                <img src={Arrow} alt="Arrow" />
              </a>
            </div>
          ))}
          {data.map((e, idx) => (
            <div className="MaCard" key={idx}>
              <div className="M-backGreen"></div>
              <div className="MTrainingImg">
                <img src={e.image} alt="Training-IMG" />
              </div>
              <h2>{e.name}</h2>
              <p>{e.specialization}</p>
              <a className="MShowMore" onClick={() => handleInfo(idx)}>
                <span>Show More</span>
                <img src={Arrow} alt="Arrow" />
              </a>
            </div>
          ))}
          {data.map((e, idx) => (
            <div className="MaCard" key={idx}>
              <div className="M-backGreen"></div>
              <div className="MTrainingImg">
                <img src={e.image} alt="Training-IMG" />
              </div>
              <h2>{e.name}</h2>
              <p>{e.specialization}</p>
              <a className="MShowMore" onClick={() => handleInfo(idx)}>
                <span>Show More</span>
                <img src={Arrow} alt="Arrow" />
              </a>
            </div>
          ))}
          {data.map((e, idx) => (
            <div className="MaCard" key={idx}>
              <div className="M-backGreen"></div>
              <div className="MTrainingImg">
                <img src={e.image} alt="Training-IMG" />
              </div>
              <h2>{e.name}</h2>
              <p>{e.specialization}</p>
              <a className="MShowMore" onClick={() => handleInfo(idx)}>
                <span>Show More</span>
                <img src={Arrow} alt="Arrow" />
              </a>
            </div>
          ))}
          {data.map((e, idx) => (
            <div className="MaCard" key={idx}>
              <div className="M-backGreen"></div>
              <div className="MTrainingImg">
                <img src={e.image} alt="Training-IMG" />
              </div>
              <h2>{e.name}</h2>
              <p>{e.specialization}</p>
              <a className="MShowMore" onClick={() => handleInfo(idx)}>
                <span>Show More</span>
                <img src={Arrow} alt="Arrow" />
              </a>
            </div>
          ))}
          {data.map((e, idx) => (
            <div className="MaCard" key={idx}>
              <div className="M-backGreen"></div>
              <div className="MTrainingImg">
                <img src={e.image} alt="Training-IMG" />
              </div>
              <h2>{e.name}</h2>
              <p>{e.specialization}</p>
              <a className="MShowMore" onClick={() => handleInfo(idx)}>
                <span>Show More</span>
                <img src={Arrow} alt="Arrow" />
              </a>
            </div>
          ))}
          {data.map((e, idx) => (
            <div className="MaCard" key={idx}>
              <div className="M-backGreen"></div>
              <div className="MTrainingImg">
                <img src={e.image} alt="Training-IMG" />
              </div>
              <h2>{e.name}</h2>
              <p>{e.specialization}</p>
              <a className="MShowMore" onClick={() => handleInfo(idx)}>
                <span>Show More</span>
                <img src={Arrow} alt="Arrow" />
              </a>
            </div>
          ))}
          {data.map((e, idx) => (
            <div className="MaCard" key={idx}>
              <div className="M-backGreen"></div>
              <div className="MTrainingImg">
                <img src={e.image} alt="Training-IMG" />
              </div>
              <h2>{e.name}</h2>
              <p>{e.specialization}</p>
              <a className="MShowMore" onClick={() => handleInfo(idx)}>
                <span>Show More</span>
                <img src={Arrow} alt="Arrow" />
              </a>
            </div>
          ))}
        </Slider>
        {indexDone && (
          <div className='pop-up-trenar'>
            <div className="for-trinar">
              <div className="For-T-Photos">
                <img className="imgx" src={x} alt="" />
                <img className="imgx2" src={data[index].image} alt="" />
              </div>
              <div className="For-T-Descrip">
                <div>
                  <h3>{data[index].name}</h3>
                  <span>{data[index].specialization}</span>
                </div>
                <div>
                  <div dangerouslySetInnerHTML={{ __html: data[index].description }} />
                </div>
              </div>
            </div>
            <span className="cloooss" onClick={handleInfo}>
              <img src={xx} alt="" />
            </span>
            <div className="sosheal">
              {socialIcons.map((icon, idx) => (
                data[index][icon.name] && (
                  <a key={idx} href={data[index][icon.name]} target="_blank" rel="noopener noreferrer">
                    <img src={icon.icon} alt={icon.name} />
                  </a>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
