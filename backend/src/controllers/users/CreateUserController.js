const db = require('../../config/database.js');

class CreateUserService {
  async execute({ name, email, password }) {

    const response = await db.query(
      `SELEC name FROM users WHERE email = ${email}`
    );

    if (response) {
      throw new Error('Email address already used');
    }

    const { rows } = await db.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3)',
      [name, email, password]
    );
  
    res.status(201).send({
      message: 'User added successfully!',
      body: {
        user: { name, email, password }
      },
    });
  }
}

module.exports = CreateUserService;