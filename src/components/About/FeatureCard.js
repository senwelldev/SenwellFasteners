import React from 'react'
import "./FeatureCard.css"
const FeatureCard = ({image,title,descp}) => {
  return (
    <div className='container d-flex align-items-center justify-content-center flex-column'>
    <div className="png-image mb-3">
        <img src={image} alt="" className='img-fluid '  loading="lazy"/>

    </div>
       <div className="txt-wrapper">
       <h1 className='feature-card-title'>{title}</h1>
        <p className='details' >{descp}</p>
      
       </div>
    </div>
  )
}

export default FeatureCard
