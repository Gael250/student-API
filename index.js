const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// In memory data
let students = [
    {id: 1, name: "Gael"},
    {id: 2, name: "Gabriel"},
    
]

// fetching a specific student
app.get("/student/:id/school/:name", (req, res) => {
    const {id, name} = req.params;
    const student = students.find(s => s.id === parseInt(id ) && s.school);
    if (!student) {
        return res.status(404).json({error: "Student not found"});
    }
    res.json(student);
});

// fetching all students
app.get("/", (req, res) => {
    res.json( students);
});

// create Students
app.post("/addnew", (req, res) => {
    const {name} = req.body;
    const newStudent = { id: students.length + 1, name };
    students.push(newStudent);
    res.status(201).json(newStudent);
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
