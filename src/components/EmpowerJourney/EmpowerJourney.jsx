import { useEffect, useState } from 'react';
import './EmpowerJourney.css';
import axios from 'axios';

export default function EmpowerJourney() {

  const [activeButtonEJ, setActiveButtonEJ] = useState(1);
  const [activeSectionEJ, setactiveSectionEJ] = useState(1);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://internships.focal-x.com/api/category');
        setData(response.data.data);

      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);


  const handleButtonClick = (buttonId) => {
    setActiveButtonEJ(buttonId);
    setactiveSectionEJ(buttonId)
    // Perform any other actions you want when a button is clicked
  };
  let [ShowMoreEJ, setShowMoreEJ] = useState(true);

  const handleShowClick = () => {
    setShowMoreEJ(ShowMoreEJ = !ShowMoreEJ)
  };
  let [ShowMoreEJ2, setShowMoreEJ2] = useState(true);

  const handleShowClick2 = () => {
    setShowMoreEJ2(ShowMoreEJ2 = !ShowMoreEJ2)
  };
  let [ShowMoreEJ3, setShowMoreEJ3] = useState(true);

  const handleShowClick3 = () => {
    setShowMoreEJ3(ShowMoreEJ3 = !ShowMoreEJ3)
  };
  let [ShowMoreEJ4, setShowMoreEJ4] = useState(true);

  const handleShowClick4 = () => {
    setShowMoreEJ4(ShowMoreEJ4 = !ShowMoreEJ4)
  };
  let [ShowMoreEJ5, setShowMoreEJ5] = useState(true);

  const handleShowClick5 = () => {
    setShowMoreEJ5(ShowMoreEJ5 = !ShowMoreEJ5)
  };
  let [ShowMoreEJ6, setShowMoreEJ6] = useState(true);

  const handleShowClick6 = () => {
    setShowMoreEJ6(ShowMoreEJ6 = !ShowMoreEJ6)
  };

  const [Data2, setData2] = useState([]);
  const [Data3, setData3] = useState([]);
  const [Data4, setData4] = useState([]);
  const [Data5, setData5] = useState([]);
  const [Data6, setData6] = useState([]);
  const [Data7, setData7] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://internships.focal-x.com/api/empower');
        setData2(response.data.data[0]);
        setData3(response.data.data[1]);
        setData4(response.data.data[2]);
        setData5(response.data.data[3]);
        setData6(response.data.data[4]);
        setData7(response.data.data[5]);

      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);




  return (
    <>
      {
        Data2 ? <section className='EJSection'>
          <h2 className='EJTitle'>Empower Your Journey</h2>
          <nav className='EJNavbar'>
            <ul>
              {
                data.map((e, index) => (
                  <li
                    onClick={() => handleButtonClick(index + 1)}
                    className={activeButtonEJ === (index + 1) ? 'EJactiv' : ''}
                  >
                    {e.name}
                  </li>
                ))
              }
            </ul>
          </nav>
          <div
            className={`EJSlider${activeSectionEJ}`}
          >
            <section className='GraphicDesign'>
              <div className='GR-MainCard'>
                <div className='row-1'>
                  <div className='Training-Topics' dangerouslySetInnerHTML={{ __html: Data2.body }}>
                  </div>
                  <div className='just-img'>
                    <img src={Data2.image_befor} alt="" />
                  </div>
                </div>
                <div className='row-2'>
                  <div className='Training-Oblectives' dangerouslySetInnerHTML={{ __html: Data2.body1 }}>

                  </div>
                  <div className='Training-Outputs' dangerouslySetInnerHTML={{ __html: Data2.body2 }}>

                  </div>
                  <div
                    className='SHow-more'
                    onClick={() => handleShowClick()}
                  >Know more</div>
                </div>
              </div>
              <div className={ShowMoreEJ ? "GR-SideCard" : "GR-SideCardDisAct"}>
                <div className='row-1'>
                  <div className='Training-Topics' dangerouslySetInnerHTML={{ __html: Data2.body }}>
                  </div>
                  <div className='just-img'>
                    <div className='Training-Oblectives' dangerouslySetInnerHTML={{ __html: Data2.body1 }}>

                    </div>
                  </div>
                </div>
                <div className='row-2'>
                  <div className='Training-Outputs' dangerouslySetInnerHTML={{ __html: Data2.body2 }}>

                  </div>
                  <div className='Training-Requirements'>
                    <div className='sid1' dangerouslySetInnerHTML={{ __html: Data2.body3 }}>
                    </div>
                    <div className='sid2'>
                      <img src={Data2.image} alt="" />
                      <div
                        className='ClossHandelClick'
                        onClick={() => handleShowClick()}
                      >X</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className='Marketing'>
              <div className='GR-MainCard'>
                <div className='row-1'>
                  <div className='Training-Topics' dangerouslySetInnerHTML={{ __html: Data3.body }}>
                  </div>
                  <div className='just-img'>
                    <img src={Data3.image_befor} alt="" />
                  </div>
                </div>
                <div className='row-2'>
                  <div className='Training-Oblectives' dangerouslySetInnerHTML={{ __html: Data3.body1 }}>

                  </div>
                  <div className='Training-Outputs' dangerouslySetInnerHTML={{ __html: Data3.body2 }}>

                  </div>
                  <div
                    className='SHow-more'
                    onClick={() => handleShowClick2()}
                  >Know more</div>
                </div>
              </div>
              <div className={ShowMoreEJ2 ? "GR-SideCard" : "GR-SideCardDisAct"}>
                <div className='row-1'>
                  <div className='Training-Topics' dangerouslySetInnerHTML={{ __html: Data3.body }}>
                  </div>
                  <div className='just-img'>
                    <div className='Training-Oblectives' dangerouslySetInnerHTML={{ __html: Data3.body1 }}>

                    </div>
                  </div>
                </div>
                <div className='row-2'>
                  <div className='Training-Outputs' dangerouslySetInnerHTML={{ __html: Data3.body2 }}>

                  </div>
                  <div className='Training-Requirements'>
                    <div className='sid1' dangerouslySetInnerHTML={{ __html: Data3.body3 }}>
                    </div>
                    <div className='sid2'>
                      <img src={Data3.image} alt="" />
                      <div
                        className='ClossHandelClick'
                        onClick={() => handleShowClick2()}
                      >X</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className='Branding'>
              <div className='GR-MainCard'>
                <div className='row-1'>
                  <div className='Training-Topics' dangerouslySetInnerHTML={{ __html: Data4.body }}>
                  </div>
                  <div className='just-img'>
                    <img src={Data4.image_befor} alt="" />
                  </div>
                </div>
                <div className='row-2'>
                  <div className='Training-Oblectives' dangerouslySetInnerHTML={{ __html: Data4.body1 }}>

                  </div>
                  <div className='Training-Outputs' dangerouslySetInnerHTML={{ __html: Data4.body2 }}>

                  </div>
                  <div
                    className='SHow-more'
                    onClick={() => handleShowClick3()}
                  >Know more</div>
                </div>
              </div>
              <div className={ShowMoreEJ3 ? "GR-SideCard" : "GR-SideCardDisAct"}>
                <div className='row-1'>
                  <div className='Training-Topics' dangerouslySetInnerHTML={{ __html: Data4.body }}>
                  </div>
                  <div className='just-img'>
                    <div className='Training-Oblectives' dangerouslySetInnerHTML={{ __html: Data4.body1 }}>

                    </div>
                  </div>
                </div>
                <div className='row-2'>
                  <div className='Training-Outputs' dangerouslySetInnerHTML={{ __html: Data4.body2 }}>

                  </div>
                  <div className='Training-Requirements'>
                    <div className='sid1' dangerouslySetInnerHTML={{ __html: Data4.body3 }}>
                    </div>
                    <div className='sid2'>
                      <img src={Data4.image} alt="" />
                      <div
                        className='ClossHandelClick'
                        onClick={() => handleShowClick3()}
                      >X</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className='UiUx'>
              <div className='GR-MainCard'>
                <div className='row-1'>
                  <div className='Training-Topics' dangerouslySetInnerHTML={{ __html: Data5.body }}>
                  </div>
                  <div className='just-img'>
                    <img src={Data5.image_befor} alt="" />
                  </div>
                </div>
                <div className='row-2'>
                  <div className='Training-Oblectives' dangerouslySetInnerHTML={{ __html: Data5.body1 }}>

                  </div>
                  <div className='Training-Outputs' dangerouslySetInnerHTML={{ __html: Data5.body2 }}>

                  </div>
                  <div
                    className='SHow-more'
                    onClick={() => handleShowClick4()}
                  >Know more</div>
                </div>
              </div>
              <div className={ShowMoreEJ4 ? "GR-SideCard" : "GR-SideCardDisAct"}>
                <div className='row-1'>
                  <div className='Training-Topics' dangerouslySetInnerHTML={{ __html: Data5.body }}>
                  </div>
                  <div className='just-img'>
                    <div className='Training-Oblectives' dangerouslySetInnerHTML={{ __html: Data5.body1 }}>

                    </div>
                  </div>
                </div>
                <div className='row-2'>
                  <div className='Training-Outputs' dangerouslySetInnerHTML={{ __html: Data5.body2 }}>

                  </div>
                  <div className='Training-Requirements'>
                    <div className='sid1' dangerouslySetInnerHTML={{ __html: Data5.body3 }}>
                    </div>
                    <div className='sid2'>
                      <img src={Data5.image} alt="" />
                      <div
                        className='ClossHandelClick'
                        onClick={() => handleShowClick4()}
                      >X</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className='Flutter'>
              <div className='GR-MainCard'>
                <div className='row-1'>
                  <div className='Training-Topics' dangerouslySetInnerHTML={{ __html: Data6.body }}>
                  </div>
                  <div className='just-img'>
                    <img src={Data6.image_befor} alt="" />
                  </div>
                </div>
                <div className='row-2'>
                  <div className='Training-Oblectives' dangerouslySetInnerHTML={{ __html: Data6.body1 }}>

                  </div>
                  <div className='Training-Outputs' dangerouslySetInnerHTML={{ __html: Data6.body2 }}>

                  </div>
                  <div
                    className='SHow-more'
                    onClick={() => handleShowClick5()}
                  >Know more</div>
                </div>
              </div>
              <div className={ShowMoreEJ5 ? "GR-SideCard" : "GR-SideCardDisAct"}>
                <div className='row-1'>
                  <div className='Training-Topics' dangerouslySetInnerHTML={{ __html: Data6.body }}>
                  </div>
                  <div className='just-img'>
                    <div className='Training-Oblectives' dangerouslySetInnerHTML={{ __html: Data6.body1 }}>

                    </div>
                  </div>
                </div>
                <div className='row-2'>
                  <div className='Training-Outputs' dangerouslySetInnerHTML={{ __html: Data6.body2 }}>

                  </div>
                  <div className='Training-Requirements'>
                    <div className='sid1' dangerouslySetInnerHTML={{ __html: Data6.body3 }}>
                    </div>
                    <div className='sid2'>
                      <img src={Data6.image} alt="" />
                      <div
                        className='ClossHandelClick'
                        onClick={() => handleShowClick5()}
                      >X</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className='WebDevelopment'>
              <div className='GR-MainCard'>
                <div className='row-1'>
                  <div className='Training-Topics' dangerouslySetInnerHTML={{ __html: Data7.body }}>
                  </div>
                  <div className='just-img'>
                    <img src={Data7.image_befor} alt="" />
                  </div>
                </div>
                <div className='row-2'>
                  <div className='Training-Oblectives' dangerouslySetInnerHTML={{ __html: Data7.body1 }}>

                  </div>
                  <div className='Training-Outputs' dangerouslySetInnerHTML={{ __html: Data7.body2 }}>

                  </div>
                  <div
                    className='SHow-more'
                    onClick={() => handleShowClick6()}
                  >Know more</div>
                </div>
              </div>
              <div className={ShowMoreEJ6 ? "GR-SideCard" : "GR-SideCardDisAct"}>
                <div className='row-1'>
                  <div className='Training-Topics' dangerouslySetInnerHTML={{ __html: Data7.body }}>
                  </div>
                  <div className='just-img'>
                    <div className='Training-Oblectives' dangerouslySetInnerHTML={{ __html: Data7.body1 }}>

                    </div>
                  </div>
                </div>
                <div className='row-2'>
                  <div className='Training-Outputs' dangerouslySetInnerHTML={{ __html: Data7.body2 }}>

                  </div>
                  <div className='Training-Requirements'>
                    <div className='sid1' dangerouslySetInnerHTML={{ __html: Data7.body3 }}>
                    </div>
                    <div className='sid2'>
                      <img src={Data7.image} alt="" />
                      <div
                        className='ClossHandelClick'
                        onClick={() => handleShowClick6()}
                      >X</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
          :
          <></>
      }
    </>
  )
}
