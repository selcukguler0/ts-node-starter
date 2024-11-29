import express from 'express';

const app = express();
const port = 3000;

express.static('public');
//template engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  
});

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});