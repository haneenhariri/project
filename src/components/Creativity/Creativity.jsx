/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import './Creativity.css';
import uiMobile from './../../assets/uiMobile.svg'
import uiMobile2 from './../../assets/uimobile2.webp'
import uiMobile3 from './../../assets/uimobile3.webp'
import front1 from './../../assets/screencapture-faisalqashmrfs-github-io-Golobe-X-Front-2024-07-21-11_46_291.webp'
import front2 from './../../assets/screencapture-fadi1872-github-io-AI-blog-front-end-2024-07-21-11_49_041.webp'
import fluter from './../../assets/Welcome2Screen2.webp'
import fluter2 from './../../assets/iPhone-15-Pro-Black-Titanium-Mockup-Portrait.webp'
import fluter3 from './../../assets/main2.webp'
import { Link } from 'react-router-dom';

export default function Creativity() {

    const [CRactivetion, setCRactivetion] = useState(1)

    function hundelCRactiv(IdCRActiv) {
        setCRactivetion(IdCRActiv)
    }

    const [crnestedsilde1, setcrnestedsilde1] = useState(1)

    function hundelcrnestedsilde(IdN) {
        setcrnestedsilde1(IdN)
    }

    const [crnestedsilde2, setcrnestedsilde2] = useState(1)

    function hundelcrnestedsilde2(IdN) {
        setcrnestedsilde2(IdN)
    }

    const [crnestedsilde3, setcrnestedsilde3] = useState(1)

    function hundelcrnestedsilde3(IdN) {
        setcrnestedsilde3(IdN)
    }

    const [crnestedsilde4, setcrnestedsilde4] = useState(1)

    function hundelcrnestedsilde4(IdN) {
        setcrnestedsilde4(IdN)
    }

    return (
        <section className='Creativity-Sec'>
            <div className='CR-title'>
                <h2>Our Trainees' Creativity</h2>
                <p>Shock warning: These projects were done by people who started from 0 and only within five months</p>
            </div>
            <nav className='CR-Branshes-sec'>
                <ul>
                    <li
                        onClick={() => hundelCRactiv(1)}
                        className={CRactivetion === 1 ? 'CRActiv' : ''}
                    >Branding</li>
                    <li
                        onClick={() => hundelCRactiv(2)}
                        className={CRactivetion === 2 ? 'CRActiv' : ''}
                    >Ui / Ux</li>
                    <li
                        onClick={() => hundelCRactiv(3)}
                        className={CRactivetion === 3 ? 'CRActiv' : ''}
                    >Front-end</li>
                    <li
                        onClick={() => hundelCRactiv(4)}
                        className={CRactivetion === 4 ? 'CRActiv' : ''}
                    >Flutter</li>
                </ul>
            </nav>
            <div className={`CR-slidesSec${CRactivetion}`}>
                {/* Branding */}
                <div className='CR-bransh-branding'>
                    <div className='CR-contant'>
                        <div className='cr-umberback'>
                            <div className='cr-umberfront'></div>
                            <div className='cr-title'>
                                <p>Umber </p>
                                <span>Logo Design</span>
                                <span>Packaging </span>
                                <span>Identity Design</span>
                            </div>
                        </div>
                        <div className='otherone'></div>
                    </div>
                    <div className='CR-Behance'>
                        <Link target="blank" to={'https://www.behance.net/focal-x-agency'}><button>View in Behance</button></Link>
                    </div>
                    <div className='CR-Mobile-brans-branding'>
                        <div className={`CR-MO-content${crnestedsilde1}`}>
                            {/* <div className='CR-MO-Section1'>
                                <div className='cr-photo-left'>
                                    <div className='cr-projevt-name'>
                                        <p>Flower Land Project </p>
                                        <span>Logo Design</span>
                                        <span>Packaging</span>
                                        <span>Identity Design</span>
                                    </div>
                                    <div className='title-section'>BRANDING</div>
                                </div>
                                <div className='cr-photo-red'>
                                    <div className='CR-Behance1'>
                                        <Link target="blank" to={'https://www.behance.net/focal-x-agency'}><button>View in Behance</button></Link>

                                    </div>
                                </div>
                            </div> */}
                            <div className='CR-MO-Section2'>
                                <div className='cr-photo-left'>
                                    <div className='cr-projevt-name'>
                                        <p>R'ffeca Project </p>
                                        <span style={{ marginLeft: '-5px' }}>Logo Design</span>
                                        <span style={{ marginLeft: '-10px' }}>Packaging</span>
                                        <span style={{ marginLeft: '-15px' }}>Identity Design</span>
                                    </div>
                                    <div className='title-rog'></div>
                                    <div className='CR-Behance1'>
                                        <Link target="blank" to={'https://www.behance.net/focal-x-agency'}><button>View in Behance</button></Link>

                                    </div>
                                </div>
                                <div className='cr-photo-red'>
                                    <div className='cr-clossedRog'>
                                    </div>
                                </div>
                            </div>
                            <div className='CR-MO-Section3'>
                                <div className='cr-photo-left'>
                                    <div className='cr-projevt-name'>
                                        <p>Umber Project </p>
                                        <span>Logo Design</span>
                                        <span>Packaging</span>
                                        <span>Identity Design</span>
                                    </div>
                                    <div className='title-umber'></div>

                                </div>
                                <div className='cr-title-right'>
                                    BRANDING
                                </div>
                                <div className='CR-Behance1'>
                                    <Link target="blank" to={'https://www.behance.net/focal-x-agency'}><button>View in Behance</button></Link>

                                </div>
                            </div>
                        </div>
                        <div className='CR-btns'>
                            <div
                                onClick={() => hundelcrnestedsilde(1)}
                                className={crnestedsilde1 === 1 ? 'Actin-fq-cr' : 'disActin-fq-cr'}
                            ></div>
                            <div
                                onClick={() => hundelcrnestedsilde(2)}
                                className={crnestedsilde1 === 2 ? 'Actin-fq-cr' : 'disActin-fq-cr'}
                            ></div>
                            {/* <div
                                onClick={() => hundelcrnestedsilde(3)}
                                className={crnestedsilde1 === 3 ? 'Actin-fq-cr' : 'disActin-fq-cr'}
                            ></div> */}
                        </div>
                    </div>
                </div>

                {/* Ui / Ux */}
                <div className='CR-bransh-Ui'>
                    <div className='cr-contant'>
                        <div className='CR-Left-bo'>
                            <div className='title'>
                                
                                {/* <span>small breif about the project</span> */}
                            </div>
                        </div>
                        <div className='CR-right-bo'>
                            <div className='cr-inside'></div>
                            <div className='cr-insideTitle'>Ui / Ux</div>
                            <p>BAS Project</p>
                            <div className='CR-Behance'>
                                <Link target="blank" to={'https://www.behance.net/focal-x-agency'}><button>View in Behance</button></Link>

                            </div>
                        </div>
                    </div>
                    <div className='CR-Mobile-UI'>
                        <div className='CR-Mobile-brans-UI'>
                            <div className={`CR-MO-content${crnestedsilde2}`}>
                                <div className='CR-MO-Section1'>
                                    <div className='ui-box'>
                                        <div className='top-ui-box'>
                                            <div>
                                                <span>
                                                BAS Website
                                                </span>
                                                {/* <p>
                                                    Logo Design Packaging <br />
                                                    dentity Design
                                                </p> */}
                                            </div>
                                            <Link target="blank" to={'https://www.behance.net/focal-x-agency'}><button>View in Behance</button></Link>
                                        </div>
                                        <div className='bottom-ui-box'>
                                            <img src={uiMobile} alt="uiMobile" />
                                        </div>
                                    </div>
                                </div>
                                <div className='CR-MO-Section2'>
                                    <div className='ui-box'>
                                        <div className='top-ui-box'>
                                            <div>
                                                <span>
                                                    Greenyrize Website
                                                </span>
                                                {/* <p>
                                                    Logo Design Packaging <br />
                                                    dentity Design
                                                </p> */}
                                            </div>
                                            <Link style={{zIndex:'123'}} target="blank" to={'https://www.behance.net/focal-x-agency'}><button>View in Behance</button></Link>
                                        </div>
                                        <div className='bottom-ui-box'>
                                            <img className='img2' src={uiMobile2} alt="uiMobile" />
                                        </div>
                                    </div>
                                </div>
                                <div className='CR-MO-Section3'>
                                    <div className='ui-box-s3-b'>
                                        <p>Ui/Ux</p>
                                        <div className='ui-box-s3'>
                                            <img src={uiMobile3} alt="" />
                                            <div>
                                                <span>
                                                Visite Syria Website
                                                </span>
                                                {/* <p>
                                                    Logo Design <br /> Packaging <br />
                                                    dentity Design
                                                </p> */}
                                                <Link style={{marginTop:'10px'}} target="blank" to={'https://www.behance.net/focal-x-agency'}><button>View in Behance</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='CR-btns'>
                                <div
                                    onClick={() => hundelcrnestedsilde2(1)}
                                    className={crnestedsilde2 === 1 ? 'Actin-fq-cr' : 'disActin-fq-cr'}
                                ></div>
                                <div
                                    onClick={() => hundelcrnestedsilde2(2)}
                                    className={crnestedsilde2 === 2 ? 'Actin-fq-cr' : 'disActin-fq-cr'}
                                ></div>
                                <div
                                    onClick={() => hundelcrnestedsilde2(3)}
                                    className={crnestedsilde2 === 3 ? 'Actin-fq-cr' : 'disActin-fq-cr'}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='CR-bransh-Front'>
                    <dir className='cr-contant'>
                        <div className='cr-left'>
                            <div className='sec-title'>
                                <p>Golobe Project</p>
                                <span>Logo Design Packaging Identity Design</span>
                            </div>
                            <div className='first-title'>
                                Front-end
                            </div>
                            <div className='CR-Behance'>
                                <Link target="blank" to={'https://www.behance.net/focal-x-agency'}><button>View in Behance</button></Link>

                            </div>
                        </div>
                        <div className='cr-rightTop'></div>
                        <div className='cr-rightBottomn'></div>
                    </dir>
                    <div className='CR-Mobile-front'>
                        <div className='CR-Mobile-brans-front'>
                            <div className={`CR-MO-content${crnestedsilde3}`}>
                                <div className='CR-MO-Section1'>
                                    <div className='ui-box'>
                                        <div className='top-ui-box'>
                                            <div>
                                                <span>
                                                Golobe Project
                                                </span>
                                                {/* <p>
                                                    Logo Design Packaging <br />
                                                    dentity Design
                                                </p> */}
                                            </div>
                                            <Link target="blank" to={'https://www.behance.net/focal-x-agency'}><button>View in Behance</button></Link>
                                        </div>
                                        <div className='bottom-ui-box'>
                                            <img src={front1} alt="uiMobile" />
                                        </div>
                                    </div>
                                </div>
                                <div className='CR-MO-Section2'>
                                    <div className='ui-box'>
                                        <div className='top-ui-box'>
                                            <div>
                                                <span>
                                                FutureTech Project
                                                </span>
                                                {/* <p>
                                                    Logo Design Packaging <br />
                                                    dentity Design
                                                </p> */}
                                            </div>
                                            <Link target="blank" to={'https://www.behance.net/focal-x-agency'}><button>View in Behance</button></Link>
                                        </div>
                                        <div className='bottom-ui-box'>
                                            <img src={front2} alt="uiMobile" />
                                        </div>
                                    </div>
                                </div>
                                {/* <div className='CR-MO-Section3'>
                                    3
                                </div> */}
                            </div>
                            <div className='CR-btns'>
                                <div
                                    onClick={() => hundelcrnestedsilde3(1)}
                                    className={crnestedsilde3 === 1 ? 'Actin-fq-cr' : 'disActin-fq-cr'}
                                ></div>
                                <div
                                    onClick={() => hundelcrnestedsilde3(2)}
                                    className={crnestedsilde3 === 2 ? 'Actin-fq-cr' : 'disActin-fq-cr'}
                                ></div>
                                {/* <div
                                    onClick={() => hundelcrnestedsilde3(3)}
                                    className={crnestedsilde3 === 3 ? 'Actin-fq-cr' : 'disActin-fq-cr'}
                                ></div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='CR-bransh-Flutter'>
                    <div className='cr-contant'>
                        <div className='phone-left'>
                            <div className='colom-title'>
                                <p>FLUTTER</p>
                            </div>
                            <div className='descrip1 cr-sameStyle'>
                                <p>Project Name</p>
                                <span>Logo Design</span>
                                <span>Packaging</span>
                                <span>Identity Design</span>
                            </div>
                            <div className='CR-Behance'>
                                <Link target="blank" to={'https://www.behance.net/focal-x-agency'}><button>View in Behance</button></Link>

                            </div>
                        </div>
                        <div className='phone-right'>
                            <div className='descrip2 cr-sameStyle'>
                                <p>Project Name</p>
                                <span>Logo Design</span>
                                <span>Packaging</span>
                                <span>Identity Design</span>
                            </div>
                        </div>
                    </div>
                    <div className='CR-Mobile-fluteer'>
                        <div className='CR-Mobile-brans-fluteer'>
                            <div className={`CR-MO-content${crnestedsilde4}`}>
                                <div className='CR-MO-Section1'>
                                    <div className='ui-box-s3-b fuuuterll'>
                                        <div className='ui-box-s3 asdasdasd123'>
                                            <img src={fluter} alt="" />
                                            <div className='FrontAddToBox'>
                                                <span>
                                                TRACKIZER App
                                                </span>
                                                {/* <p>
                                                    Logo Design <br /> Packaging <br />
                                                    dentity Design
                                                </p> */}
                                                <Link target="blank" to={'https://www.behance.net/focal-x-agency'}><button>View in Behance</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='CR-MO-Section2'>
                                    <div className='ui-box-s3-b fuuuterll2'>
                                        <div className='ui-box-s3 asdasdasd123'>
                                            <img className='LastUpdatewithImg' src={fluter2} alt="" />
                                            <div className='FrontAddToBox'>
                                                <span>
                                                Podcast App
                                                </span>
                                                {/* <p>
                                                    Logo Design <br /> Packaging <br />
                                                    dentity Design
                                                </p> */}
                                                <Link target="blank" to={'https://www.behance.net/focal-x-agency'}><button>View in Behance</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='CR-MO-Section3'>
                                    <div className='ui-box-s3-b fuuuterll2'>
                                        <div className='fluterrrr-3section'>
                                            <p className='nameoffluuter'>FLUTTER</p>
                                            <img src={fluter3} alt="" />
                                            <div className='EndedFlutter'>
                                                <span>
                                                    X community
                                                </span>
                                                {/* <p>
                                                    Logo Design <br /> Packaging <br />
                                                    dentity Design
                                                </p> */}
                                            </div>
                                            <Link target="blank" to={'https://www.behance.net/focal-x-agency'}><button>View in Behance</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='CR-btns'>
                                <div
                                    onClick={() => hundelcrnestedsilde4(1)}
                                    className={crnestedsilde4 === 1 ? 'Actin-fq-cr' : 'disActin-fq-cr'}
                                ></div>
                                <div
                                    onClick={() => hundelcrnestedsilde4(2)}
                                    className={crnestedsilde4 === 2 ? 'Actin-fq-cr' : 'disActin-fq-cr'}
                                ></div>
                                <div
                                    onClick={() => hundelcrnestedsilde4(3)}
                                    className={crnestedsilde4 === 3 ? 'Actin-fq-cr' : 'disActin-fq-cr'}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
