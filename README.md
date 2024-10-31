# Cheeseria

Welcome to Cheeseria, your one-stop shop for fine cheeses! This project showcases a simple proof of concept (POC) for a cheeseria application, featuring a front-end built with React and a back-end API built with Node.js. Customers can view cheese selections, calculate prices based on weight, and interact with a user-friendly interface.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup Instructions](#setup-instructions)
- [Running the Application](#running-the-application)
- [Docker Setup](#docker-setup)

## Features

- View a selection of five different cheeses with images, prices per kilo, and colors.
- Calculate the total price based on the selected cheese and desired weight.
- CRUD capabilities for managing cheese data.
- User-friendly interface with responsive design.

## Technologies

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express, Swagger/OpenAPI for documentation
- **Testing**: Jest, React Testing Library
- **Docker**: Multi-stage builds for streamlined deployment

## Setup Instructions

### Prerequisites

Make sure you have the following installed:

- Node.js (v12 or higher)
- npm or yarn
- Docker (optional for containerization)

### Install Dependencies
```
// api
cd api
yarn

// front end
cd client
yarn
```
## Running the Application
```
// api
cd api
yarn start

// front end
cd client
yarn start
```

## Docker Setup

To build and run the application using Docker, navigate to the root directory of the project and run:
```
docker-compose up --build
```
This command will build the images for both the frontend and backend and start the application in containers.
