const express = require('express');
const router = express.Router();
const Student = require('../model'); 

router.post('/students', async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).send(student);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/students', async (req, res) => {
    try {
        const students = await Student.find({});
        res.status(200).send(students);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/students/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const student = await Student.findById(_id);
        if (!student) {
            return res.status(404).send();
        }
        res.status(200).send(student);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.patch('/students/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'email', 'coursename', 'university', 'year'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

        if (!student) {
            return res.status(404).send();
        }

        res.send(student);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.delete('/students/:id', async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);

        if (!student) {
            return res.status(404).send();
        }

        res.send(student);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
