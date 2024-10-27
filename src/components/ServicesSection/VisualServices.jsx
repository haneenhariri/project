import React from 'react'
import "./ServicesStyle.css"
const VisualServices = () => {
  const visualServices = ["Logo Design", "Social Media Posters Design", "Campaing Posters Design", "Business Cards", "Advertising Design", "Packaging", "Billboard", "Product Design", "Stationery Design", "Digital illustration", "Typography", "Iconography", "3D modeling", "Motion Graphic"]
  return (
    <div className='vServices'>
      <h1 className='headHost'>Also We Have All <br /> Design & Visual Services</h1>
      <div className='gridServ'>
        {visualServices.map((e, index) => (
          <div key={index} className="itemSer">
            {e}
          </div>
        ))}
      </div>
    </div>
  )
}

export default VisualServices
