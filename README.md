# Ivan's Pizza (server)

## Description
This repository contains the backend code for Ivan's Pizza web application. It provides API endpoints for managing pizzas and ingredients.

## Installation
1. Clone the repository.
2. Install dependencies using `yarn install`.
3. Create an `.env` file from `.env.example` and provide the database URL.
4. Seed the database with `yarn prisma:seed`.
5. Start the server with `yarn start:dev`.

## Usage
The main endpoints are `/pizza` and `/ingredient`, which can be used for CRUD operations. For example, to edit a pizza, use `/pizza/<id_here>`.

## Dependencies
- **Node.js**: v14 or higher
- **Prisma**: v5.10.2
- **NestJS**: v10.0.0
- **Other dependencies**: Listed in `package.json`

## Configuration
Ensure that the `.env` file contains the correct database URL.
