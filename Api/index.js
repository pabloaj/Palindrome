const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors')
app.use(cors())
app.options('*', cors());
const iechoApi = require('./routers/apihost/iecho');


 app.listen(port,()=>{
    console.log(`Listening http://localhost:${port}`)
});

app.use("/apihost/iecho",iechoApi)

module.exports = app
