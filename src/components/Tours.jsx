import React from 'react'
import { tours } from '../data'
import  Title from './Title'

const Tours = () => {
  return (
    <section class="section" id="tours">
      <Title title='our' subTitle='services' />

<div className='section-center services-center'>
  {tours.map((tour) => {
    const { id, image,date, title, info, location, duration, cost} = tour
    return (
      <article className='tour-card' key={id}>
        <div className='tour-img-container'>
            <img src={image} className='tour-img' alt="" />
            <p className='tour-date'> {date}</p>
        </div>
            <div className="tour-info">
              <div className="tour-tltle">
         <h4>{title}</h4>
        </div>
        <p>{info}</p>
        <div className='tour-footer'> 
<p>
<span> </span>

</p>

        </div>
        </div>
      </article>
    )
  })}
  
    </div>
  </section>
  )
}

export default Tours