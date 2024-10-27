import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CertificateAfterS.css';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import QRCode from 'qrcode.react';
import focal from './../../assets/focal X 1 (1).png';
import axios from 'axios';

export default function CertificateAfterS() {

  const { id } = useParams();
  let NameOfIntern = { id }
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState();
  const [Data, setData] = useState();



  const [daysDifference, setDaysDifference] = useState(0);



  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Data.length);
  };

  // دالة للعودة إلى العنصر السابق
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Data.length) % Data.length);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`https://internships.focal-x.com/api/search?search=${encodeURIComponent(NameOfIntern.id)}`,
          {
            headers: {
              'Content-Type': 'application/json',
            }
          }
        );
        setData(response.data);
        setCurrentIndex2(response.data[currentIndex]);
        console.log(currentIndex2);


        // حساب الفرق بين التاريخين
        const startDate = new Date(response.data[currentIndex].startDate);
        const endDate = new Date(response.data[currentIndex].endDate);
        const differenceInTime = endDate - startDate;
        const differenceInDays = differenceInTime / (1000 * 3600 * 24);

        setDaysDifference(differenceInDays);


      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, [currentIndex]);


  return (
    <section className='Certifi-fq-f'>
      {
        currentIndex2 ?
          <section>
            <div>
              {
                currentIndex2.certificate_type == "graduation" ?
                  <section className='For-intern-FQ'>
                    <div className='box-certificate'>
                      <div id="pdf-content" className='PDF-containar'>
                        <div className='Border border2'>
                          <div className='top'>
                            <p>INTERNSHIP CERTIFICATE</p>
                            <div><img src={focal} alt="focal-x" /></div>
                          </div>
                          <div className='Mid mid2'>
                            <span>This is to certify that</span>
                            <p>{currentIndex2.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</p>
                            <span className='midmid'>successfully completed four months internship program<br /> and received passing grades for certificate in</span>
                            <p>{currentIndex2.specialization}</p>
                            <span>a program offered by focal X (L.L.C)</span>
                          </div>
                          <div className='End'>
                            <div className='left'>
                              <div className='qr'>
                                <QRCode
                                  value="https://www.example.com"
                                  size={78}
                                  bgColor={"#ffffff"}
                                  fgColor={"#000000"}
                                  level={"L"}
                                  includeMargin={false}
                                  renderAs={"svg"}
                                />
                              </div>
                              <div className='description'>
                                <span className='xxx'>Scan To Search</span>
                                <span style={{fontSize:"10px", marginBottom:"1px"}}>Issued 2024-September</span>
                                <span>VALID CERTIFICATE ID</span>
                                <span>{currentIndex2.id_certificate}</span>
                              </div>
                            </div>
                            <div className='right'>
                              <div className='CEOName'>Alaa Darwish</div>
                              <div className='ceo'>Founder & CEO</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='Main-certificate'>
                      <p className='className'>
                        <p><span>Duration:</span>{daysDifference}</p>
                        <span>{currentIndex2.name}</span>
                        <p><span>ID Certificate:</span>{currentIndex2.id_certificate}</p>
                      </p>
                      <p><span>E-mail:</span>{currentIndex2.email}</p>
                      <p><span>Specialization:</span>{currentIndex2.specialization}</p>
                      <p><span>KPI:</span>{currentIndex2.kpi}</p>
                      <p><span>Supervisor:</span>{currentIndex2.supervisor}</p>
                      <p>
                        <h3>Start Date: {currentIndex2.startDate}</h3>
                        <h3>End Date: {currentIndex2.endDate}</h3>
                      </p>
                      <p className='Last-certificate-option'>
                        <p>
                          {
                            Data.length > 1 ?
                              <div>
                                <button className='Prevuuuu' onClick={handlePrev} disabled={currentIndex === 0}>
                                  Prev
                                </button>
                              </div>
                              :
                              ''
                          }
                          <button className='Get-you-certi' onClick={() => createPDF(currentIndex2.name)}>
                            Get Your Certificate
                          </button>
                          {
                            Data.length > 1 ?
                              <div>
                                <button
                                  className='nexttttttt'
                                  onClick={handleNext} disabled={currentIndex === Data.length - 1}>
                                  Next
                                </button>
                              </div>
                              :
                              ''
                          }
                        </p>
                      </p>

                    </div>
                  </section>
                  :
                  <section className='For-intern-FQ'>
                    <div className='box-certificate'>
                      <div id="pdf-content" className='PDF-containar'>
                        <div className='Border'>
                          <div className='top'>
                            <p>INTERNSHIP CERTIFICATE</p>
                            <div><img src={focal} alt="focal-x" /></div>
                          </div>
                          <div className='Mid'>
                            <span>This is to certify that</span>
                            <p>{currentIndex2.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</p>
                            <span>attend 4 months internship program in</span>
                            <p>{currentIndex2.specialization}</p>
                            <span>a program offered by focal X (L.L.C)</span>
                          </div>
                          <div className='End'>
                            <div className='left'>
                              <div className='qr'>
                                <QRCode
                                  value="https://www.example.com"
                                  size={78}
                                  bgColor={"#ffffff"}
                                  fgColor={"#000000"}
                                  level={"L"}
                                  includeMargin={false}
                                  renderAs={"svg"}
                                />
                              </div>
                              <div className='description'>
                                <span className='xxx'>Scan To Search</span>
                                <span style={{fontSize:"10px", marginBottom:"1px"}}>Issued 2024-September</span>
                                <span>VALID CERTIFICATE ID</span>
                                <span>{currentIndex2.id_certificate}</span>
                              </div>
                            </div>
                            <div className='right'>
                              <div className='CEOName'>Alaa Darwish</div>
                              <div className='ceo'>Founder & CEO</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='Main-certificate'>
                      <p className='className'>
                        <p><span>Duration:</span>{daysDifference}</p>
                        <span>{currentIndex2.name}</span>
                        <p><span>ID Certificate:</span>{currentIndex2.id_certificate}</p>
                      </p>
                      <p><span>E-mail:</span>{currentIndex2.email}</p>
                      <p><span>Specialization:</span>{currentIndex2.specialization}</p>
                      <p><span>KPI:</span>{currentIndex2.kpi}</p>
                      <p><span>Supervisor:</span>{currentIndex2.supervisor}</p>
                      <p>
                        <h3>Start Date: {currentIndex2.startDate}</h3>
                        <h3>End Date: {currentIndex2.endDate}</h3>
                      </p>
                      <p className='Last-certificate-option'>
                        <p>
                          {
                            Data.length > 1 ?
                              <div>
                                <button className='Prevuuuu' onClick={handlePrev} disabled={currentIndex === 0}>
                                  Prev
                                </button>
                              </div>
                              :
                              ''
                          }
                          <button className='Get-you-certi' onClick={() => createPDF(currentIndex2.name)}>
                            Get Your Certificate
                          </button>
                          {
                            Data.length > 1 ?
                              <div>
                                <button
                                  className='nexttttttt'
                                  onClick={handleNext} disabled={currentIndex === Data.length - 1}>
                                  Next
                                </button>
                              </div>
                              :
                              ''
                          }
                        </p>
                      </p>

                    </div>
                  </section>
              }
            </div>
          </section>
          :
          <></>
      }
    </section>
  )
}


const createPDF = (name) => {
  const input = document.getElementById('pdf-content');

  html2canvas(input, { scale: 5 }).then((canvas) => {
    const imgData = canvas.toDataURL('image/png', 1.0);
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: [222, 157.6]
    });
    pdf.addImage(imgData, 'PNG', 0, 0, 222, 157.6, undefined, 'FAST');
    pdf.save(`${name}.pdf`);
  });
};

