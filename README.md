# Podcast API

![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![License](https://img.shields.io/badge/license-Unlicensed-red.svg?style=for-the-badge)

## Project Overview

This is a robust backend engineering project designed to demonstrate mastery of **NestJS**, **TypeScript**, and **RESTful architecture**.

Built with scalability and maintainability in mind, this application serves as a comprehensive example of modern **Backend Development**. It showcases best practices in **API Design**, efficient **CRUD Operations**, and the power of **Dependency Injection**. The codebase leverages **Data Transfer Objects (DTOs)** for strict data validation and follows a **Modular Architecture** to ensure clean separation of concerns.

## Tech Stack

- **Framework:** NestJS
- **Language:** TypeScript
- **Runtime:** Node.js
- **Testing:** Jest
- **Reactive Programming:** RxJS
- **Linting & Formatting:** ESLint, Prettier

## Installation & Running

Follow these steps to set up the project locally.

### 1. Clone the repository

```bash
git clone <https://github.com/Waleed-Ahmad-dev/podcast-api.git>
cd podcast-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the application

```bash
# Development mode
npm run start:dev

# Production mode
npm run start:prod
```

## API Reference

The API follows RESTful conventions. Below is a detailed list of the available endpoints.

| Method   | Endpoint             | Description                                                                                                         |
| :------- | :------------------- | :------------------------------------------------------------------------------------------------------------------ |
| `GET`    | `/episodes`          | Retrieve a list of all episodes. Supports optional sorting via query parameter (e.g., `?sort=asc` or `?sort=desc`). |
| `GET`    | `/episodes/featured` | Retrieve a list of featured episodes.                                                                               |
| `POST`   | `/episodes`          | Create a new episode. Payload must adhere to the `CreateEpisodeDto`.                                                |
| `GET`    | `/episodes/:id`      | Retrieve the details of a specific episode by its unique ID.                                                        |
| `PUT`    | `/episodes/:id`      | Update an existing episode by its unique ID. Payload supports partial updates via `UpdateEpisodeDto`.               |
| `DELETE` | `/episodes/:id`      | Remove an episode from the system by its unique ID.                                                                 |

## Project Structure

This project adopts the standard NestJS modular architecture:

- **Modules:** The application is divided into feature modules (e.g., `EpisodesModule`) to organize code by domain.
- **Controllers:** Responsible for handling incoming requests and returning responses (`EpisodesController`).
- **Services:** Contain the business logic and interact with the data layer (`EpisodesService`).
- **DTOs:** Define the shape of data for creating and updating resources, ensuring type safety and validation (`CreateEpisodeDto`, `UpdateEpisodeDto`).

## Future Roadmap

The following features are planned for future releases to further enhance the application:

- **Database Integration:** Implement persistent storage using **PostgreSQL** and **TypeORM**.
- **API Documentation:** Integrate **Swagger (OpenAPI)** for interactive API documentation and testing.
