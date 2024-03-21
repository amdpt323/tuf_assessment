import React from 'react'
import { Link } from 'react-router-dom'

const MainPage = () => {
  return (
    <div className='app'>
      <div className='app-tbox'>
        <p style={{ textAlign: 'center', fontSize: '40px' }}>Hola Amigos !!!</p>
        <p style={{ textAlign: 'center', fontSize: '40px' }}>
          Kaise Ho? Theek Ho?
        </p>
      </div>
      <div
        className='app-lbox'
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'start',
        }}
      >
        <Link to='/makesubmission'>
          <button
            style={{
              width: '400px',
              height: '50px',
              backgroundColor: 'lightblue',
              fontSize: '20px',
            }}
          >
            Make Submisson
          </button>
        </Link>
      </div>
      <div
        className='app-rbox'
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'start',
        }}
      >
        <Link to='/viewsubmissions'>
          <button
            style={{
              width: '400px',
              height: '50px',
              backgroundColor: 'burlywood',
              fontSize: '20px',
            }}
          >
            View Submissons
          </button>
        </Link>
      </div>
    </div>
  )
}

export default MainPage
