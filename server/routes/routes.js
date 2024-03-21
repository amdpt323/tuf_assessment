const express = require('express')
const router = express.Router()


const makeSubmission = require('../controllers/makeSubmission')
const viewSubmissions = require('../controllers/viewSubmissioons')

router.route('/getAllSubmissions').get(viewSubmissions)
router.route('/makeSubmission').get((req,res)=>{
 res.send('Its working too')
}).post(makeSubmission)

module.exports = router