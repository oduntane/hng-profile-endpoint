# HNG13 Backend Task - Stage 0: Dynamic Profile Endpoint

Project submission for the HNG13 Backend Track (Stage 0).

The task is to create a RESTful API endpoint (<code>/me</code>) that returns profile information along with a 
dynamic cat fact fetched from an external API.

## Tech Stack

* Runtime: Node.js
* Framework: Express.js
* HTTP Client: Axios

## Project Overview

The <code>/me</code> endpoint returns a JSON response with the following:
* A Static user profile information
* The current UTC timestamp (ISO 8601 format)
* A random cat fact on each request from the Cat Facts API

## API Endpoint

<strong>GET</strong> <code>/me</code>

Example Response
```json
{
  "status": "success",
  "user": {
    "email": "johnny@example.com",
    "name": "Johnny Appleseed",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-16T05:54:01.585Z",
  "fact": "Cats have been domesticated for half as long as dogs have been."
}
```

## Local Setup Instructions

1. <strong>Clone the Repository</strong>
    ```
        > git clone https://github.com/oduntane/hng-profile-endpoint
        > cd hng-profile-endpoint
    ```
2. <strong>Install Dependencies</strong>
    ```
   > npm install
   ```
3. <strong>Configure Environment Variables</strong>
   ```
   USER_EMAIL=<your email address>
   ```
4. <strong>Run the Server</strong>
   ```
   > npm start
   ```
   
## Testing the Endpoint
Use your browser, Postman or curl:
```
> curl http://localhost:3000/me
```
You should see a JSON response similar to the <a href="#api-endpoint">example above</a>

## Dependencies
| Package | Purpose                            |
|---------|------------------------------------|
| express | Web framework for building the API |
| axios   | HTTP client to fetch cat facts     |


## Deployment Link

> Live URL: <a href="https://hng-profile-endpoint-production-9947.up.railway.app/">Dynamic Profile Endpoint</a>
