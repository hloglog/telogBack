const express = require('express');
const router = express.Router();
const app = express();
const db = require('./config/database');

var apiRouter = require('./someurl');

app.use('/url', apiRouter)

app.listen(4000, () => {
  console.log('서버가 포트 4000에서 실행중입니다.');
});

module.exports = router;
