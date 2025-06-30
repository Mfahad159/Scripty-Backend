const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!');
})
app.get('/mian', (req, res) => {
  res.send('This is Tweeter Bro!!');
})
app.get('/login', (req, res) => {
  res.send('<h1>Login karlo bhaoo</h1>');
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
