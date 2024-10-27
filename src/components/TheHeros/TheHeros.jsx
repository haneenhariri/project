import { useEffect, useState } from 'react';
import './TheHeros.css';
import OneHero from './OneHero/OneHero.jsx';
import axios from 'axios';

export default function TheHeros() {

    const [ActivHero, setActivHero] = useState();
    const [data, setData] = useState([]);
    const [version, setVersion] = useState('');
    const [data2, setData2] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://internships.focal-x.com/api/versions');
                setData(response.data.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            if (version) { // تحقق من أن النسخة ليست فارغة
                try {
                    const response = await axios.get(`https://internships.focal-x.com/api/internhero?version=${version}`);
                    setData2(response.data.data);
                } catch (error) {
                    console.error('Error fetching data: ', error);
                }
            }else{
                try {
                    const response = await axios.get(`https://internships.focal-x.com/api/internhero`);
                    setData2(response.data.data);

                } catch (error) {
                    console.error('Error fetching data: ', error);
                }
            }
        };

        fetchData();
    }, [version]); // استخدم version كمسبب لتحديث البيانات

    function VHeroActivait(IDHero, index) {
        setActivHero(IDHero);
        setVersion(data[index].name);
    }

    return (
        <section className='TheHeros'>
            <div className='TH-title'>
                <h2>The Heros</h2>
                <nav>
                    <ul>
                        {
                            data.map((e, index) => (
                                <li
                                    key={index}
                                    onClick={() => VHeroActivait(index + 1, index)}
                                    className={ActivHero === (index + 1) ? 'VHeroActiv' : 'VHeroDisActiv'}
                                >
                                    {e.name}
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
            <div className='Heros-v'>
                <div className='v5'>
                    <div className='THscrol'>
                        <div className='Heros-photos'>
                                <OneHero data2={data2} />
                        </div>
                    </div>
                    <div className='Hero-cover'></div>
                    <div className='Hero-coverr'></div>
                </div>
            </div>
        </section>
    );
}
