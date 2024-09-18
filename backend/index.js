const express = require("express")
const rootrouter = require('../backend/routes/index.js')
const { authMiddleware } = require( './middleware.js')
const cors = require("cors")
const Userrouter = require('./routes/User.js')

const app = express();
app.use(express.json());
app.use(cors());


app.use('/api/v1',rootrouter);
app.use('/api/v1/user/signup',authMiddleware,Userrouter)

app.listen(3001,function(){
    console.log(`Server is running on ${3001} `)
});
