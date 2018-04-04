import express from 'express';
import config from 'config';
import middlewaresConfig from './conf/middlewares';
import apiRoutes from './modules/routes';
import fallback from 'express-history-api-fallback';
import './conf/db';

const port = config.get('app.PORT');
const app = express();

const publicDir = `${__dirname}./../../public`;

app.use(express.static(publicDir));
app.use('/admin', express.static(`${__dirname}./../../admin`));

//All basic configuration done in middleware
middlewaresConfig(app);

apiRoutes(app);

app.use(fallback('index.html', { root: publicDir }));


app.listen(port, (err) => {
    if(err) throw err;
    console.log(`Application Running on ${port}`)
})