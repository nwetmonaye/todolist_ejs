const express = require('express');


const app = express();
app.use(express.static('public'));
const port = 3000; 
const tasks = [
    { text: 'Task 1', checked: true },
    { text: 'Task 2', checked: false },
    { text: 'Task 3', checked: false }
];

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('todolist', { tasks: tasks });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
