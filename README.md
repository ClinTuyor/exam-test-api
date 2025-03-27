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
