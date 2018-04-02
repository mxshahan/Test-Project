import express from 'express';
import config from 'config';
import middlewaresConfig from './conf/middlewares';
import './conf/db';

const port = config.get('app.PORT');
const app = express();
//All basic configuration done in middleware
middlewaresConfig(app);


app.listen(port, (err) => {
    if(err) throw err;

    console.log(`Application Running on ${port}`)
})