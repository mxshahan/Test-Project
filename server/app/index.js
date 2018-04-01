import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors())
app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api', todoRouter)


//catch 404 Errors and forward them to error handeler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});


//Error handler funciton
app.use((err, req, res, next) => {
    const error = app.get('env') === 'development' ? err : {};
    const status = err.status || 500;
    //Respond to  client 
    res.status(status).json({
        error: {
            message: error.message
        }
    });
});


app.listen(port, () => {
    console.log(`Application Running on ${port}`)
})