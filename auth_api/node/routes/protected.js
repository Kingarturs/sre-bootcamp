import { protectFunction } from '../services/protected';

export const protect = (req, res, next) => {
  let authorization = req.headers.authorization;

  const message = protectFunction(authorization);
  if (message) {
    res.send({"data": message});
  } else {
    res.status(403).send({"data": "You are not allowed access"})
  }
  next();
}
