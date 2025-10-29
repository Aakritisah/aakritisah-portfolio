import React from 'react'

export default function Experience(){
  const exp = [
    {role:'Web Development Intern', company:'Nepromedia Pvt. Ltd', time:'Jun–Jul 2024', details:'Built RESTful APIs (Node.js, Express) and responsive UIs; improved integration efficiency by 30%.'},
    {role:'Quality Assurance Intern', company:'Bitspanda Technologies Pvt. Ltd', time:'Jun–Jul 2024', details:'Conducted manual QA and API testing (Postman); increased test coverage by 40%.'}
  ]
  return (
    <section id='experience' className='container'>
      <h2 className='section-title'>Experience</h2>
      <div style={{display:'grid',gap:12}}>
        {exp.map((e)=>(
          <div key={e.role} className='card'>
            <h3>{e.role} — {e.company}</h3>
            <p style={{fontStyle:'italic'}}>{e.time}</p>
            <p>{e.details}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
