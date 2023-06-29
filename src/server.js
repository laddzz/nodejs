import express from 'express';
import configViewEngine from './configs/viewengine';
import initWebRoute from './route/web';
import connection from './configs/connectDB';


const app = express()
require('dotenv').config();
const port = process.env.PORT || 8080

initWebRoute(app);
configViewEngine(app)


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})