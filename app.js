const express = require('express');
const app = express();
const cors=require('cors');
const port = 3000;

app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',(req,res)=>{
    res.send('hellow my application')
})
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
