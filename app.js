require('dotenv').config();
const express = require('express');
const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');
const connectDB = require('./db/connect');
const app = express();



//middleware
app.use(express.json());
app.use(notFoundMiddleware);
app.use(errorMiddleware);


//product routes
app.get('/', (req, res) => {
    res.send('<h1>Store API /h1><a href="/api/v1/product">Products Route</a>')
});

const PORT = process.env.PORT || 4000;

const start = async () => {
    await connectDB(process.env.MONGO_URI)
    ;app.listen(PORT, () => {
        console.log(`Server started on PORT ${PORT}`)
    });
}

start();