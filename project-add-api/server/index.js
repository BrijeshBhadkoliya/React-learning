const express = require('express')

const app = express()

const port = 8000


app.use(express.urlencoded());

app.post('/app' , async (req ,res) => {
    const user = req.query
    return res.status(200).send({
        message:"oky for runing to react",
        user
    })
})

app.listen(port, (err) => {
    console.log(`server is done for runing this is link prlce press ctrl+click in link http://localhost:${port}/app`);
    
    
} )