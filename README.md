# UrbanEats Docker Project

## Overview

This project demonstrates a multi-container application using Docker Compose. It includes a frontend web service, backend API, database, cache, message queue, and reverse proxy.

---

## Services

* **Web (Frontend)** → Port 80 (via Nginx)
* **API (Backend)** → Port 4000 (internal)
* **PostgreSQL (Database)** → Port 5432
* **Redis (Cache)** → Port 6379
* **RabbitMQ (Queue)** → Port 15672 (management UI)
* **Nginx (Reverse Proxy)** → Port 80

---

## How to Run the Project

### 1. Install Docker Desktop

Make sure Docker Desktop is installed and running.

### 2. Clone the repository

git clone https://github.com/2naligaming2002/urbaneats-docker.git
cd urbaneats-docker

### 3. Start the application

docker compose up -d --build

---

## Access the Application

Web App:
http://localhost

API:
http://localhost/api

RabbitMQ Dashboard:
http://localhost:15672

Login:
Username: admin
Password: admin

---

## Notes

* The `.env` file is NOT included for security reasons.
* Use `.env.example` as a template if needed.
* All services run in a Docker network and communicate internally.

---

## Author

Manish Neupane
