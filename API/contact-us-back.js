const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.post('/submit', (req, res) => {
    console.log(req);
    res.json({
        message: 'Success',
        code: 200,
    })
})
app.listen(4000, () => {
    console.log('Listening on port 4000');
});