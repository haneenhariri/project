import React from 'react'
import "./ServicesCardStyle.css"

export const ServicesCard = ({ id, radius, color, mainImg, boxShadow, title, desc, img, logo , key , index }) => {
  return (
    <div className="card" key={key}>
      <img src={mainImg} alt="Vector" className='img' />
      <div className={`innerCard ${id % 2 === 0 ? 'leftX' : 'rightX'}`} style={{ boxShadow: boxShadow, borderRadius: radius }} >
        <div className="Service">
          <h2 className='titleCard' style={{ '--lineColor': color }}>{title}</h2>
          <p className={`Description-fq${index}`} dangerouslySetInnerHTML={{ __html: desc }}>
            </p>
        </div>
        <div className={`Xicon ${id % 2 === 0 ? 'leftX' : 'rightX'}`}>
          <img src={img} alt="X" className='Ximg' style={{ position: 'absolute', right: '20px', bottom: '0', }} />
          <div className="XImg">
            <img src={logo} className='Xlogo' />
          </div>
        </div>
      </div>
    </div>


  )
}
