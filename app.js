const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/user.route');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/users', userRouter);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/./views/index.html');
});

//route not found
app.use((req, res, next) => { 
    res.status(404).json({ message: 'Not found' });
 });

//server error
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});

module.exports = app;