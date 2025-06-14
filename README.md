# nodejs-homework
## Project Description

This project is a learning Node.js application demonstrating the use of Express, streams, file system operations, CSV processing, and various HTTP server implementations.

### Main Modules and Structure

- **Express REST API**
  Implements routes for working with products and users:
  - `/api/products` — list all products ([routes/products.js](routes/products.js))
  - `/api/products/:id` — get product details by id
  - `/api/products/:id/reviews` — get reviews for a product
  - `/api/users` — list all users ([routes/users.js](routes/users.js))
  Data is loaded from [models/products.js](models/products.js) and [models/users.js](models/users.js).

- **Middlewares**
  - [`middlewares/queryParser.js`](middlewares/queryParser.js) — parses URL query parameters.
  - [`middlewares/cookieParser.js`](middlewares/cookieParser.js) — parses cookies.

- **Streams and File Operations**
  [src/utils/streams.js](src/utils/streams.js) provides CLI commands for:
  - Reversing and transforming text from stdin
  - Outputting file contents
  - Converting CSV to JSON (to stdout or file)
  - Bundling CSS files

- **File Import Modules**
  [src/modules/dirwatcher.js](src/modules/dirwatcher.js) implements a class for watching new files in a directory, and [src/modules/importer.js](src/modules/importer.js) handles new file events and imports CSV data.

- **HTTP Servers**
  The [src/http-servers/](src/http-servers/) folder contains server examples:
  - plain-text, echo, JSON, HTML (with template data injection)

- **Configuration**
  Main application settings are stored in [config/appconfig.json](config/appconfig.json).

### API Examples

- `GET http://localhost:8080/api/products`
  Returns a list of all products.

- `GET http://localhost:8080/api/products/1`
  Returns details for the product with id 1.

- `GET http://localhost:8080/api/products/1/reviews`
  Returns reviews for the product with id 1.

- `GET http://localhost:8080/api/users`
  Returns a list of all users.

- `GET http://localhost:8080/api/users/2`
  Returns details for the user with id 2.

### Running the Project

- Install dependencies:
  `npm install`
- Start the application:
  `npm start`
- The REST API will be available at `http://localhost:8080`

### CI/CD

The project includes:
- Travis CI ([.travis.yml](.travis.yml))
- GitHub Actions ([.github/workflows/node.js.yml](.github/workflows/node.js.yml))
- Dependabot ([.github/dependabot.yml](.github/dependabot.yml))

---
