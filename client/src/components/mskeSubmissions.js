import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'



const MakeSubmissions = () => {
  const [lang, setLang] = useState('')
  

  const handleChangeSelect = (e) => {
    setLang(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const username = e.target.elements.username.value
    const code = e.target.elements.code.value
    const stdin = e.target.elements.stdin.value 
    if(username === '' || code==='' || lang===''){
      toast.warn('Please fill all the fields')
    }else{

      await axios({
        method: 'post',
        url: 'http://localhost:8000/api/v1/makeSubmission',
        data: {
          username,
          code,
          stdin,
          lang,
        },
      })
        .then((res) => {
          console.log(res)
          toast.success('Submission made successfully!!')
          e.target.reset()
        })
        .catch((err) => {
          console.log(err)
          toast.error('Oops server might have crashed !!')
        })
    }
  }
  return (
    <div>
      <ToastContainer/>
      <form onSubmit={handleSubmit}>
        <div className='mainbox'>
          <div className='left'>
            <div>
              <p>Username</p>
              <input type='text' name='username' id='username' />
            </div>
            <div>
              <p>code language</p>
              <select
                value={lang}
                onChange={handleChangeSelect}
                style={{ width: '150px', height: '25px' }}
                name='lang'
                id='lang'
              >
                <option value=''>Select Option</option>
                <option value='cpp'>C++</option>
                <option value='java'>Java</option>
                <option value='python'>Python</option>
                <option value='javascript'>JavaScript</option>
              </select>
            </div>
            <div style={{ paddingTop: '170px' }}>
              <p>StdIn</p>
              <textarea name='stdin' id='stdin' cols='30' rows='10'></textarea>
            </div>
          </div>
          <div className='right'>
            <p style={{ textAlign: 'center' }}>code here</p>
            <textarea name='code' id='code' cols='110' rows='30'></textarea>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: '25px',
              }}
            >
              <button
                type='submit'
                style={{
                  width: '80px',
                  height: '30px',
                  borderWidth: 1,
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default MakeSubmissions
