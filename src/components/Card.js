import React from 'react'
import star from '../images/star.png'
// import img from '../../public/assets/images'
// import img2 from './images/wedding-photography.png'
// import img3 from './images/mountain-bike.png'

const images = require.context('../../public/images', true);

const Card = (props) => {
  let badgeText
  if (props.item.openSpots === 0) {
      badgeText = "SOLD OUT"
  } else if (props.item.location === "Online") {
      badgeText = "ONLINE"
  }
  return (
    <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <img src={images(`./${props.item.coverImg}`)} alt='exp' className="card--image" />
        <div className="card--stats">
            <img src={star} alt='star' className='card--star' />
            <span>{props.item.stats.rating}</span>
            <span className='gray'>({props.item.stats.reviewCount}) • </span>
            <span className='gray'>{props.item.location}</span>
        </div>
        <p>{props.item.title}</p>
        <p><span className="bold">From ${props.item.price}</span> / person</p>
    </div>
  )
}

export default Card;
