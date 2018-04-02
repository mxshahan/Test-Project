import mongoose from 'mongoose';
import config from 'config';

mongoose.Promise = global.Promise;

try {
    mongoose.connect(config.get('app.MONGO_URL'));
} catch(e) {
    mongoose.createConnection(config.get('app.MONGO_URL'));
}

mongoose.connection
    .once('open', () => console.log("MongoDB is Running Successfully..."))
    .on('error', (e) => {throw e})