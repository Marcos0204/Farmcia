import React from 'react'

const Card = ({ item }) => {
  return (
    <li className='card-li'>
        <div className='card-container'>
            <div className='img-container'>
                
                </div>
            <h2>{ item.title } </h2>
            <p>{item.price}</p>
        </div>
    </li>
  )
}

export default Card
