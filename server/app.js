'use strict'

const express   = require('express')
const app       = express()

// RESOURCES
const imagebox    = require('./routes/imagebox')
const api         = require('./routes/api') 

//
app.use(function(req, res, next) {
    res.set({
        'Access-Control-Allow-Origin': '*'
    })
    next()
})
app.use(express.static('../static'));

// APIS
app.get('/', (req, res) => {res.sendFile('../static/index.html')})
app.get('/imagebox', imagebox.upload)
app.get('/readapi', api.requestApi)

app.listen(80, () => {
    console.log(`app is listening at port:80`)
})
