import express from "express"
import cors from "cors" 
import dotenv from 'dotenv'
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
import { init as initDB } from './pkg/db/index.js';

// app config
const app = express()

// middleware
app.use(express.json())
app.use(cors())

// db conection
initDB();
dotenv.config();

// api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})

const PORT = process.env.PORT;

app.listen(PORT, async () => {
  console.log(`Service started on port ${PORT}`);
});

app.on('error', (err) => {
  console.error('Error starting the server:', err);
});

