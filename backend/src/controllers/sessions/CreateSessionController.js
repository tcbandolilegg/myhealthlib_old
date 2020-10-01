const db = require('../../config/database.js');

class CreateSessionService {
  async execute({ email, password }) {

    const user = await db.query(
      `SELEC name FROM users WHERE email = ${email} AND password = ${password}`
    );

    if (!user) {
      throw new Error('Login error, ckeck your credentials.');
    }
  
    return response.json(user);
  }
}

module.exports = CreateSessionService;