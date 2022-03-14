const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;
const BASE_URL = ""
app.use(express.static('public'));

//Routes
app.use(BASE_URL, require('./routes'));  //http://127.0.0.1:8000/alien_abduction

app.listen(PORT, () => console.log(`Express server currently running on port ${PORT}`));
