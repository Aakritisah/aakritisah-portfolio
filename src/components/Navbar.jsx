import React from 'react'

export default function Navbar({dark, setDark}){
  return (
    <nav className='navbar'>
      <div className='brand'>Aakriti Sah</div>
      <div style={{display:'flex',alignItems:'center',gap:12}}>
        <div className='links'>
          <a href='#about'>About</a>
          <a href='#skills'>Skills</a>
          <a href='#projects'>Projects</a>
          <a href='#experience'>Experience</a>
          <a href='#contact'>Contact</a>
        </div>
        <button onClick={()=>setDark(!dark)} aria-label='Toggle dark mode'>
          {dark ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  )
}
