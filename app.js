const express = require('express')
const app = express()
const port = process.env.PORT || 5500;

app.get('/', function (req, res) {
    res.send('Hello World from Express \n My name is Janna Parker, im type 2, i will fullfill your needs before my own.')
})

//app.listen(3000)

app.listen(port, () => {
    console.log(`MIKE app listening on port ${port}`)
})
