'use strict'

const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send('<h1>Hello World, From Sarra KHELLAF</h1>')
})

module.exports = app