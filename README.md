# 👗 Dress Ecommerce — Full Stack MERN E-Commerce Platform

> A full-stack **MERN E-Commerce Web Application** developed using **React, Node.js, Express.js, MongoDB, Mongoose, and Tailwind CSS**. The application provides a complete online clothing shopping
experience with product browsing, authentication, cart management, order placement, online payments, and a dedicated admin panel for managing products and orders.

---

# 📖 Overview

The **Dress Ecommerce** application is a modern full-stack clothing shopping platform designed to simulate a real-world online fashion store.

The project consists of three major parts:

* **Customer Frontend** — React-based shopping interface
* **Backend API** — Node.js + Express.js REST API
* **Admin Panel** — Separate React-based dashboard for store management

The application allows customers to browse products, filter products by category, view product details, add products to their cart, place orders, and make online payments using Stripe.

Administrators can securely log in to the admin panel, add products, upload product images, remove products, and manage customer orders.

---

# 🚀 Key Features

## 🛍️ Customer Shopping

Users can:

* Browse available products
* View product details
* Search for products
* Filter products by category
* Filter products by sub-category
* View bestseller products
* Select product sizes
* Add products to cart
* Update product quantities
* Remove products from cart
* View cart total
* Place orders
* View previous orders

---

## 🔐 User Authentication

The application provides user authentication using **JWT**.

Features include:

* User Registration
* User Login
* Password Hashing using bcrypt
* JWT Token Generation
* Protected User Routes
* Authentication Middleware
* Persistent Login Session

User passwords are securely hashed before being stored in MongoDB.

---

## 👗 Product Management

Products contain information such as:

* Product Name
* Description
* Price
* Category
* Sub-category
* Available Sizes
* Product Images
* Bestseller Status
* Product Creation Date

The admin can:

* Add new products
* Upload multiple product images
* View product list
* Remove products
* Manage product information

---

## 🖼️ Cloudinary Image Upload

Product images are uploaded and stored using **Cloudinary**.

The backend uses:

* Multer for handling multipart/form-data
* Cloudinary for cloud image storage
* Secure image URLs for displaying products

The application supports uploading up to **four product images** for a product.

---

## 🛒 Shopping Cart

The cart system allows users to:

* Add products to cart
* Select product size
* Increase product quantity
* Decrease product quantity
* Update cart items
* Remove items
* Retrieve cart data

Cart information is associated with the authenticated user and stored in MongoDB.

---

## 📦 Order Management

Customers can:

* Place orders
* Provide delivery address
* Select payment method
* View order history
* Track order status

The system stores:

* User ID
* Ordered products
* Quantity
* Amount
* Delivery address
* Payment method
* Payment status
* Order status
* Order date

---

## 💵 Cash on Delivery

The application supports **Cash on Delivery (COD)**.

When a COD order is placed:

1. Order information is received by the backend.
2. Order is stored in MongoDB.
3. Payment status is initially set to false.
4. User cart is cleared.
5. Order confirmation is returned to the frontend.

---

## 💳 Stripe Payment Integration

The application integrates **Stripe Checkout** for online payments.

Payment workflow:

```text
Customer
    │
    ▼
Select Products
    │
    ▼
Shopping Cart
    │
    ▼
Place Order
    │
    ▼
Stripe Checkout
    │
    ├───────────────┐
    │               │
    ▼               ▼
Payment Success   Payment Cancelled
    │               │
    ▼               ▼
Verify Payment    Remove Order
    │
    ▼
Update Payment Status
    │
    ▼
Clear Cart
```

The backend creates Stripe Checkout sessions and verifies the payment result before updating the order.

---

# 👨‍💼 Admin Panel

The project contains a separate **React Admin Dashboard** for managing the store.

Administrators can:

* Login securely
* Add products
* Upload product images
* View product inventory
* Remove products
* View customer orders
* Update order status

### Admin Dashboard Structure

```text
Admin Login
     │
     ▼
Admin Dashboard
     │
 ┌───┼─────────────┐
 │   │             │
 ▼   ▼             ▼
Add  Product      Orders
Product List     Management
```

---

# 🏗️ System Architecture

```text
                       ┌──────────────────────┐
                       │     Customer         │
                       │    React Frontend    │
                       └──────────┬───────────┘
                                  │
                              Axios API
                                  │
                                  ▼
                       ┌──────────────────────┐
                       │   Node.js + Express  │
                       │      REST API        │
                       └───────┬───────┬──────┘
                               │       │
                    ┌──────────┘       └───────────┐
                    ▼                              ▼
          ┌─────────────────┐             ┌─────────────────┐
          │ MongoDB Atlas   │             │   Cloudinary    │
          │    Database     │             │ Image Storage   │
          └─────────────────┘             └─────────────────┘
                              
                       ┌──────────────────────┐
                       │    Stripe Checkout   │
                       │   Online Payments    │
                       └──────────────────────┘


                       ┌──────────────────────┐
                       │     Admin Panel      │
                       │    React + Vite      │
                       └──────────┬───────────┘
                                  │
                              Axios API
                                  │
                                  ▼
                       ┌──────────────────────┐
                       │   Express Backend    │
                       └──────────────────────┘
```

---

# 🛠️ Tech Stack

| Technology     | Purpose                 |
| -------------- | ----------------------- |
| React          | Frontend Development    |
| Vite           | Frontend Build Tool     |
| Tailwind CSS   | UI Styling              |
| React Router   | Client-Side Routing     |
| Axios          | API Communication       |
| React Toastify | Notifications           |
| Node.js        | Backend Runtime         |
| Express.js     | REST API Development    |
| MongoDB        | Database                |
| Mongoose       | MongoDB ODM             |
| JWT            | Authentication          |
| bcrypt         | Password Hashing        |
| Multer         | File Upload Handling    |
| Cloudinary     | Image Storage           |
| Stripe         | Online Payment          |
| JavaScript     | Application Development |
| Git & GitHub   | Version Control         |

---

# 📂 Project Structure

```text
Dress Ecommerce
│
├── frontend/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProductItem.jsx
│   │   │   └── Searchbar.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Collection.jsx
│   │   │   ├── Product.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── PlaceOrder.jsx
│   │   │   ├── Orders.jsx
│   │   │   ├── Verify.jsx
│   │   │   ├── About.jsx
│   │   │   └── Contact.jsx
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── admin/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Sidebar.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Add.jsx
│   │   │   ├── List.jsx
│   │   │   └── Orders.jsx
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   │
│   ├── config/
│   │   ├── cloudinary.js
│   │   └── mongodb.js
│   │
│   ├── controllers/
│   │   ├── userController.js
│   │   ├── productController.js
│   │   ├── cartController.js
│   │   └── orderController.js
│   │
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── adminAuth.js
│   │   └── multer.js
│   │
│   ├── models/
│   │   ├── userModel.js
│   │   ├── productModel.js
│   │   └── orderModel.js
│   │
│   ├── routes/
│   │   ├── userRoutes.js
│   │   ├── productRoutes.js
│   │   ├── cartRoute.js
│   │   └── orderRoutes.js
│   │
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# 🔗 REST API Structure

The backend exposes REST API endpoints using Express.js.

## 👤 User APIs

```text
POST /api/user/register
POST /api/user/login
POST /api/user/admin
```

---

## 👗 Product APIs

```text
GET  /api/product/list
POST /api/product/single
POST /api/product/add
POST /api/product/remove
```

Admin authentication is required for product creation and deletion.

---

## 🛒 Cart APIs

```text
POST /api/cart/get
POST /api/cart/add
POST /api/cart/update
```

Cart APIs are protected using authentication middleware.

---

## 📦 Order APIs

```text
POST /api/order/place
POST /api/order/stripe
POST /api/order/userorders
POST /api/order/verifyStripe
POST /api/order/list
POST /api/order/status
```

Admin authentication is required for viewing all orders and updating order status.

---

# 🗄️ Database Design

The application uses **MongoDB** with **Mongoose**.

## 👤 User Collection

```text
User
│
├── name
├── email
├── password
└── cartData
```

---

## 👗 Product Collection

```text
Product
│
├── name
├── description
├── price
├── image[]
├── category
├── subCategory
├── sizes[]
├── bestseller
└── date
```

---

## 📦 Order Collection

```text
Order
│
├── userId
├── items[]
├── amount
├── address
├── status
├── paymentMethod
├── payment
├── date
├── pytmOrderId
└── transactionId
```

---

# 🔐 Authentication & Authorization

The application uses **JWT-based authentication**.

### User Authentication Flow

```text
User Registration
       │
       ▼
Password Hashing
       │
       ▼
Store User in MongoDB
       │
       ▼
Generate JWT Token
       │
       ▼
Frontend Stores Token
       │
       ▼
Protected API Requests
```

### Admin Authentication

```text
Admin Login
     │
     ▼
Validate Admin Credentials
     │
     ▼
Generate JWT Token
     │
     ▼
Admin Panel Access
     │
     ▼
Protected Admin APIs
```

---

# ☁️ Cloud Services

The project integrates external cloud services for important application functionality.

### MongoDB Atlas

Used for:

* User data
* Product data
* Cart data
* Order data

### Cloudinary

Used for:

* Product image uploads
* Cloud image storage
* Image URL generation

### Stripe

Used for:

* Online checkout
* Payment processing
* Payment verification

---

# ⚙️ Functional Workflow

```text
                    Application Start
                           │
                           ▼
                    Customer Website
                           │
                    ┌──────┴──────┐
                    ▼             ▼
               Register        Login
                    │             │
                    └──────┬──────┘
                           ▼
                      Home Page
                           │
                           ▼
                    Browse Products
                           │
             ┌─────────────┼──────────────┐
             ▼             ▼              ▼
          Search        Filter         Product
                                       Details
                                         │
                                         ▼
                                    Select Size
                                         │
                                         ▼
                                     Add Cart
                                         │
                                         ▼
                                  Shopping Cart
                                         │
                                         ▼
                                   Place Order
                                         │
                              ┌──────────┴─────────┐
                              ▼                    ▼
                             COD                 Stripe
                              │                    │
                              ▼                    ▼
                       Order Created       Stripe Checkout
                                                   │
                                                   ▼
                                            Payment Verification
                                                   │
                              ┌────────────────────┘
                              ▼
                         Order Confirmed
                              │
                              ▼
                         Order History
```

---

# 🎨 Frontend Pages

The customer-facing application includes:

| Page        | Purpose                            |
| ----------- | ---------------------------------- |
| Home        | Landing page and featured products |
| Collection  | Product browsing and filtering     |
| Product     | Product details and size selection |
| Cart        | Shopping cart management           |
| Login       | User authentication                |
| Place Order | Address and payment selection      |
| Orders      | Customer order history             |
| Verify      | Payment verification               |
| About       | Store information                  |
| Contact     | Contact information                |

---

# 👨‍💼 Admin Panel Pages

The admin application includes:

| Page         | Purpose                  |
| ------------ | ------------------------ |
| Login        | Admin authentication     |
| Add Product  | Add new products         |
| Product List | View and remove products |
| Orders       | Manage customer orders   |

---

# 🧠 Technical Concepts Demonstrated

## React Development

* Functional Components
* React Hooks
* useState
* useEffect
* Context API
* React Router
* Component Reusability
* Form Handling

---

## Backend Development

* Node.js
* Express.js
* REST APIs
* MVC-style separation
* Middleware
* Authentication
* Error Handling
* CRUD Operations

---

## Database Management

* MongoDB
* Mongoose Schemas
* MongoDB Queries
* Data Relationships
* CRUD Operations

---

## Authentication & Security

* JWT Authentication
* bcrypt Password Hashing
* Protected Routes
* Admin Authorization
* Environment Variables

---

## Payment Integration

* Stripe Checkout
* Payment Session Creation
* Payment Verification
* Order Payment Status

---

## File Upload

* Multer
* Multipart Form Data
* Cloudinary API
* Multiple Image Upload

---

# 📈 Software Engineering Principles

The project demonstrates:

* Modular Architecture
* Separation of Frontend and Backend
* Reusable React Components
* RESTful API Design
* Middleware-Based Authentication
* MVC-Style Backend Organization
* Database Abstraction using Mongoose
* Environment-Based Configuration
* Component-Based UI Development
* Cloud Service Integration

---

# 🧪 Error Handling & Validation

The backend includes error handling for:

* Invalid authentication
* Missing JWT tokens
* Invalid credentials
* Database errors
* Product upload errors
* Payment errors
* Invalid requests

Frontend notifications are displayed using **React Toastify** to provide user feedback.

---

# 🚀 Installation & Setup

## 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd Dresss-Ecommerce
```

---

## 2. Install Frontend Dependencies

```bash
cd frontend
npm install
```

---

## 3. Install Backend Dependencies

```bash
cd ../backend
npm install
```

---

## 4. Install Admin Dependencies

```bash
cd ../admin
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside the **backend** directory.

```env
PORT=4000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

ADMIN_EMAIL=your_admin_email

ADMIN_PASSWORD=your_admin_password

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key

STRIPE_SECRET_KEY=your_stripe_secret_key
```

Create a `.env` file inside the **frontend** directory:

```env
VITE_BACKEND_URL=http://localhost:4000
```

For the admin panel:

```env
VITE_BACKEND_URL=http://localhost:4000
```

> ⚠️ Never commit `.env` files or API keys to GitHub. Add them to `.gitignore`.

---

# ▶️ Running the Application

## Start Backend

```bash
cd backend
npm run server
```

The backend will run on:

```text
http://localhost:4000
```

---

## Start Customer Frontend

Open another terminal:

```bash
cd frontend
npm run dev
```

The Vite development server will start the customer application.

---

## Start Admin Panel

Open another terminal:

```bash
cd admin
npm run dev
```

The Vite development server will start the admin dashboard.

---

# 🔄 Complete Application Architecture

```text
                 ┌─────────────────────┐
                 │   Customer Browser   │
                 └──────────┬──────────┘
                            │
                            ▼
                 ┌─────────────────────┐
                 │ React + Vite        │
                 │ Tailwind CSS        │
                 └──────────┬──────────┘
                            │
                         Axios
                            │
                            ▼
                 ┌─────────────────────┐
                 │ Node.js + Express   │
                 │ REST API            │
                 └───────┬─┬─┬─┬──────┘
                         │ │ │ │
             ┌───────────┘ │ │ └───────────┐
             ▼             ▼ ▼             ▼
         MongoDB       Cloudinary       Stripe
         Database      Image Storage    Payments
             ▲
             │
             │
      ┌──────┴───────────┐
      │                  │
      │                  ▼
      │        ┌──────────────────┐
      └────────│   Admin Panel    │
               │ React + Vite     │
               └──────────────────┘
```

---

# 🎯 Learning Outcomes

This project provided practical experience in:

* Full Stack Web Development
* MERN Stack Development
* React Application Development
* REST API Development
* Node.js & Express.js
* MongoDB & Mongoose
* JWT Authentication
* Password Hashing
* Admin Authorization
* Cloudinary Integration
* Stripe Payment Integration
* File Upload Handling
* Shopping Cart Development
* Order Management
* Responsive UI Development
* Git & GitHub

---

# 🔮 Future Enhancements

Potential improvements include:

* Admin Dashboard Analytics
* Product Edit Functionality
* Advanced Product Search
* Product Reviews & Ratings
* Wishlist
* Coupon & Discount System
* Inventory Management
* Stock Availability
* Email Order Confirmation
* Password Reset
* User Profile Management
* Razorpay Payment Integration
* Order Tracking
* Invoice/PDF Generation
* Product Recommendations
* Pagination
* Advanced Admin Statistics
* Deployment using cloud hosting

---

# 📸 Application Modules

The project contains three major application modules:

```text
┌─────────────────────────────────────────┐
│          DRESS ECOMMERCE SYSTEM         │
├─────────────────┬───────────────────────┤
│                 │                       │
│ Customer        │ Admin                 │
│ Frontend        │ Panel                 │
│                 │                       │
├─────────────────┼───────────────────────┤
│                 │                       │
│ • Products      │ • Add Products        │
│ • Search        │ • Product List        │
│ • Cart          │ • Remove Products     │
│ • Orders        │ • Order Management    │
│ • Payments      │ • Admin Login         │
│ • Authentication│                       │
│                 │                       │
└─────────────────┴───────────────────────┘
                         │
                         ▼
                 Node.js Backend
                         │
              ┌──────────┼──────────┐
              ▼          ▼          ▼
           MongoDB   Cloudinary   Stripe
```

---

# 👨‍💻 Author

**Soumya Chattopadhyay**

Full Stack Developer | MCA Graduate

### Technical Skills Demonstrated

* React.js
* JavaScript
* Tailwind CSS
* Node.js
* Express.js
* MongoDB
* Mongoose
* REST API
* JWT
* bcrypt
* Cloudinary
* Stripe
* Git
* GitHub
* Full Stack Development

---

# ⭐ Why This Project Matters

This project demonstrates the ability to design and develop a **complete full-stack e-commerce application** from frontend to backend and database integration.

It showcases practical experience with **React-based UI development, REST API design, authentication, MongoDB database management, cloud image storage, payment gateway integration, shopping cart functionality, order processing, and admin-side management**.

The project reflects real-world software development practices and provides hands-on experience with technologies commonly used in modern **MERN Stack and Full Stack Developer** roles.

---

# 📌 Project Highlights

```text
✅ MERN Stack E-Commerce Application
✅ Separate Customer & Admin Applications
✅ JWT Authentication
✅ bcrypt Password Hashing
✅ MongoDB Database
✅ Mongoose ODM
✅ Cloudinary Image Upload
✅ Stripe Online Payment
✅ Cash on Delivery
✅ Shopping Cart
✅ Product Filtering
✅ Order Management
✅ Admin Product Management
✅ REST APIs
✅ Responsive React UI
