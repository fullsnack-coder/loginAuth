'use strict';

const app = require('./app');

const server = app.listen(app.get('port'), ()=>{
    console.log(`Server on port: ${server.address().port}`);
});

