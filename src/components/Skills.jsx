import React from 'react'

export default function Skills(){
  const skills = ['Java','Python','JavaScript','React.js','Angular','Node.js','Express.js','MongoDB','MySQL','Git','Postman']
  return (
    <section id='skills' className='container'>
      <h2 className='section-title'>Technical Skills</h2>
      <div className='card'>
        <div className='skills-grid'>
          {skills.map((s)=> <div key={s} className='skill'>{s}</div>)}
        </div>
      </div>
    </section>
  )
}
