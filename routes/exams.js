const express = require('express');
const router = express.Router();

const exams = [
    { id: 1, name: 'Midterm', date: "03-26-25"},
    { id: 2, name: 'Final', date: "03-26-25"}
]

router.get('/exams', (req, res) => {
    res.json(exams);    
});

router.post('/exams', (req, res) => {
    const newExam = req.body;
    exams.push(newExam);
    res.status(201).json({ message: "Exam added", newExam });
});

router.put('/exams/:id', (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    const examIndex = exams.findIndex(e => e.id == id);

    if (examIndex === -1) return res.status(404).json({ message: "Exam not found" });

    exams[examIndex] = { ...exams[examIndex], ...updateData };
    res.json({ message: "Exam updated", exam: exams[examIndex] });
});

module.exports = router;