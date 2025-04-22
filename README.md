# The Blue Book – Voucher and Cart Management System

## Project Info

The Blue Book is a web-based voucher and cart management system developed as part of the *Programming for Information Systems* module. This system enables users to create and view discount vouchers, add them to a shopping cart, and manage those selections. The backend is powered by Node.js and Express.js, with MongoDB Atlas as the cloud-based NoSQL database. The entire system is deployed on an AWS EC2 instance.

---

## Components

### Frontend
- HTML, CSS, and JavaScript
- Fetch API used to interact with backend
- Simple UI to list vouchers and interact with the cart

### Backend
- Built with Node.js and Express.js
- Modular routes for products, cart, users, and orders
- Mongoose used to manage MongoDB collections

### Database
- MongoDB Atlas (NoSQL cloud database)
- Mongoose schemas for Product, Cart, and User

### Deployment
- Hosted on AWS EC2 instance
- GitHub used for version control

---

## API Endpoints

### Products
| Method | Endpoint              | Description                    |
|--------|-----------------------|--------------------------------|
| POST   | `/api/products`       | Create a new product/voucher   |
| GET    | `/api/products`       | Retrieve all products          |
| GET    | `/api/products/:id`   | Get product details by ID      |
| DELETE | `/api/products/:id`   | Delete a product               |

### Cart
| Method | Endpoint              | Description                    |
|--------|-----------------------|--------------------------------|
| POST   | `/api/cart`           | Add product to cart            |
| GET    | `/api/cart`           | View cart contents             |
| DELETE | `/api/cart/:id`       | Remove item from cart          |

### Users
| Method | Endpoint              | Description                    |
|--------|-----------------------|--------------------------------|
| POST   | `/api/signup`         | Register a new user            |
| GET    | `/api/users/status`   | Check if user is registered    |

---

## 🛠️ How to Clone and Run

### 1. Clone the Repository

```bash
git clone https://github.com/Jerishraj7/The_blue_book.git
cd The_blue_book
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create .env File

```bash
MONGO_URI=your_mongodb_atlas_uri
PORT=3000
````

### 4. Start the Server

```bash
node app.js
```

> Your server should be running at http://localhost:3000 or your EC2 public IP.

## Conclusion

The Blue Book project showcases the development of a full-stack information system using modern technologies such as Node.js, Express, MongoDB Atlas, and AWS EC2. It demonstrates key programming concepts like API design, CRUD operations, frontend-backend integration, and cloud deployment. This project serves as a foundational step toward building scalable, cloud-ready applications.


