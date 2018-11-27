const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser());

app.get('/', (req, res) => {
  res.json({
    messsage: 'CG Message Board!'
  });
});

const port = process.env.PORT || 2112;
app.listen(port, () => {
  console.log(`listening on ${port}`)
});
