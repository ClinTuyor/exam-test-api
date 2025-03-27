const express = require('express');
const router = express.Router();

const exams = [
    { id: 1, name: 'Midterm', date: "03-26-25"},
    { id: 2, name: 'Final', date: "03-26-25"}
]

router.get('/exams', (req, res) => {
    res.json(exams);    
});

module.exports = router;