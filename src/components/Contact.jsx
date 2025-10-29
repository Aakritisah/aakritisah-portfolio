import React from 'react'

export default function Contact(){
  return (
    <section id='contact' className='container'>
      <h2 className='section-title'>Contact</h2>
      <div className='card'>
        <p>Email: <a href='mailto:aakriti.sah@50@gmail.com'>aakriti.sah@50@gmail.com</a></p>
        <p>LinkedIn: <a href='https://linkedin.com/in/aakritisah' target='_blank' rel='noreferrer'>linkedin.com/in/aakritisah</a></p>
        <p>GitHub: <a href='https://github.com/Aakritisah' target='_blank' rel='noreferrer'>github.com/Aakritisah</a></p>
        <p style={{marginTop:8}}>Resume: <a href='/resume.pdf' target='_blank'>Download PDF</a></p>
      </div>
    </section>
  )
}
