
const app = require('./app');

//CONFIGURATION
require('dotenv').config();
const PORT = process.env.PORT


//LISTEN
app.listen(PORT, () => {
    console.log(`Listening to on PORT: ${PORT}`)
})