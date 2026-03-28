const db = require('../config/mysql');
const Car = require('../models/carModel');

//Listar
async function getAllCars() {
    const [rows] = await db.query('SELECT * FROM carros');

    return rows.map(
        row => new Car(row.id, row.modelo, row.marca, row.ano)
    );
};

//Buscar por id
async function getCarByid(id) {
    const [rows] = await db.query(
        'SELECT * FROM carros WHERE id = ?',
        [id]
    )
    if (!rows[0])
        return null
}