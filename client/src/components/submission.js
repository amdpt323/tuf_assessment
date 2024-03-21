import React, { useState } from 'react'

const Submission = ({ data }) => {
  const [minimized, setMinimized] = useState(true)
  const handleMinimization = () => {
    setMinimized(!minimized)
  }
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'black',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          margin: ' 2vh 5vh',
          height: '5vh',
          width: 'full',
          border: '1px solid white',
        }}
      >
        <p
          style={{
            fontSize: '20px',
            color: 'white',
            fontFamily: 'Courier New, Courier, monospace',
          }}
        >
          {data.username}
        </p>
        <p
          style={{
            fontSize: '20px',
            color: 'white',
            fontFamily: 'Courier New, Courier, monospace',
          }}
        >
          {data.lang}
        </p>
        {minimized && <button onClick={handleMinimization}>▼</button>}
        {!minimized && <button onClick={handleMinimization}>▲</button>}
      </div>

      {!minimized && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            paddingLeft: '50px',
            margin: ' 0vh 5vh',
            border: '1px solid white',
            maxHeight: '100vh',
            width: 'full',
            overflow: 'scroll',
          }}
        >
          <div className='codeContainer'>
            <pre style={{ color: 'white' }}>{data.code.trim()}</pre>
          </div>
          <div className='codeContainer'>
            <p
              style={{
                fontSize: '15px',
                color: 'red',
                fontFamily: 'Courier New, Courier, monospace',
              }}
            >
              StdIn:
            </p>
            <pre style={{ color: 'white' }}>{data.stdin.trim()}</pre>
          </div>
        </div>
      )}
    </div>
  )
}

export default Submission
