const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
require('models/Task');
const Task = mongoose.model('tasks');


//Root route
router.get('/', (req, res) => {
    res.send('Root API route');
});

// Get all tasks in database
router.get('/tasks', async (req, res) => {
    // Using mongoose
    const filter = {};
    const tasks = await Task.find(filter);
    console.log(tasks);
    res.json(tasks);
});


// Update a task in the database

router.patch('/tasks/:id', async (req, res) => {
    console.log(req.params.id);

    // Use Mongoose schema for Task; "findOneAndUpdate"
    const filter = { id: parseInt(req.params.id)};
    const updateData = req.body;
    const updatedDoc = await Task.findOneAndUpdate(filter, updateData, { new: true });
    console.log(updatedDoc);

    res.status(200);
    res.json({ updated_task: parseInt(req.params.id)});
});

module.exports = router;