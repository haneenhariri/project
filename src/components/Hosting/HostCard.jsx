import React from 'react'


const HostCard = ({ title, id, desc, index , btn, color, isAbsolute, img }) => {

    const cardStyle = {
        borderTop: `22px solid ${color}`,
        position: { isAbsolute } ? "relative" : "static",
    };
    const colorDiscount = {
        color: `${color}`
    }
    const btnStyle = {
        border: `1px solid ${color}`,
        color: `${color}`
    }

    return (
        <div className='hostCard' style={cardStyle}>
            <h1 className="titleH">
                {title}
            </h1>
            <div className={`Description-fq${index}`} dangerouslySetInnerHTML={{ __html: desc }}>
            </div>
            <button className='hostBtn' style={btnStyle}>{btn}</button>
            {isAbsolute ? <img src={img} alt={`s${id}`} className={`img${id + 20}H`} /> : " "}
        </div>

    )
}

export default HostCard



{/* <div dangerouslySetInnerHTML={{ __html: desc }}>
                
                </div> */}