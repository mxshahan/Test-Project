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

// const staticServe = express.static('../..');

// app.use("/", staticServe);
// app.use("*", staticServe);

//All basic configuration done in middleware
middlewaresConfig(app);
//import userRoutes from './modules/User/user.routes'
//app.use('/api/user', userRoutes)
apiRoutes(app);

app.use(fallback('index.html', { root: publicDir }));


app.listen(port, (err) => {
    if(err) throw err;
    console.log(`Application Running on ${port}`)
})