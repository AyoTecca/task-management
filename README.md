# NestJS Task Management Application

A comprehensive task management API built with [NestJS](https://nestjs.com), TypeORM, PostgreSQL, and JWT authentication. This application allows users to create, manage, and track tasks with user-based access control.

## Description

This is a production-ready task management backend API that demonstrates best practices in NestJS development including authentication, database interactions, DTOs, interceptors, and error handling.

## Features

- 🔐 **JWT Authentication** - Secure user registration and login
- 📝 **Task Management** - Create, read, update, and delete tasks
- 🔒 **User Authorization** - Task ownership and access control
- 🎯 **Task Filtering** - Filter tasks by status, priority, and search
- 🗄️ **PostgreSQL Database** - Persistent data storage with TypeORM
- ✔️ **Data Validation** - DTOs with class-validator for input validation
- 🛡️ **Interceptors** - Request/response transformation with TransformInterceptor

## Tech Stack

- **Framework**: NestJS 11
- **Language**: TypeScript
- **Database**: PostgreSQL with TypeORM
- **Authentication**: JWT (Passport)
- **Validation**: class-validator, class-transformer
- **Password Hashing**: bcrypt
- **Environment Management**: dotenv, @hapi/joi

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- PostgreSQL (v12 or higher)

## Project setup

```bash
# Install dependencies
$ yarn install
# or
$ npm install
```

## Environment Configuration

Create `.env` files for different stages:

### `.env.stage.dev` (Development)
```env
STAGE=dev
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=task_management_dev
JWT_SECRET=your-secret-key-dev
JWT_EXPIRATION=3600
```

### `.env.stage.prod` (Production)
```env
STAGE=prod
DB_HOST=prod-host
DB_PORT=5432
DB_USERNAME=prod-user
DB_PASSWORD=prod-password
DB_DATABASE=task_management_prod
JWT_SECRET=your-secret-key-prod
JWT_EXPIRATION=3600
```

## Database Setup

```bash
# Make sure PostgreSQL is running, then create the database
createdb task_management_dev
createdb task_management_prod
```

## Compile and run the project

```bash
# development mode (watches for changes)
$ yarn run start:dev

# production mode
$ yarn run start:prod

# regular start
$ yarn run start
```

## Run tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov

# watch mode
$ yarn run test:watch
```

## API Endpoints

### Authentication
- `POST /auth/signup` - Register a new user
- `POST /auth/signin` - Login user

### Tasks
- `GET /tasks` - Get all tasks (with optional filters)
- `GET /tasks/:id` - Get a specific task
- `POST /tasks` - Create a new task
- `PATCH /tasks/:id/status` - Update task status
- `DELETE /tasks/:id` - Delete a task

## Project Structure

```
src/
├── auth/                 # Authentication module
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   ├── jwt.strategy.ts
│   └── dto/
├── tasks/                # Task management module
│   ├── tasks.controller.ts
│   ├── tasks.service.ts
│   └── dto/
├── entities/             # Database entities
│   ├── users.entity.ts
│   └── tasks.entity.ts
├── app.module.ts         # Root module
└── main.ts              # Application entry point
```

## Code Quality

```bash
# Run ESLint
$ yarn run lint

# Format code with Prettier
$ yarn run format
```

## Deployment

When you're ready to deploy your NestJS application to production, consider using Docker for containerization and cloud platforms like AWS, Heroku, or DigitalOcean.

### Docker Deployment
```bash
# Build Docker image
$ docker build -t nestjs-task-management .

# Run container
$ docker run -p 3000:3000 nestjs-task-management
```

## Resources

- [NestJS Documentation](https://docs.nestjs.com)
- [TypeORM Documentation](https://typeorm.io)
- [JWT Authentication](https://docs.nestjs.com/security/authentication)
- [Passport.js](http://www.passportjs.org)

## License

This project is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

## Author

Created as part of the NestJS learning journey on Udemy.
