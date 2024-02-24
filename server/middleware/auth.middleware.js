import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET || "your_jwt_secret";

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, jwtSecret, (err, user) => {
      if (err) {
        res.status(403);
      }

      req.user = user;
      next();
    });
  } else {
    res.status(401);
  }
};

export default authenticate;
