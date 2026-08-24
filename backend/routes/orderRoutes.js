import express from 'express'
import {placeOrder, placeOrderPaytm, placeOrderGooglepay, allOrders, userOrders, upadteStatus} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()

// Admin Features
orderRouter.post('/list', adminAuth,allOrders)
orderRouter.post('/status', adminAuth,upadteStatus)

// Payment Features
orderRouter.post('/place',authUser, placeOrder)
orderRouter.post('/paytm',authUser, placeOrderPaytm)
orderRouter.post('/place',authUser, placeOrderGooglepay)

// User Feature
orderRouter.post('/userorders', authUser, userOrders)

export default orderRouter
