import { useEffect, useState } from 'react';
import './MeetTeam.css';
import CenterMode from './slider-slick/Slider';
import axios from 'axios';


function MeetTeam() {  

  const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://internships.focal-x.com/api/team');
          setData(response.data.data);
        } catch (error) {
          console.error('Error fetching data: ', error);
        }
      };
  
      fetchData();
    }, []);

  return (
    <section className='XAMeetTeam'>
      <h2 className='MaTitle'>Meet The Team</h2>
      <div className='MASlider'>
        <CenterMode data={data}/>
      </div>
    </section>
  );
}

export default MeetTeam;