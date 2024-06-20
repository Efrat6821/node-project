# Business Management API

This is a RESTful API for managing a small business, built with Node.js, Express, and MongoDB.

## Features

- User authentication and authorization
- CRUD operations for businesses and products
- JWT-based authentication
- Middleware for protecting routes
- Global error handling
- Environment variables support
- Logging with log4js
- Unit tests with Jest and Supertest

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Efrat6821/node-project.git
cd node-project
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file and add the following variables:

```dotenv
JWT_SECRET=br!mfc6^GFDSChgvHGF95$%^^&
```

4. Start the server:

```bash
node app.js
```

5. Run tests:

```bash
npm test
```

## Endpoints

### Auth

- `POST /user/signUp` - Sign up a new user
- `POST user/signIn` - Sign in an existing user

### Business

- `POST /business` - Create a new business (Admin only)
- `PUT /business/:id` - Update an existing business (Admin only)
- `GET /business` - Get all business (Admin only)
- `GET /business/:id` - Get business By id(Admin only)

### Services

- `POST /service` - Create a new service (Admin only)
- `PUT /service/:id` - Update an existing service (Admin only)
- `GET /service` - Get all services
- `GET /service/:id` - Get service by id
- `DELETE /service/:id` - Delete service by id(Admin only)
  
 ### Meetings

- `POST /meeting` - Create a new meeting 
- `PUT /meeting/:id` - Update an existing meeting (Admin only)
- `GET /meeting` - Get all meetings
- `GET /meeting/:id` - Get meeting by id
- `DELETE /meeting/:id` - Delete meeting by id (Admin only)
  
  ### Users

- `GET /user` - Get all users (Admin only)
  
## License

This project is licensed under the MIT License.
