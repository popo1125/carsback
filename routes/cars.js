// backend/routes/cars.js
const express = require('express');
const Car = require('../models/Car');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        res.json(car);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const car = new Car(req.body);
    try {
        const newCar = await car.save();
        res.status(201).json(newCar);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedCar);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Car.findByIdAndDelete(req.params.id);
        res.json({ message: 'Car deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
