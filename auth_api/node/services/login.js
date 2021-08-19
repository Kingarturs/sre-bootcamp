const crypto = require('crypto');
const db = require('../config/database');
const jwt = require('jsonwebtoken');

require('dotenv').config();

export const loginFunction = async (username, password) => {
  try {
    const results = await db.query(
      "SELECT username, salt, role FROM users WHERE username = ?",
      [ username ]
    );
    
    const user = results[0];
    const hashedPassword = crypto.createHash('sha512').update(password + user.salt).digest('hex');

    const rows = await db.query(
      "SELECT username, role FROM users WHERE username = ? AND password = ?",
      [username, hashedPassword],
    );

    if (rows.length > 0) {
      const token = jwt.sign(
        {
          role: rows[0].role,
        },
        process.env.JWT_SECRET,
        {
          noTimestamp: true,
        }
      )
      return token;
    }
    
    return null

  } catch (err) {
    console.error(err)
  }
}
