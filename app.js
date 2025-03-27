const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get ('/', (req, res) => {
    res.json({ message: "Exam test API" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});