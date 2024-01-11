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

module.exports = router;