const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;
const BASE_URL = process.env.PORT || "";
app.use(express.static('public'));

app.set('PORT', process.env.PORT || 3333);
//Routes
app.use(process.env.BASE_URL || BASE_URL, require('./routes'));

app.listen(PORT, () => console.log(`Express server currently running on port ${PORT}`));

