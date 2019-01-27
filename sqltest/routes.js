const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
  response.send('Hello from Express!')
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})

// Display all users

const sqltest = require('./sqltest');
app.get('/menu', (request, response) => {
  // pool.query('SELECT * FROM menu', (error, result) => {
  //     if (error) throw error;

  //     response.send(result);
  // });
  sqltest((err, columns) => {
    response.send(columns);
  })
});