import React, { useEffect, useState } from 'react'
import "./HostStyle.css"
import HostCard from './HostCard'
import n1 from "./../../assets/Ellipse1.png"
import n2 from "./../../assets/Ellipse2.png"
import n3 from "./../../assets/Ellipse13.png"
import n4 from "./../../assets/Ellipse3.png"
import n5 from "./../../assets/Ellipse10.png"
import n6 from "./../../assets/Ellipse9.png"
import n8 from "./../../assets/Ellipse8.png"
import n9 from "./../../assets/Ellipse12.png"
import n10 from "./../../assets/Ellipse4.png"
import n11 from "./../../assets/Ellipse7.png"
import n12 from "./../../assets/Ellipse11.png"
import axios from 'axios'

const Hosting = () => {

    const [data, setData] = useState([]);

  useEffect( () => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://internships.focal-x.com/api/host');
        setData(response.data.data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

    const HostingList = [{
        id: 0,
        color: "#FF8500",
        isAbsolute: true,
        img: n2,
    }, {
        id: 1,
        color: "#A513FF",
        isAbsolute: false,

    }, {
        id: 2,
        color: "#71AA27",
        isAbsolute: false,

    }, {
        id: 3,
        color: "#1D5EDD",
        isAbsolute: true,
        img: n12,
    }
    ]

    return (
        <section className='bgBlack'>

            <div className="bubbleImgs">
                <img src={n1} alt="" className='img1H' />
                <img src={n3} alt="" className='img3H' />
                <img src={n4} alt="" className='img4H' />
                <img src={n5} alt="" className='img5H' />
                <img src={n6} alt="" className='img6H' />
                <img src={n8} alt="" className='img8h' />
                <img src={n9} alt="" className='img9h' />
                <img src={n10} alt="" className='img10H' />
                <img src={n11} alt="" className='img11H' />
            </div>
            <h1 className='hostHeadline'>Hosting Pricing</h1>
            <div className="HostingCard">
                {data.map((e, index) => (

                    <HostCard key={index} index={index} id={e.id} title={e.title} desc={e.description} color={HostingList[index].color} btn={e.action} isAbsolute={e.isAbsolute} img={e.img} />
                ))

                }

            </div>
            <div className="hostFooter">
                <p className='footerHosting'>Support all the features of personal websites, corporate sites, news and commercial sites with 24 hours technical support. </p>
                <p className='footerHf'>Go Online, choose your plan and Contact us on: <span className='conHost'> contact@focal-x.com</span> <a href="">|</a> <span className='conHost'>+963 953 666 056</span></p>
            </div>
        </section>
    )
}

export default Hosting
