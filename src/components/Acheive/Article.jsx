import React from 'react'
import "./AcheiveStyle.css"
const Article = ({isList,dateArticle,text,images}) => { 
  console.log(images);
  return (
    <div className='ArticleX'>
     <div className="artUnder">
     {isList ? <>
     <ul>
       <li className='listCircle'>{dateArticle.substring(0, 11)}</li> </ul></>
       : <div className='underDate'>{dateArticle.substring(0, 11)}</div>}
     </div>
     <p className='articleText' dangerouslySetInnerHTML={{ __html: text }}></p>
     <div className="designAwards">
        {images.map((e) => (
          <img style={{width:'150px' ,marginRight:"30px"}} src={e} alt="" />
        ))}
      </div>
    </div>
  )
}

export default Article
