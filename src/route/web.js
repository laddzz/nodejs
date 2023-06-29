import express from "express";
import homecontrol from "../control/homecontrol";
let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homecontrol.getHomepage);

    router.get('/lad', (req, res) => {
        res.send('dung dep traiiii !!')
    })
    return app.use('/', router);
}

export default initWebRoute;