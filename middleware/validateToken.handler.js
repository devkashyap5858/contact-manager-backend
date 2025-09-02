import AsyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

const validateToken = AsyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error("User is not authorized");
      }

      // attach decoded user info to request
      req.user = decoded.user;
      next(); // ✅ continue to next middleware/route
    });
  } else {
    res.status(401);
    throw new Error("Authorization header missing or invalid");
  }
});

export default validateToken;
