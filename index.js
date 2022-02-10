const user = process.env.USER

if(process.argv[2] === 'web49') {
    console.log('hello!')
} else {
    console.log('nooooo')
}

console.log(`the user is ${user}`)

const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
    res.json({ message: 'hey there'})
})

const PORT = 9000;
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})