import express from 'express'
import dotenv from "dotenv"
dotenv.config({ path: './.env' });
import errorHandler from './middleware/error.handler.js';

const app = express()

const port = process.env.PORT || 8000

app.use(express.json());


//routes import
import contactRoute from "./routes/contact.routes.js"
app.use("/api/contacts",contactRoute)

import userRoute from './routes/user.routes.js'
app.use("/api/user",userRoute)

app.use(errorHandler)

//connect db
import connectDB from "./db/index.js";
connectDB()
.then(()=>{app.listen(port, ()=>{
  console.log(`server running on port ${port}`);
});

})
.catch((error)=>{
  console.log("MONGO db connection failed !!!",error);
})

