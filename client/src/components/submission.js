import React, { useState } from 'react'
import axios from 'axios'

const Submission = ({ data }) => {
  const [minimized, setMinimized] = useState(true)
  const [stdOut, setStdOut] = useState('')
  const handleMinimization = () => {
    setMinimized(!minimized)
  }

  const handleCodeExecution = async () => {
    const languageMap = {
      'cpp': 54,
      'javascript': 63,
      'java': 62,
      'python': 71,
    }
    // console.log(data.lang.toLowerCase())
    try {
      const res = await axios.post(
        'https://judge0-ce.p.rapidapi.com/submissions',
        {
          source_code: data.code,
          language_id: languageMap[data.lang.toLowerCase()],
          stdin: data.stdin,
        },
        {
          headers: {
            'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
            'X-RapidAPI-Key':
              'b6d6baeaf1msh5172b04dc86361ap12826cjsneb58ca0b8658',
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      )

      const token = res.data.token
      const submissionUrl = `https://judge0-ce.p.rapidapi.com/submissions/${token}?base64_encoded=false&fields=stdout,stderr,status_id,language_id`

      const subRes = await axios.get(submissionUrl, {
        headers: {
          'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
          'X-RapidAPI-Key':
            'b6d6baeaf1msh5172b04dc86361ap12826cjsneb58ca0b8658',
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })

      const stdData = subRes.data.stdout
      console.log(subRes)
      setStdOut(stdData);
    } catch (error) {
      console.log(error)
    }
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
          <div className='codeContainer' style={{ display: 'flex' }}>
            <div style={{ paddingRight: '100px' }}>
              <p
                style={{
                  fontSize: '15px',
                  color: 'green',
                  fontFamily: 'Courier New, Courier, monospace',
                }}
              >
                StdIn:
              </p>
              <pre style={{ color: 'white' }}>{data.stdin.trim()}</pre>
            </div>

            {stdOut && (
              <div>
                <p
                  style={{
                    fontSize: '15px',
                    color: 'red',
                    fontFamily: 'Courier New, Courier, monospace',
                  }}
                >
                  StdOut:
                </p>
                <pre style={{ color: 'white' }}>{stdOut.trim()}</pre>
              </div>
            )}
          </div>
          <button
            style={{
              padding: '5px',
              textAlign: 'center',
              marginBottom: '15px',
            }}
            onClick={handleCodeExecution}
          >
            Execute
          </button>
        </div>
      )}
    </div>
  )
}

export default Submission
