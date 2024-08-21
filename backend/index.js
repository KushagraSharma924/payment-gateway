const express = require('express')
const rootrouter = import('../backend/routes/index')
const cors = require('cors')
const Userrouter = import('./routes/User')

const app = express();
app.use(express.json());
app.use(cors());


app.use('/api/v1',rootrouter);
app.use('/api/v1/user/signup',Userrouter)

app.listen(3000);
