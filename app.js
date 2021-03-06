var express = require('express')
var path = require('path')

var app = express()
var port = process.env.PORT ||1337


app.use(express.static(path.join(__dirname, '')))

app.use(function(req, res, next) {
    res.set({
        'Access-Control-Allow-Origin': '*',
        // 'Content-Type': 'application/json;charset=utf-8'
    })
    next()
})


app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, 'index.html'))
})



app.listen(port, function() {
	console.log('App is running on port '+port)
})