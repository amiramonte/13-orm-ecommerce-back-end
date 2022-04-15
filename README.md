# E-Commerce Back End

## Table of contents

- [Description](#description)
- [Functionality](#functionality)
- [Deployed Application](#deployed-application)
- [Technologies](#technologies)
- [Installation](#installation)
- [Credits](#credits)

---

## Description

This project was built to help reinforce the following skills:

- Node.js
- Express.js
- Sequelize ORM
- MySQL
- Routing
- Object destructuring
- Exporting and Importing
- File directory Management
- Heroku Deployment

---


## Functionality 


![Demonstration of back end routes](./assets/orm_ecommerce_back_end.gif)


---


## Deployed Application

- [Heroku Deployed E-Commerce Back End](https://serene-beach-57426.herokuapp.com/)

---


## Technologies

Project is created with:

- [JavaScript](https://www.javascript.com/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [MySQL](https://www.mysql.com/)
- [Node MySQL2](https://www.npmjs.com/package/mysql2)
- [Sequelize ORM](https://sequelize.org/)


---

## Installation

1. Clone the repository from Github down to your local machine
2. Open the repository in your preferred source code editor
3. Navigate to your command line interface and enter `npm i` to install all dependencies
4. Set up a .env file with login credentials for MySQL on your local machine
5. Access MySQL on your local machine through your command line interface by inputting `mysql -u root -p` and input your MySQL password
6. Once in MySQL, input `source db/schema.sql` to set up the database on your local machine
7. Type `quit` to exit MySQL
8. Input `npm run seed` into your command line interface to seed your database
9. Input `npm start` into your command line interface to start program 
10. Once you receive a response that the server is operational in your command line interface, you can navigate to `http://localhost:3001/` on your preferred web browser
11. Use the following URLs to view the seeded data:
  - `http://localhost:3001/api/categories`
  - `http://localhost:3001/api/products`
  - `http://localhost:3001/api/tags` 

---

## Credits
  
#### Alex Miramontes - Jr. Web Developer

[Github](https://www.github.com/amiramonte)
