import AsyncHandler from "express-async-handler";
import  {User} from '../models/user.model.js';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({ path: './.env' });


//@dis Register a user
//@route post/api/user/register
//@access public

const registerUser = AsyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  // Check empty fields
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  // Check if user already exists
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered");
  }

  const hashedPassword = await bcrypt.hash(password,10);
  console.log("Hashed Password; ",hashedPassword);

  // Create new user
  const user = await User.create({
    username,
    email,
    password : hashedPassword // ⚠️ hashing
  });

  console.log(`User created ${user}`);


  if (user) {
    res.status(201).json({
      _id: user.id,
      email: user.email,
      message: "User registered successfully",
    });
  } else {
    res.status(400);
    throw new Error("User data is not valid");
  }
});

//@dis login user
//@route post/api/user/login
//@access public


const loginUser = AsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  const user = await User.findOne({ email });

  // Compare password with hashed password
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET, // fixed typo
      { expiresIn: "15m" } // fixed comma + 1m (short form for 1 minute)
    );

    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("Email or password is not valid");
  }
});


//@dis current user info
//@route post/api/user/current
//@access private


const currentUser = AsyncHandler((req,res)=>{
  res.json(req.user)
});

export {registerUser,loginUser,currentUser};
