const express = require('express')
const rootrouter = import('../backend/routes/index')

const app = express()

app.use('/api/v1',rootrouter)

app.listen(3000);
