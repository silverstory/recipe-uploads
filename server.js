const express = require('express');

const uploadrecipe = require('./uploadrecipe');

const cors = require('cors');

const server = express();

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};

server.use(cors(corsOptions));

// first, create a folder on root c:
// \uploads\uploadrecipe\photos

// how to use
// http://localhost:3131/uploadrecipe
// METHOD is POST
// body is form data
// all three fields is required here
// 1. filename e.g. vulcanS650.jpg
// 2. folder photos
//            the folder field is dynamic meaning
//            you can add a new folder just by supplying
//            value to folder field, just make sure that
//            the equivalent folder name exist in file system.
// 3. file the datafiles

server.post('/uploadrecipe', uploadrecipe);

server.listen(3131, () => {
  console.log('Server started!');
});
