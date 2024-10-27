import './Hero.css';
import trainingFile from './../../assets/Training-file/X-academy-2024-V.7-Syria.pdf';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export const HeroXacademy = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://internships.focal-x.com/api/sum_interns');
        setData(response.data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <section className='XA-Hero'>
      <div className='XA-Hero1'>
        <div className='Herotitle'>
          <h2>Redefine Your Success Story</h2>
          <p className='alpraragraph1'>In focal X agency We believe that every human need second chance, Every trainee is our partner, and hand in hand we are here to build something different and special.</p>
          <p className='alpraragraph2'>In focal X agency We believe that <br /> every human need second chance, <br /> Every trainee is our partner, <br /> and hand in hand we are here to build <br /> something different and special.</p>
          <div className='HeroLogin'>
            <Link target='_blank' to={"https://xacademy-recording-platform.focal-x.com/"}><button>Login</button></Link>
            <a href={trainingFile} download="X academy 2024 V.7 Syria.pdf">Download training file</a>
          </div>
        </div>
        <div className='Hero-numberAnimat'>
          <div className='CHAIELD'>
            <p>{(data + 2179)}+</p>
            <p>Interns</p>
          </div>
          <div className='CHAIELD'>
            <p>24+</p>
            <p>Trainers</p>
          </div>
          <div className='CHAIELD'>
            <p>5+</p>
            <p>Camps</p>
          </div>
        </div>
      </div>
      <div className='XA-Hero2'>
        <div className='XA-Heroback3-orang'></div>
        <div className='XA-Heroback2-orang'></div>
        <div className='XA-Herobackground'></div>
      </div>
      
    </section>
  )
}
