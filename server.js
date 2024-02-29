// defining the server port
const port = 5000

// initializing installed dependencies
const express = require('express')
require('dotenv').config()
const axios = require('axios')
const app = express()
const cors = require('cors')
app.use(cors())

let homeData = "fields *; where id = 119133;";

// listening for port 5000
app.listen(5000, ()=> console.log(`Server is running on ${port}` ))

// API request
app.post('/', (req,res)=>{  
    const options = {
        method: 'POST',
        url: 'https://q00gj5u12b.execute-api.us-west-2.amazonaws.com/production/v4/games',
        headers: {
            'x-api-key':process.env.REACT_APP_API_KEY,
        },
        data: homeData
   };
   
    axios.request(options).then(function (response) {
        res.json(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}
)