const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({message: "Hello there!"});
})

app.listen(3000, () => {
    console.log("Server is running on 3000");
})