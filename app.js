const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const businessRouter = require('./routes/business.rout');
const meetingRouter = require('./routes/meeting.rout');

require('./services/db.service');
app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use('/business', businessRouter);
app.use('/meeting', meetingRouter);



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
