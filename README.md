# exam-test-api


How to push to main branch:
git add .
git commit -m "yourmessage"
git push origin main

How to create branch
git checkout -b "branch-name"
git branch

How to push to member-branch
git add .
git commit -m "yourmessage"
git push origin "member-branch"

BASE SETUP
1. Clone repository to local:
git clone https://github.com/ClinTuyor/exam-test-api
cd exam-test-api

2. Create app.js file
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get ('/', (req, res) => {
    res.json({ message: "Exam test API" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

3. Create routes and add node_modules and .env to .gitignore
mkdir routes
touch routes/exams.js

git i express
git i dotenv

MEMBER'S TASK
1. Member 1: Add GET feature to routes/exams.js endpoint
git checkout -b branch-one

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

2. Member 2: Add POST feature to routes/exams.js endpoint
git checkout -b branch-two

router.post('/exams', (req, res) => {
    const newExam = req.body;
    exams.push(newExam);
    res.status(201).json({ message: "Exam added", newExam });
});

3. Member 3: Add UPDATE feature to routes/exams.js endpoint
git checkout -b branch-three

