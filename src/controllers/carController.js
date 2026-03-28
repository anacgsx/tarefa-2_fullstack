const carRepository = require("../repositories/carRepository");

//Listar
async function listCars(req, res) {
    const cars = await carRepository.getAllCars();
    res.json(cars);
}

//Buscar por id
async function getCar(req, res) {
    const car = await carRepository.getCarById(req.params.id);

    if (!car) {
        return res.status(404).json({ erro: "carro não encontrado" })
    }
    res.json(car);   
}

// POST CreateCar
async function createCar(req, res) {
    const { modelo, marca, ano } = req.body;

    if (!modelo || !marca || !ano) {
        return res.status(400).json({ erro: "modelo, marca e ano são obrigatórios" });
    }

    const newCar = await carRepository.createCar({ modelo, marca, ano });
    res.status(201).json(newCar);
}

//PUT UpdateCar
async function updateCar(req, res) {
    const car = await carRepository.updateCar(
        req.params.id, req.body
    );
    res.json(car);
}

//DELETE DeleteCar
async function deleteCar(req, res) {
    await carRepository.deleteCar(req.params.id);
    res.status(204).send();
}

module.exports = {
    listCars,
    getCar,
    createCar,
    updateCar,
    deleteCar
}; 