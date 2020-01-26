const express = require('express');

const app = express();
const PORT = process.env.port || 5000;


const users = require('./routes/users');
app.use('/api/users',users);
const auth = require('./routes/auth');
app.use('/api/users',auth);
const contact = require('./routes/contact');
app.use('/api/users',contact);


app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`));