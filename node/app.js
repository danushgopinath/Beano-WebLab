const express = require('express')
const apiRoutes = require('./server/routes/api.routes')

require('./server/config/db')

const app = express()

app.use('/api', apiRoutes)

app.listen(8502, function(){
    console.log("Listening on port 8502")
})

