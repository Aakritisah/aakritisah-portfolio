import React from 'react'

export default function Footer(){
  return (
    <footer>
      <div className='container'>
        <p>© {new Date().getFullYear()} Aakriti Sah · Built with React & Vite</p>
      </div>
    </footer>
  )
}
