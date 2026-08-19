import { v2 as cloudinary } from 'cloudinary'
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoutes.js'
import productRouter from './routes/productRoutes.js'


// App Config
const app = express()
const port = process.env.PORT || 4000

console.log("JWT SECRET EXISTS:", !!process.env.JWT_SECRET)
console.log("ADMIN EMAIL EXISTS:", !!process.env.ADMIN_EMAIL)
console.log("ADMIN PASSWORD EXISTS:", !!process.env.ADMIN_PASSWORD)

connectDB()
connectCloudinary()


// Middlewares
app.use(express.json())
app.use(cors())


// API endpoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)


app.get('/', (req, res) => {
    res.send("api working")
})


app.listen(port, () => {
    console.log('server started on PORT : ' + port)
})