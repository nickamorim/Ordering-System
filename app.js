const express = require('express')
const app = express()

app.get('/api/:msg', function (req, res) {
  console.log('User Order: ' + req.params.msg)
  res.sendStatus(200)
})

app.listen(5000, function () {
  console.log('Example app listening on port 5000!')
})