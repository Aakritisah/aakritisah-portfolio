import React from 'react'

export default function Projects(){
  const projects = [
    {name:'Railway Reservation System', tech:'Java', desc:'File-based booking system with real-time PNR generation.'},
    {name:'International Food Ordering System', tech:'Node.js, MySQL', desc:'Secure full-stack platform with authentication and optimized queries.'},
    {name:'Personal Finance Assistant', tech:'React, Python ML', desc:'Smart expense tracker using ML for spending insights.'},
    {name:'Bank Management System', tech:'Java, MySQL, Swing', desc:'ATM-like desktop app with secure login and transaction management.'}
  ]
  return (
    <section id='projects' className='container'>
      <h2 className='section-title'>Projects</h2>
      <div className='projects'>
        {projects.map((p)=>(
          <article key={p.name} className='card'>
            <h3>{p.name}</h3>
            <p style={{color:'var(--muted)'}}>{p.desc}</p>
            <p style={{marginTop:8}}><strong>Tech:</strong> {p.tech}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
