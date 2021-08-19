const jwt = require('jsonwebtoken');
require('dotenv').config();

export const protectFunction = (authorization) => {
  try {
    const user = jwt.verify(authorization, process.env.JWT_SECRET);
    if (user) {
      return "You are under protected data"
    }
    return null
  } catch (err) {
    console.error(err)
    return null
  }
}
