const express = require('express')
const app = express()
const cors = require('cors')


const router = require('./routes/routes')

app.use(cors())
app.use(express.json())
app.use('/api/v1', router)

app.get('/', (req, res) =>
  res.send('This is the backend api made using Express')
)

const port = process.env.port || 8000

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`app listening on port ${port}...`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
