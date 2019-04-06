const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;


app.get('/api/message', (req, res) => {
    console.log('Message requested');

    res.send({message: 'Message from backend'});
});

app.listen(PORT, () => {
    console.log('Server started on port ' + PORT);
});