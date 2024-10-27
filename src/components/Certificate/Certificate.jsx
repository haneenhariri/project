/* eslint-disable react/no-unescaped-entities */
import './Certificate.css'
import search from './Search.png'
import Lisance from './Lisance.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Certificate() {

    const [IDValue, setIDValue] = useState("")

    console.log(IDValue)

    function HandelIDvalue(e) {
        setIDValue(e.target.value)
    }

    return (
        <section className='CertificateSec'>
            <div className='CE-backg'></div>
            <h2 style={{color:'#333'}}>Certificate</h2>
            <div className='CSides'>
                <div className='CSide1'>
                    <div className='MIdwidthCertifi'>
                        <p>Here you can find huge information about our trainees</p>
                        <span>Just enter the trainee's ID to get the access</span>
                        <div className='CSearch'>
                            <input id='CertificatINput' type="search" value={IDValue} onChange={HandelIDvalue} placeholder='Search By name Or Certificate ID Number' />
                            <Link to={`/Certificate/${IDValue}`}>
                                    <img src={search} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='CSide2'>
                    <img src={Lisance} alt="" />
                </div>
            </div>
        </section>
    )
}
