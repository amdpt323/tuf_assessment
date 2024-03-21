const pool = require('../db')


const viewSubmissions = async (req,res)=>{
 const client = await pool.connect()
 const data = await client.query(
  'SELECT * FROM submission'
 )
 client.release()
 //console.log(data.rows)
 res.json({data:data.rows})
}


module.exports = viewSubmissions