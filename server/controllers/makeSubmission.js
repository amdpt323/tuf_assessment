const pool = require('../db')

const makeSubmission = async (req, res, next) => {
  const { username, lang, code, stdin } = req.body
  console.log(code)

  const query =
    'INSERT INTO submission (username, lang, stdin, code) VALUES ($1, $2, $3, $4) RETURNING *'
  const values = [username, lang, stdin, code]

  try {
    const client = await pool.connect()
    const result = await client.query(query, values)
    client.release()
    // console.log(result.rows[0])
    return res.json(result.rows[0])
  } catch (err) {
    const error = new Error(`Internal Server Error`)
    error.sataus = 500
    return next(error)
  }

  // res.json({ username, lang, code, stdin })

  // // const error = new Error(`Internal Server Error`)
  // // error.sataus = 500
  // // next(error)
}

module.exports = makeSubmission
