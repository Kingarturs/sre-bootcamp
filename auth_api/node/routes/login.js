import { loginFunction } from '../services/login';

export const login = async (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;
  
  const token = await loginFunction(username, password);

  if (token) {
    res.send({"data": token});
  } else {
    res.status(403).send("Incorrect user or password");
  }

  next();
}
