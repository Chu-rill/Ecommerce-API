# E-commerce API

A robust RESTful API built with TypeScript and Express.js for managing an e-commerce platform. Features include user authentication, product management, shopping cart functionality, and admin controls.

## 🌟 Features

- **Authentication & Authorization**

  - JWT-based authentication
  - Role-based access control (Admin, Seller, User)
  - Email verification and password reset

- **User Management**

  - User registration and profile management
  - Seller account creation and verification
  - Admin controls for user blocking/unblocking

- **Product Management**

  - Product CRUD operations
  - Category management
  - Image upload support
  - Product approval workflow

- **Shopping Features**

  - Shopping cart management
  - Order processing
  - Transaction history
  - Product reviews and ratings

- **Admin Dashboard**
  - User management
  - Product approval system
  - Seller verification
  - Transaction monitoring

## 🛠️ Tech Stack

- TypeScript
- Express.js
- Prisma ORM
- PostgreSQL
- JWT Authentication
- Jest for testing
- Railway for deployment

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ecommerce-api.git
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Environment Setup**
   Copy .env.example to .env
   Configure your database and other environment variables
4. **Database Setup**
   ```bash
   npx prisma migrate dev
   ```
5. **Start Development Server**
   ```bash
   npm run dev
   ```

## 📚 API Documentation

Base URL: https://ecommerce-api-production-5b59.up.railway.app/

### API Endpoints

- **Auth**: /api/v1/auth
  Registration, login, password reset
- **Users**: /api/v1/users
  User profile management
- **Products**: /api/v1/products
  Product CRUD operations
- **Categories**: /api/v1/categories
  Category management
- **Cart**: /api/v1/carts
  Shopping cart operations
- **Admin**: /api/v1/admin
  Administrative functions

## 🔒 Security

- JWT token authentication
- Request validation using middleware
- Password encryption
- Protected routes
- Input sanitization

## 🧪 Testing

```bash
npm run test
```

## 📄 License

MIT
