# The_blue_book
# The Blue Book – Voucher and Cart Management System

This project is a web-based voucher and cart management system, designed to simplify e-commerce operations. It allows users to create, view, and manage vouchers, as well as add or remove them from a shopping cart.

---

## Features

- Create, view, and delete vouchers
- Add vouchers to cart and view cart contents
- User registration (sign-up)
- MongoDB for cloud-based data storage
- REST API integration between frontend and backend
- Hosted on AWS EC2

---

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript (Fetch API)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Hosting:** AWS EC2 (backend), GitHub (code)

---

## How to Run This Project

### 1. Clone the repository:
```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
2. Install dependencies:
bash
Copy
Edit
npm install
3. Set up your .env file:
Create a .env file in the root folder with the following:

ini
Copy
Edit
MONGO_URI=your-mongodb-uri
PORT=3000
4. Start the server:
bash
Copy
Edit
node app.js
📬 API Endpoints (Sample)
POST /api/products – Create a voucher

GET /api/products – Get all vouchers

DELETE /api/products/:id – Delete a voucher

POST /api/cart – Add to cart

GET /api/cart – View cart

Testing
Use Postman to test API endpoints like:

Creating a voucher

Adding a voucher to the cart

Viewing cart contents

Future Improvements
Admin login & authentication

Export cart data to CSV

Add reporting dashboard

Dockerize the app for production

Author
Jerish Raj Arockiasamy
Student ID: 20055825
Technological University of Dublin

yaml
Copy
Edit

---

###How to Add README to GitHub

1. Save the file as `README.md` inside your project folder.
2. In VS Code:
   ```bash
   git add README.md
   git commit -m "Add README file"
   git push
Go to your GitHub repo → You’ll now see the README displayed on the main page.
