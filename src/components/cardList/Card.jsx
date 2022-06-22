import React from 'react'

const Card = ({ item }) => {
  return (
    <li className='card-li'>
        <div className='card-container'>
            <div className='img-container'>
                <img src={item.img} alt='' />
            </div>
            <div className='card-info'>
                <h2>{ item.title } </h2>
                <p>{item.price}</p>
            </div>
        </div>
    </li>
  )
}

export default Card
