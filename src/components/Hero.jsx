import React from 'react'
import profile from '../assets/profile.jpg'

export default function Hero(){
  return (
    <section className='hero container' id='hero'>
      <div className='profile'>AS</div>
      <div className='meta'>
        <h1>Hi, I'm Aakriti Sah</h1>
        <h3 style={{marginTop:6}}>Software Developer · Full-stack · ML Enthusiast</h3>
        <p>Bangalore, India · aakriti.sah@50@gmail.com</p>
        <div style={{marginTop:12,display:'flex',gap:10}}>
          <a href='https://linkedin.com/in/aakritisah' target='_blank' rel='noreferrer'>LinkedIn</a>
          <a href='https://github.com/Aakritisah' target='_blank' rel='noreferrer'>GitHub</a>
        </div>
      </div>
    </section>
  )
}
