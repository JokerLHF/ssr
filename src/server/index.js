import express from 'express';
import { render } from './utils/utils';
const app = express();
app.use(express.static('public'));


app.get('*', function (req, res) {
  res.send(render(req));
})
const server1 = app.listen(3000);