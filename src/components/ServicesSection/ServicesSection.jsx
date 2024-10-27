import React, { useEffect, useState } from 'react'
import "./ServicesStyle.css"
import { ServicesCard } from '../ServicesCard.jsx/ServicesCard'
import img1 from "./../../assets/orange.png"
import img2 from "./../../assets/v6.png"
import img3 from "./../../assets/Vector7.png"
import img4 from "./../../assets/blue.png"
import x2 from "./../../assets/layer3.png"
import x1 from "./../../assets/layer1.png"
import x3 from "./../../assets/layer2.png"
import v1 from "./../../assets/v2.png"
import v3 from "./../../assets/v4.png"
import v2 from "./../../assets/v1.png"
import v4 from "./../../assets/v3.png"
import VisualServices from './VisualServices'
import axios from 'axios'
export const ServicesSection = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://internships.focal-x.com/api/service');
        setData(response.data.data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);


  const arr = [{
    id: 0,
    mainImg: v1,
    img: img1,
    title: "Branding"
    , desc: "The brand is hope,It is also the source of inspiration for everything you do when you deal with your customers and that is the important and emotional thing. Your Brand and Visual identity represents an intrinsic Value to your company."
    , subTitle: "In focal X agency, we provide:"
    , list: ["Visual identity design.", "Define Brand Identity.", "Define Brand personality.", "Building Your brand strategy.", "Market research and competitors study."],
    phrase: "We walk with you from A to Z."
  },
  {
    id: 1,
    mainImg: v2,
    title: "Marketing",
    desc: "Talk to your customers and tell them about you and your company's story through us the way you want.Let us plan the content that will bring your audience closer to you.",
    subTitle: "In our marketing agency, we provide:",
    list: ["E-mail marketing.", "Affiliate marketing.", "Influencer marketing.", "Copy & content writing.", "Market research and Analysis.", "App store optimization ( ASO ).", "Search engine Marketing ( SEM ).", "Search engine optimization ( SEO ).", "Social media marketing & campaigns."],
    phrase: "",
    img: img2,
    logo: x1,
  }, {
    id: 2,
    mainImg: v3,
    title: "Web/App Development",
    desc: "Your website or app is the same as your digital company built from graphics and software.",
    subTitle: "In focal X agency, we provide:",
    list: ["Case Study.", "UX research.", "Ui/Ux design.", "Usability Testing.", "Hosting Services.", "App Development.", "Web development.", "Research & Prototyping.", "consumer behavior study.", "Conversion Rate Optimization."],
    phrase: "",
    img: img3,
    logo: x2,
  }, {
    id: 3,
    mainImg: v4,
    title: "B2B & Partnerships",
    desc: "We believe that a successful business requires successful partners and successful partnerships, Based on our belief in work and sustainable development goal No. 17,",
    subTitle: "whether you:",
    list: ["Huge company", "Start-up company.", "Creative design agency.", "Digital marketing agency.", "You have small or large company."],
    phrase: "We are here to empowered you, you are welcome you to join our Partner Program.",
    img: img4,
    logo: x3,
  }
  ]

  const colorValues = [
    { color: '#FF9800' },
    { color: '#A513FF' },
    { color: '#71AA28' },
    { color: '#1D5EDD' },
  ];
  const boxShadowValues = [
    { boxShadow: '5 5 0 0 rgba(255, 87, 51, 0.5)' },
    { boxShadow: '5 5 0 0 rgba(255, 87, 51, 0.5)' },
    { boxShadow: '5 5 0 0 rgba(255, 87, 51, 0.5)' },
    { boxShadow: '5 5 0 0 rgba(255, 87, 51, 0.5)' },
  ];

  const getRadius = [
    { redus: '0px 44px 44px 0px' },
    { redus: '44px 0px 0px 44px' },
    { redus: '0px 44px 44px 0px' },
    { redus: '44px 0px 0px 44px' },
  ];

  return (
    <div id='Services'>
      <center className='mt-10'>
        <h2 className='headline'>Our Services</h2>
      </center>
      <section className='myContainer'>

        {
          data.map((e, index) => (
            <ServicesCard
              key={e.index}
              color={colorValues[index].color}
              radius={getRadius[index].redus}
              boxShadow={boxShadowValues[index].boxShadow}
              title={e.title}
              desc={e.description}
              img={arr[index].img}
              logo={e.image}
              mainImg={arr[index].mainImg}
              id={e.id} 
              index={index}
              />
          ))
        }

      </section>
      <VisualServices />
    </div>
  )
}
