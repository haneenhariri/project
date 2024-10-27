import React, { useEffect, useState } from 'react'
import "./AcheiveStyle.css"
import img1 from "./../../assets/img1.png"
import img2 from "./../../assets/img4.png"
import img3 from "./../../assets/img3.png"
import img4 from "./../../assets/img2.png"
import Article from './Article'
import axios from 'axios'

const Acheive = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://internships.focal-x.com/api/achieved');
        setData(response.data.data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <div className='acheive'>
      <h1 className='achHeadline'> What We’ve achieved so far</h1>
      <div >
        {data.map((e) => (
          <Article key={e.id} dateArticle={e.date} text={e.description} images={e.image} isList={true} />
        ))
        }
      </div>
    </div>
  )
}

export default Acheive
