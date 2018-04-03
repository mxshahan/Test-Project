const path = require('path');

module.exports = {
    app: {
        MONGO_URL: 'mongodb://root:12345@ds061474.mlab.com:61474/yumi',
        PORT: process.env.PORT || 5000,
        SERVER: 'http://localhost:5000'
    },
    auth: {
        JWT_SECRET: 'mysecretkeyhere',
    }
}