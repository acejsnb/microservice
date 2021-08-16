const express = require('express');

const app = express();

const router = express.Router();

router.get('/', (req, res, next) => {
  req.url = '/index.html';
  next();
});

app.use(router);

// app.use(express.static('./meri-design'))
// app.use(express.static('./production'));
app.use(express.static('./production'));

const open = require('opn');

// 启动成功打开网页
const port = 3550; // 端口号
module.exports = app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  open(`http://localhost:${port}`);
  console.log(`Listening at http://localhost:${port}\n`);
});
